type DisplayOutputStringProps = {
  output: string;
};

export default function DisplayOutputString({ output }: DisplayOutputStringProps) {
  return (
    <div className="flex items-center gap-x-2 text-black font-extrabold italic tracking-tight-1 text-56 leading-110 md:text-104">
      <span className="text-purple-500">--</span>
      <p>{output}</p>
    </div>
  );
}
