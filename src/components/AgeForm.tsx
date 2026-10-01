import DisplayOutputString from "./ui/DisplayOutputString";
import FormInput from "./ui/FormInput";
import FormLabel from "./ui/FormLabel";
import FormError from "./ui/FormError";
import ArrowIcon from "./icons/ArrowIcon";

import { useState } from "react";

type Errors = { day?: string; month?: string; year?: string };
type Age = { days: number; months: number; years: number };

function calculateAge(today: Date, birthday: Date): Age {
  let years = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();
  let days = today.getDate() - birthday.getDate();

  if (days < 0) {
    const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    const birthDay = Math.min(birthday.getDate(), daysInPreviousMonth);
    days = today.getDate() + (daysInPreviousMonth - birthDay);
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { days, months, years };
}

// regex over the Number() function to check if a string contains only digits
const isDigits = (s: string) => /^\d+$/.test(s);

export default function AgeForm() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [age, setAge] = useState<Age | null>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};
    const today = new Date();
    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    // Different error states to check when submitting
    // Empty inputs - required error message displayed
    // Invalid dates in the current year i.e 21|12|2026 is yet to happen
    // Invalid date i.e 98|14|2177
    // Invalid year i.e 2154
    // Invalid month i.e 14
    // Invalid day i.e 32

    if (!day) {
      // If day input is empty, set error
      newErrors.day = "This field is required";
    } else if (!isDigits(day) || d < 1 || d > 31) {
      // If day input is not a valid day, set error
      newErrors.day = "Must be a valid day";
    }

    if (!month) {
      // If month input is empty, set error
      newErrors.month = "This field is required";
    } else if (!isDigits(month) || m < 1 || m > 12) {
      // If month input is not a valid month, set error
      newErrors.month = "Must be a valid month";
    }

    if (!year) {
      // If year input is empty, set error
      newErrors.year = "This field is required";
    } else if (!isDigits(year) || y < 1900 || y > today.getFullYear()) {
      // checks if year is a valid year (1900-current year)
      // If year input is not a valid year, set error
      newErrors.year = "Must be in the past";
    }

    if (Object.keys(newErrors).length === 0) {
      const birthday = new Date(y, m - 1, d);

      // Prevents dates that roll over like 31/02
      const isARealDate =
        birthday.getFullYear() === y && birthday.getMonth() === m - 1 && birthday.getDate() === d;

      if (!isARealDate) {
        newErrors.day = "Must be a valid date";
      } else if (birthday > today) {
        // prevents user typing a future date that would be considered valid in the other checks like 10/12/2026 (01/10/2026 today)
        newErrors.year = "Must be in the past";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setAge(null);
      return;
    }

    setAge(calculateAge(today, new Date(y, m - 1, d)));
  };

  return (
    <form className="bg-white px-6 py-12 space-y-8 md:px-14 md:py-14 lg:max-w-210" onSubmit={handleSubmit}>
      {/** Inputs */}
      <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
        {/** Day */}
        <div className="grid grid-cols-1 gap-y-2 grid-rows-subgrid row-span-3">
          <FormLabel htmlFor="day" label="day" error={errors.day} />
          <FormInput
            maxLength={2}
            error={errors.day}
            id="day"
            name="day"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />

          <FormError id="day-error" error={errors.day} />
        </div>
        {/** Month */}
        <div className="grid grid-cols-1 gap-y-2 grid-rows-subgrid row-span-3">
          <FormLabel htmlFor="month" label="month" error={errors.month} />
          <FormInput
            maxLength={2}
            error={errors.month}
            id="month"
            name="month"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <FormError id="month-error" error={errors.month} />
        </div>
        {/** Year */}
        <div className="grid grid-cols-1 gap-y-2 grid-rows-subgrid row-span-3">
          <FormLabel htmlFor="year" label="year" error={errors.year} />
          <FormInput
            maxLength={4}
            error={errors.year}
            id="year"
            name="year"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <FormError id="year-error" error={errors.year} />
        </div>
      </div>

      {/** Button and Divider */}
      <div className="flex justify-center items-center">
        <hr className="border-gray-200 w-full" />
        <div className="">
          <button
            type="submit"
            aria-label="calculate age"
            className="bg-purple-500 rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-300 hover:bg-black"
          >
            <ArrowIcon className="size-6 md:size-11" />
          </button>
        </div>
        <hr className="border-gray-200 w-full lg:hidden" />
      </div>

      {/** Outputs */}
      <div aria-live="polite">
        <DisplayOutputString output="years" value={age?.years} />
        <DisplayOutputString output="months" value={age?.months} />
        <DisplayOutputString output="days" value={age?.days} />
      </div>
    </form>
  );
}
