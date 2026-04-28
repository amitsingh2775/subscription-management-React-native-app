import dayjs from "dayjs";

// 1. Currency ko INR aur Indian numbering system (Lakhs/Crores) mein badla
export const formatCurrency = (value: number, currency = "INR"): string => {
  try {
    return new Intl.NumberFormat("en-IN", { // 'en-IN' se ₹ symbol aur comma style Indian ho jayega
      style: "currency",
      currency,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  } catch {
    // Agar error aaye toh ₹ symbol ke saath 2 decimal tak dikhao
    return `₹${value.toFixed(2)}`;
  }
};

// 2. Date format ko Indian style (DD/MM/YYYY) mein badla
export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  //  pehle Date, phir Month 
  return parsedDate.isValid() ? parsedDate.format("DD/MM/YYYY") : "Not provided";
};

// 3. Status label 
export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};