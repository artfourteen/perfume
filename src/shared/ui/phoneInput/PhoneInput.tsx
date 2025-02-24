import React, { useState, useEffect, InputHTMLAttributes } from "react";
import { cn } from "@/shared/core/cn/cn";

interface PhoneInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = ({
  value,
  onChange,
  error,
  className,
  id,
  ...props
}: PhoneInputProps) => {
  const [displayValue, setDisplayValue] = useState("");

  // Format the phone number as the user types
  const formatPhoneNumber = (input: string) => {
    // Remove all non-digit characters
    const numbers = input.replace(/\D/g, "");

    // Ensure the number starts with 7 if it starts with 8
    let formatted = numbers;
    if (formatted.startsWith("8")) {
      formatted = "7" + formatted.slice(1);
    }

    // Apply the mask
    if (formatted.length === 0) return "";
    if (formatted.length <= 1) return `+${formatted}`;
    if (formatted.length <= 4)
      return `+${formatted.slice(0, 1)} (${formatted.slice(1)}`;
    if (formatted.length <= 7)
      return `+${formatted.slice(0, 1)} (${formatted.slice(
        1,
        4
      )}) ${formatted.slice(4)}`;
    if (formatted.length <= 9)
      return `+${formatted.slice(0, 1)} (${formatted.slice(
        1,
        4
      )}) ${formatted.slice(4, 7)}-${formatted.slice(7)}`;
    return `+${formatted.slice(0, 1)} (${formatted.slice(
      1,
      4
    )}) ${formatted.slice(4, 7)}-${formatted.slice(7, 9)}-${formatted.slice(
      9,
      11
    )}`;
  };

  // Update display value when the actual value changes
  useEffect(() => {
    setDisplayValue(formatPhoneNumber(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numbers = input.replace(/\D/g, "");
    onChange(numbers);
  };

  return (
    <div className="space-y-1">
      <label htmlFor={id || "phoneNumber"} className="text-sm font-light">
        Ваш телефон*
      </label>
      <input
        id={id || "phoneNumber"}
        className={cn(
          "w-full border border-black py-3 px-5 font-light",
          {
            "border-red-500": error,
          },
          className
        )}
        placeholder="+7 (701) 123-45-67"
        autoComplete="tel"
        value={displayValue}
        onChange={handleChange}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PhoneInput;
