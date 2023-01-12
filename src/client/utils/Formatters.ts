import { validateLocaleAndSetLanguage } from "typescript";

export const dateFormat = (date: Date) => {
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
  if (diffInDays == 1) {
    return "Yesterday";
  }
  let formattedDate = date
    .toLocaleDateString("en-au", {
      day: "numeric",
      year: "numeric",
      month: "short",
    })
    .split(" ");
  const resultDate =
    formattedDate.slice(0, 1) +
    " " +
    formattedDate.slice(1, 2) +
    ", " +
    formattedDate.slice(2, 3);
  return resultDate;
};
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

export const isYesterday=(date: Date)=>{
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // 👇️ Yesterday's date
  console.log(date);

  if (yesterday.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}
