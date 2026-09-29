type FormLabelProps = {
  label: string;
  htmlFor: string;
};

export default function FormLabel({ label, htmlFor }: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-bold text-xs leading-150 tracking-wide-1 text-gray-500 uppercase"
    >
      {label}
    </label>
  );
}
