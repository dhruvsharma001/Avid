import { z } from "zod";

const RESPONSE_CODES = {
    APP: {
        //All(most) common error codes along with their messages and resolutions goes here
        // for those codes whose Number is there in HTTP status we use that and for all other Application specific codes we start FROM 0-1000(HTTP RESERVED) 1001-10000()
        // we will categorize the code based on 1000s

        UNAUTHENTICATED: {
            code: 4001,
            message: 'Unauthenticated',
            resolution: 'Please login to continue',

        }


    },
    API: {
        SUCCESS: {
            CREATED: {
                code: 201,
                message: 'Created',

            },
            OK: {
                code: 200,
                message: 'OK'
            },
        },
        //Only API specific  codes which are not there in the APP for example API KEY INVALID
        ERRORS: {
            INTERNAL_SERVER_ERROR: {
                code: 500,
                message: 'Internal Server Error',
                resolution: 'Please try again later'
            },
            UNAUTHORIZED: {
                code: 401,
                message: 'Unauthorized',
                resolution: 'You are not allowed to access this resource',
            },
            INVALID_DATA_PROVIDED: {

                code: 422,
                message: "Invalid Data Provided",
                resolution: 'Please provide valid data',

            },
            INVALID_API_KEY: {
                code: 401,
                message: 'Invalid API Key',
                resolution: 'Please provide valid API Key'
            },
            INVALID_AUTH_TOKEN: {
                code: 401,
                message: 'Invalid Auth Token',
                resolution: 'Please provide valid Auth Token'
            },
            TOKEN_EXPIRED: {
                code: 401,
                message: 'Token Expired',
                resolution: 'Please login again'
            },

            NO_INSERT: {
                code: 503,
                message: 'Unable to insert',
                resolution: 'Please try again later'
            },

            NO_UPDATE: {
                code: 503,
                message: 'Unable to update',
                resolution: 'Please try again later'
            },



            NO_DELETE: {
                code: 503,
                message: 'Unable to delete',
                resolution: 'Please try again later'
            },

            UNKNOWN: {
                code: 500,
                message: 'Unknown Error',
                resolution: 'Please try again later'

            },
            NOT_FOUND: {
                code: 404,
                message: 'Not Found',
                resolution: 'Please try again later or make sure you are passing the correct id'

            },
            NO_PAYMENT: {
                code: 402,
                message: 'Payment Required',
                resolution: 'Please make the payment'
            },
            NO_SUBSCRIPTION: {
                code: 402,
                message: 'Subscription Required',
                resolution: 'Please subscribe to continue'
            },
            NO_CREATE: {
                code: 503,
                message: 'Unable to create',
                resolution: 'Please try again later'
            },
            RATING: {
                DUPLICATE: {
                    code: 409,
                    message: 'Rating already exists',
                    resolution: 'Please try with different template or user'
                }
            },
            LIKE: {
                DUPLICATE: {
                    code: 409,
                    message: 'Rating already exists',
                    resolution: 'Please try with different template or user'
                }
            },
            USER: {
                USER_ALREADY_EXISTS: {
                    code: 409,
                    message: 'User already exists',
                    resolution: 'Please login or try with different email or phone number'
                },
                USER_NOT_FOUND: {
                    code: 404,
                    message: 'User not found',
                    resolution: 'Please login or try with different email or phone number'
                },
                INVALID_EMAIL: {
                    code: 422,
                    message: 'Invalid Email',
                    resolution: 'Please provide valid email'
                },
                INVALID_PHONE: {
                    code: 422,
                    message: 'Invalid Phone',
                    resolution: 'Please provide valid phone'
                },
                EMAIL_CANNOT_BE_CHANGED: {
                    code: 422,
                    message: 'Email cannot be changed',
                    resolution: 'Email once verified cannot be changed. Raise request.'
                },



            }

        }
    }
}
export const responseCodes = z.object({ code: z.number(), message: z.string(), resolution: z.string().optional() })
export type TResponseCodes = z.infer<typeof responseCodes>;

export default RESPONSE_CODES;