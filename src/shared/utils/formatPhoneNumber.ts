export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length !== 11) {
    throw new Error("Invalid phone number format");
  }

  return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(
    4,
    7
  )}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
};
