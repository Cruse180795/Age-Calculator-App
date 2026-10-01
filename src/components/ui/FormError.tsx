type FormErrorProps = {
  error: string | undefined;
};

export default function FormError({ error }: FormErrorProps) {
  return (
    <p className={`text-red-400 text-xs italic leading-150 ${error ? "visible" : "hidden"}`}>{error}</p>
  );
}
