type FormInputProps = {
  id: string;
  name: string;
  placeholder: string;
};

export default function FormInput({ id, name, placeholder }: FormInputProps) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      required
      className="px-4 py-2 rounded-lg border border-gray-200 text-black font-bold text-xl leading-150 md:px-6 md:text-32"
      placeholder={placeholder}
    />
  );
}
