import { TBrand } from "./models/Brand";
import { TInput } from "./remotion/textVideo/types";

export const APP_NAME = "Blinkadz";
const root =
  "https://" + process.env.NEXT_PUBLIC_HOSTNAME || "http://localhost:3000";
export const ROOT_URL = root;
export const API_ROOT = `/api`;
export const DEFAULT_COUNTRY = "IN";
export const API_ROUTES = {
  // AUTH
  AUTH: {
    LOGIN: `${API_ROOT}/login`,
    REFRESH_TOKEN: `${API_ROOT}/refreshTokenForAPI`,
    CREATE_USER: `${API_ROOT}/user`,
  },
  TICKET: {
    CREATE: `${API_ROOT}/ticket`,
  },
  TEMPLATE: {
    CREATE: `${API_ROOT}/template/create`,
    GET: `${API_ROOT}/template/get`,
    UPDATE: `${API_ROOT}/template/update`,
    DELETE: `${API_ROOT}/template/delete`,
  },
  PAYMENT: {
    RAZORPAY: {
      CREATE_ORDER: `${API_ROOT}/payments/razorpay`,
      VERIFY_PAYMENT: `${API_ROOT}/payments/razorpay/verify`,
    },
  },
  PROJECT: {
    CREATE: `${API_ROOT}/project/create`,
    INIT: `${API_ROOT}/project/init`,
    GET: `${API_ROOT}/project/get`,
    UPDATE: `${API_ROOT}/project/update`,
    DELETE: `${API_ROOT}/project/delete`,
    PREVIEW: `${API_ROOT}/project/preview`,
    FINAL: `${API_ROOT}/project/final`,
  },
  RENDERER_SERVICE: {
    ROOT: `${process.env.NEXT_PUBLIC_RENDERING_BACKEND_URL}/api/v1/cloudrun`,
    RENDER: `/render`,
  },
  TEMPLATE_RATING: {
    CREATE: `${API_ROOT}/rate-resource`,
  },
  TEMPLATE_LIKE: {
    CREATE: `${API_ROOT}/like`,
  },
  OTHER: {
    META: `${API_ROOT}/meta`,
  },
};

export const PAYMENT_STATUS = {
  APP: {
    NA: "na", //not attempted
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed",
    REFUNDED: "refunded",
  },
  PAYPAL: {
    CREATED: "CREATED",
    APPROVED: "APPROVED",
    VOIDED: "VOIDED",
    COMPLETED: "COMPLETED",
    SAVED: "SAVED",
    PAYER_ACTION_REQUIRED: "PAYER_ACTION_REQUIRED",
    REFUNDED: "REFUNDED",
    PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED",
    DENIED: "DENIED",
    EXPIRED: "EXPIRED",
    FAILED: "FAILED",
    CANCELED: "CANCELED",
  },
  RAZORPAY: {
    CREATED: "CREATED",
    APPROVED: "APPROVED",
    VOIDED: "VOIDED",
    COMPLETED: "COMPLETED",
    SAVED: "SAVED",
    PAYER_ACTION_REQUIRED: "PAYER_ACTION_REQUIRED",
    REFUNDED: "REFUNDED",
    PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED",
    DENIED: "DENIED",
    EXPIRED: "EXPIRED",
    FAILED: "FAILED",
    CANCELED: "CANCELED",
  },
};

export const NOTIFICATION_TEXTS = {
  LOGIN: {
    OTP_SENT_MOBILE: (phone: string) =>
      `OTP sent to your mobile number: ${phone}`,
  },
  LOGOUT: {
    LOGOUT_SUCCESS: "Successfully logged out",
  },
  RENDER: {
    UPDATE_SUCCESS: "Successfully updated project",
  },
  COMPOSER: {
    SAVED: "Saved Successfully",
    SAVING: "Saving...",
  },
  PREVIEW: {
    RENDERING: "Rendering...",
    RENDERED: "Rendered Successfully",
    FAILED: "Render Failed",
    UNABLE_TO_START: "Unable to start project, please try again later",
  },
  PROFILE: {
    PICTURE_UPDATE_SUCCESS: "Profile picture updated successfully",
  },
  CUSTOM_DEVELOPMENT: {
    SUBMIT_DETAILS_SUCCESS:
      "We would love to talk to you !! Please give us some time and we will get back to you soon.",
  },
  TEMPLATE_REVIEW: {
    SUBMIT_REVIEW_SUCCESS: "Thank you for your valuable review. ",
  },
  TEMPLATE_RATING: {
    SUBMIT_RATING_SUCCESS: "Thank you for rating the template. ",
  },
  TEMPLATE_LIKE: {
    TEMPLATE_LIKE_SUCCESS: "Added to favorites.",
    TEMPLATE_UNLIKE_SUCCESS: "Removed from favorites.",
  },
};

