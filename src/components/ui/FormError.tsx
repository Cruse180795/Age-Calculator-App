type FormErrorProps = {
  error?: string;
  id: string;
};

export default function FormError({ error, id }: FormErrorProps) {
  return (
    <p className="text-red-400 text-xs italic leading-150" id={id}>
      {error}
    </p>
  );
}
