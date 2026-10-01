type FormInputProps = {
  maxLength: number;
  error?: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  maxLength,
}: FormInputProps) {
  return (
    <input
      maxLength={maxLength}
      inputMode="numeric"
      type="text"
      id={id}
      name={name}
      className={`px-4 py-2 rounded-lg border text-black font-bold text-xl leading-150 md:px-6 md:text-32 focus:outline-none  ${error ? "border-red-400" : "border-gray-200 focus:border-purple-500"} `}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-invalid={!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  );
}
