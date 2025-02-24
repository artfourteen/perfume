export function unmask(numbers: string) {
  return numbers.replace(/\D/g, "");
}

export function mask(numbers: string) {
  let onlyNumbers = unmask(numbers);
  if (onlyNumbers.startsWith("8")) {
    onlyNumbers = "7".concat(onlyNumbers.slice(1));
  }

  let i = 0;
  const maskedPhoneNumber = "+_ (___) ___-__-__"
    .split("")
    .map((char) => {
      if (char === "_") {
        const number = onlyNumbers.charAt(i);
        if (i < onlyNumbers.length - 1) i += 1;
        return number;
      }
      return char;
    })
    .join("");

  return maskedPhoneNumber;
}
