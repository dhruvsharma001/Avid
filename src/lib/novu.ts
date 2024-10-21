'use server'
import { TUser } from '@/models/User';
import { TNovuInAppNotification } from '@/types';
import { IGetSubscriberNotificationFeedParams, MarkMessagesAsEnum, Novu } from '@novu/node';




const API_KEY = process.env.NEXT_PRIVATE_NOVU_KEY;

if (!API_KEY) throw new Error('No Novu API Key found in environment variables');

const novu = new Novu(API_KEY);


function getNovuDataForUser(subscriberId: string, data: any) {
    return {
        to: {
            subscriberId: subscriberId,
            email: data.email,
        },
        payload: data
    }
}
export async function createNotificationEvent(event: string, subscriberId: string, data: { email?: string, [key: string]: any }) {
    const novuData = getNovuDataForUser(subscriberId, data);
    const response = await novu.trigger(event, novuData)
    return response;
}

export type TNovuSubscriber = {
    uid: string,
    email: string | undefined,
    displayName: string,
    phoneNumber: string | undefined,
    photoURL: string | undefined,
    isEmailVerified: boolean

}
// update type = TNovuSubscriber - uid
export type TNovuSubscriberUpdate = Omit<TNovuSubscriber, 'uid'>;


export async function registerSubscriber(user: TNovuSubscriber) {
    const firstName = user.displayName.split(' ')[0];
    const lastName = user.displayName.split(' ')[1] ? user.displayName.split(' ')[1] : '';
    const response = await novu.subscribers.identify(user.uid, {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        phone: user.phoneNumber,
        avatar: user.photoURL,
        locale: "en-US",
        data: {
            isEmailVerified: user.isEmailVerified,
            isPhoneVerified: user.phoneNumber ? true : false
        }
    })
    return response;
}

export async function updateSubscriber(uid: string, user: Partial<TNovuSubscriberUpdate>) {
    const firstName = user.displayName && user.displayName.split(' ')[0];
    const lastName = user.displayName && user.displayName.split(' ')[1] ? user.displayName.split(' ')[1] : '';
    const response = await novu.subscribers.update(uid, {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        phone: user.phoneNumber || undefined,
        avatar: user.photoURL,
        locale: "en-US",
    })
    return response;
}
export type TNovuNotificationFeed = {
    data: TNovuInAppNotification[],
    hasMore: boolean,
    page: number,
    pageSize: number,
    totalCount: number
}
export async function getSubscriberInAppNotificationFeed(subscriberId: string, options: IGetSubscriberNotificationFeedParams | undefined): Promise<TNovuNotificationFeed | null> {
    const response = await novu.subscribers.getNotificationsFeed(subscriberId, options);
    if (response.status === 200)
        return response.data;
    return null;
}

export async function getUnseenNotificationCount(subscriberId: string) {
    const response = await novu.subscribers.getUnseenCount(subscriberId, false);
    if (response.status === 200)
        return response.data.data.count;
    return null;
}

export async function markNotificationAsRead(subscriberId: string, notificationId: string) {
    const response = await novu.subscribers.markMessageRead(subscriberId, notificationId);
    return response;
}

export async function markAllNotificationsAsRead(subscriberId: string) {
    const response = await novu.subscribers.markAllMessagesAs(subscriberId, MarkMessagesAsEnum.READ);
    return response;
}

export async function getOrCreateSubscriber(subscriberId: string, email: string, data: any) {
    const existingEmail = await novu.subscribers.get(subscriberId);
    if (existingEmail.status === 200) {
        return existingEmail.data();
    } else {
        const response = await novu.subscribers.identify(subscriberId, {
            email: email,
            data: data
        });
        return response;
    }
    // create if not existing

}
export async function createTopic(name: string) {
    const cleanedName = name.toLocaleLowerCase().replace(' ', '_');
    const response = await novu.topics.create({ key: cleanedName, name: name });
    return response;
}

export async function getTopic(name: string) {
    const cleanedName = name.toLocaleLowerCase().replace(' ', '_');
    const response = await novu.topics.get(cleanedName);
    return response;

}
export async function subscribeToTopic(subscriberId: string, createSubscriber: boolean, topic: string) {
    const topicExists = await getTopic(topic);
    if (topicExists.status !== 200) {
        await createTopic(topic);
    }
    let subId = subscriberId;
    if (createSubscriber) {
        const subscriber = await novu.subscribers.identify(subscriberId, {
            email: subscriberId,
            data: {
                isEmailVerified: false,
                isPhoneVerified: false
            }
        })
        subId = subscriber.data.id
    }

    const response = await novu.topics.addSubscribers(topic, { subscribers: [subId] });

    if (response.status === 200) {
        const data = response.data;
        if (data.errors && data.errors.length > 0) {
            console.error(data.errors)
        }
        return data;

    }
    return null;
}