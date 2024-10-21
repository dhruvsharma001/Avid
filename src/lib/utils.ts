import { DEFAULT_COUNTRY } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from 'uuid';
/**
 * The function `cn` in TypeScript merges multiple class values using `clsx` and `twMerge`.
 * @param {ClassValue[]} inputs - The `inputs` parameter in the `cn` function is a rest parameter that
 * allows you to pass in multiple arguments of type `ClassValue`. These arguments can be strings,
 * arrays of strings, or objects where the keys are class names and the values are boolean expressions
 * to conditionally apply the class names
 * @returns The `cn` function is returning the result of merging the class names passed as arguments
 * using the `clsx` function and then applying Tailwind CSS utility classes using the `twMerge`
 * function.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "INR":
      return "₹";
    default:
      return "";
  }
};
export const getPriceString = (price: number, currency: string = "INR") => {
  if (price === 0) {
    return "Free";
  }

  return `${getCurrencySymbol(currency)} ${price / 100} `;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * The function `getErrorText` takes an error object as input and returns a text representation of the
 * error, handling different types of errors.
 * @param {any} error - The `error` parameter in the `getErrorText` function can be of any type. The
 * function checks the type of the `error` parameter and returns a corresponding error message. If
 * `error` is a string, it converts it to uppercase. If `error` is an instance of the `
 * @returns The `getErrorText` function returns a string based on the type of the `error` parameter
 * passed to it. If the `error` is a string, it returns the uppercase version of the string. If the
 * `error` is an instance of `Error`, it returns the error message. If the `error` is an object, it
 * returns the `code` property if it exists, otherwise
 */
export const getErrorText = (error: any) => {
  let text = "";
  if (typeof error === "string") {
    text = error.toUpperCase(); // works, `e` narrowed to string
  } else if (error instanceof Error) {
    text = error.message;
  } else if (error instanceof Object) {
    text = error.code || error.message || JSON.stringify(error);
  } else {
    text = "Unknown Error";
  }
  return text;
};

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const getFileExtension = (file?: File) => {
  if (!file) return;

  const fileName = file.name;

  const fileExtension = fileName.split(".")[1];

  return fileExtension;
};
export const getUserCountry = () => {
  const userCountry = localStorage.getItem("country") || DEFAULT_COUNTRY;
  return userCountry;
};

export const getUserCurrency = () => {
  const country = getUserCountry();
  if (country == "IN") {
    return "INR";
  } else if (country == "US") {
    return "USD";
  } else {
    return "USD";
  }

}


/**
 * The function generates a random combination of an adjective and a noun to create a unique project
 * name.
 * @returns A randomly generated project name consisting of an adjective followed by a noun.
 */
export const generateRandomRenderName = () => {
  const adjectives = [
    "Dynamic",
    "Cinematic",
    "Vibrant",
    "Expressive",
    "Seamless",
    "Polished",
    "Creative",
    "Fluid",
    "Sleek",
    "Transcendent",
    "Evocative",
    "Captivating",
    "Harmonious",
    "Immersive",
    "Progressive",
    "Whimsical",
    "Elemental",
    "Pulsating",
    "Aesthetic",
    "Infinite",
    "Ethereal",
    "Enchanting",
    "Luminescent",
    "Fusion",
    "Intuitive",
    "Vivid",
    "Versatile",
    "Kinetic",
    "Radiant",
    "Stellar",
  ];
  const nouns = [
    "Vision",
    "Spectrum",
    "Canvas",
    "Frame",
    "Reel",
    "Clip",
    "Scene",
    "Pixel",
    "Motion",
    "Vortex",
    "Matrix",
    "Forge",
    "Craft",
    "Slice",
    "Playbook",
    "Sync",
    "Pulse",
    "Blend",
    "Flex",
    "Sphere",
    "Realm",
    "Mystique",
    "Vibe",
    "Sculpt",
    "Muse",
    "Verve",
    "Magic",
    "Tech",
    "Mix",
    "Flow",
  ];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
};


export const clipStringToLength = (str: string, length: number, ellipses: boolean = true) => {
  if (str.length <= length) return str;
  const el = ellipses ? "..." : "";
  return str.slice(0, length) + el;
}

/* The `getValueByPath` function takes an object `obj` and a string `path` as input. It
then splits the `path` string by '.' to get an array of keys representing the nested
properties to access in the object. */
export function getValueByPath(obj: any, path: string): any {
  const parts = path.split('.');
  let current = obj;

  for (let part of parts) {
    if (current[part] === undefined) {
      return undefined;
    } else {
      current = current[part];
    }
  }

  return current;
}

export function generateUUID() {
  return uuidv4();
}