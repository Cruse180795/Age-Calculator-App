type FormLabelProps = {
  label: string;
  htmlFor: string;
  error?: string;
};

export default function FormLabel({ label, htmlFor, error }: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-bold text-xs leading-150 tracking-wide-1 uppercase md:text-sm md:tracking-wide-2 ${error ? "text-red-400" : "text-gray-500"}`}
    >
      {label}
    </label>
  );
}
