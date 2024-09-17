import { validateLocaleAndSetLanguage } from "typescript";

export const dateFormat = (date: Date, includeYear?: boolean) => {
  const date1 = new Date(Date.now());
  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  // Calculating the time difference between two dates
  const diffInTime = date.getTime() - date1.getTime();
  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);
  if (diffInDays == 0) {
    return "Today";
  }
  if (diffInDays == -1) {
    return "Yesterday";
  }
  const dateProperties: any = includeYear
    ? {
        day: "numeric",
        year: "numeric",
        month: "short",
      }
    : {
        month: "short",
        day: "numeric",
      };
  let formattedDate = date
    .toLocaleDateString("en-au", dateProperties)
    .split(" ");
  const resultDate =
    formattedDate.slice(0, 1) +
    " " +
    formattedDate.slice(1, 2) +
    ", " +
    formattedDate.slice(2, 3);
  return resultDate;
};
// check for NAN
export const checkNAN = (value: any) => {
  if (Number.isNaN(value)) {
    return 0;
  } else {
    return value;
  }
};
export const checkIfDebitCredit = (value: string) => {
  if (value === "debit") {
    return "-";
  } else if (value === "credit") {
    return "+";
  } else {
    return "";
  }
};
//Hide account number

export const applyAsterix = ({
  str,
  mask,
  n = 1,
}: {
  str: string;
  mask: any;
  n: number;
}) => {
  let newval = "";
  let unMaskedString = ("" + str).slice(0, -n).replace(/./g, mask);
  unMaskedString = unMaskedString.replace(/\s/g, "");
  for (var i = 0; i < unMaskedString.length; i++) {
    //add space if modulus of 4 is 0
    if (i % 3 == 0 && i > 0) newval = newval.concat(" ");
    newval = newval.concat(unMaskedString[i]);
  }

  return newval + " " + ("" + str).slice(-n);
};
//Check if a date is yesterday

export const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // 👇️ Yesterday's date

  if (yesterday.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
};
export const convertDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60))
    .toString()
    .padStart(2, "0");
  const timezoneMinutes = Math.abs(timezoneOffset % 60)
    .toString()
    .padStart(2, "0");
  const timezoneSign = timezoneOffset < 0 ? "+" : "-";
  const timezone = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`;
};
export const rightDateFormat = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60))
    .toString()
    .padStart(2, "0");
  const timezoneMinutes = Math.abs(timezoneOffset % 60)
    .toString()
    .padStart(2, "0");
  const timezoneSign = timezoneOffset < 0 ? "+" : "-";
  const timezone = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
export const nthNumber = (number: any) => {
  return number > 0
    ? ["th", "st", "nd", "rd"][
        (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
      ]
    : "";
};

export const maskCreditCardNumber = (creditCardNumber: string): string => {
  const visibleDigits = 5; // show first digit and last 4 digits
  const maskedLength = creditCardNumber.length - visibleDigits;
  const maskedDigits = "*".repeat(maskedLength);
  const visiblePart =
    creditCardNumber.substring(0, 1) +
    maskedDigits +
    creditCardNumber.substring(creditCardNumber.length - 4);
  return visiblePart;
};
export const calculateGoalMaturityDate = ({
  goalAmount,
  frequency,
  contributionAmount,
  dateStr,
}: {
  goalAmount?: any;
  frequency?: string;
  contributionAmount?: any;
  dateStr?: any;
}) => {
  // Convert start date string to datetime object
  const startDate = new Date(rightDateFormat(dateStr));
  //calculate number of weeks or months required to reach the goal amount
  if (goalAmount > 0) {
    const numPeriods = parseInt(goalAmount) / parseInt(contributionAmount);
    //calculate the goal maturity date base on the start date and number of periods
    let date;
    if (frequency == "weekly") {
      const maturityDate: any = startDate.setDate(
        startDate.getDate() + 7 * numPeriods
      );
      date = dateFormat(new Date(maturityDate), true);
      return date;
    } else {
      const maturityDate: any = startDate.setDate(
        startDate.getDate() + 30 * numPeriods
      );
      date = dateFormat(new Date(maturityDate), true);
      return date;
    }
  }
};

/** @ts-ignore */
export function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      /** @ts-ignore */
      func.apply(this, args);
    }, wait);
  };
}

export const formatDate = (dateString: any) => {
  // Create a mapping for month abbreviations to full names
  const months: any = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  // Split the input date string into parts (remove the comma)
  const parts = dateString.replace(",", "").split(" ");

  // Get the day (e.g., 8)
  const day = parts[0];

  // Get the month abbreviation (e.g., Sep) and convert it to the full name
  const month = months[parts[1]];

  // Get the year
  const year = parts[2];

  // Return the formatted string
  return `${day} ${month} ${year}`;
};