export const FIREBASE_CONSTANTS = {
  QUERY_LIMIT: 10,
  COLLECTIONS: {
    TEMPLATES: "templates",
    PROJECTS: "projects",
    WALLETS: "wallets",
    TRANSACTIONS: "transactions",
    USERS: "users",
    CATEGORIES: "categories",
    RATINGS: "ratings",
    LIKES: "likes",
    RENDER: "renders",
    BLOGS: "blogs",
    GEN_COMP: "generatedCompositions",
    SUBSCRIPTION: "subscriptions",
    BRANDS: "brands",
    ASSETS: "assets",
    USER_ASSETS: "userAssets",
  },
  STORAGE: {
    PATHS: {
      PROFILE_PICTURE: (userId: string, fileName: string) =>
        `users/profiles/${userId}/${fileName}`,
    },
  },
};

export const STORE = {
  STORAGE: {
    USER: "user-storage",
    WALLET: "wallet-storage",
  },
};

export const TEMPLATES_CONSTANTS = {
  PRICE_SLIDER_STEP: 1000,
  MIN_PRICE: 0,
  MAX_PRICE: 10000,
  DEFAULT_PRICE_RANGE: [1000, 3000],
  DEFAULT_SORT_OPTION: "a-z",
};

const twoMbInBytes = 2 * 1024 * 1024;
export const PROFILE_CONSTANTS = {
  PROFILE_PICTURE_MAX_SIZE: twoMbInBytes,
};

export const DEFAULT_TEMPLATE_PROP: TInput = {

  colorPalette: {
    primary: "black",
    secondary: "white",
    tertiary: "black",
    background: "#01111c",
    text: "#F7EEDD",
    highlight: `linear-gradient(113deg, #e23cff 59.91%, #0a5ff9 86.21%)`,
  },
  background: {
    type: "color",
    value: "linear-gradient(113deg, #e23cff 59.91%, #0a5ff9 86.21%)",


  },
  clips: [
    {
      content: [
        {
          id: "1",
          name: "intro",
          type: "text",
          data: "Hey",
          style: {
            fontSize: 50,
          }
        },
        {
          id: "2",
          name: "intro2",
          type: "text",
          data: "Create amazing Videos",
          delay: 1,
          font: "Actor",
          style: {
            fontSize: 50,
            color: "white"
          }
        },


      ],
      duration: 4,
      transition: {
        entry: {
          type: "fade",
          duration: 1,
          timing: "linear"
        },
        exit: {
          type: "slide",
          duration: 1,
          timing: "spring"
        }
      }
    },


  ]
}

export const DEFAULT_BUCKET_NAME = 'avid-ec61f.appspot.com'
export const PUBLIC_CDN_ROOT = `https://storage.googleapis.com/${DEFAULT_BUCKET_NAME}`

export const SUBSCRIPTION_PLANS = {
  //10% discount on annual billing .
  pro_one_day: {
    id: 'pro_one_day',
    name: '1 Day',
    price: {
      'INR': {
        amount: 6900,
        currency: 'INR'

      },
      'USD': {
        amount: 200,
        currency: 'USD'
      }
    },
    description: 'Get access to all the features of the pro plan for 1 day.',
  },
  pro_one_month: {
    id: 'pro_one_month',
    name: '1 Month',
    price: {
      'INR': {
        amount: 50000,
        currency: 'INR'

      },
      'USD': {
        amount: 990,
        currency: 'USD'
      }
    },
    description: 'Get access to all the features of the pro plan for 1 month.',
  },

  pro_one_year: {
    id: 'pro_one_year',
    name: '1 Year',

    price: {
      'INR': {
        amount: 500000,
        currency: 'INR'

      },
      'USD': {
        amount: 7990,
        currency: 'USD'
      }
    },
    description: 'Get access to all the features of the pro plan for 1 year. 10% discount on annual billing.',
  }


}

export const DEFAULT_TEMPLATE_ID = "a2rO5b0Jo0WCbB9iTKnH";

export const DEFAULT_BRAND: TBrand = {
  name: "Blinkadz",
  logo: "public/logo/logo.png",
  website: "https://blinkadz.com",
  colors: {
    primary: "#FF0000",
    secondary: "#000000",
    tertiary: "#FFFFFF",
    contrast: "#000000",
  },
  font: {
    heading: {
      family: "Arial",
      size: 40,
      weight: 700,
    },
    subheading: {
      family: "Arial",
      size: 30,
      weight: 700,
    },
    body: {
      family: "Arial",
      size: 20,
      weight: 400,
    },
  },
  industry: ["Entertainment"],
  targetUser: ["Young Adults"],
  owner: "60c0f0e3e6f3c10015f6f5d8",
  createdAt: new Date('2024-05-03T00:00:00.000Z'),
  updatedAt: new Date('2024-05-03T00:00:00.000Z'),
}