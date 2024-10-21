import { User } from "firebase/auth";
import { SUBSCRIPTION_PLANS } from "./constants";


export type TUser = User & {
    role: 'admin' | 'user' | 'creator',

}


export interface TNovuInAppNotification {
    cta: Cta
    actor: Actor
    _id: string
    _templateId: string
    _environmentId: string
    _messageTemplateId: string
    _notificationId: string
    _organizationId: string
    _subscriberId: string
    _jobId: string
    templateIdentifier: string
    _feedId: any
    channel: string
    content: string
    providerId: string
    deviceTokens: any[]
    seen: boolean
    read: boolean
    status: string
    transactionId: string
    payload: Payload
    expireAt: string
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
    subscriber: Subscriber
    actorSubscriber: any
    id: string
}

export interface Cta {
    action: Action
    type: string
    data: Data
}

export interface Action {
    buttons: any[]
}

export interface Data {
    url: string
}

export interface Actor {
    type: string
    data: string
}

export interface Payload {
    __source: string
}

export interface Subscriber {
    _id: string
    firstName: string
    lastName: string
    subscriberId: string
    avatar: string
    id: string
}

export type TSubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS;