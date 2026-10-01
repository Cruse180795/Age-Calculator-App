type DisplayOutputStringProps = {
  output: string;
  value?: number;
};

export default function DisplayOutputString({ output, value }: DisplayOutputStringProps) {
  // handle value of 1 so years, months and days if is 1 would read as 1 day instead of 1 days etc.
  const formattedOutput = value === 1 ? output.replace(/s$/, "") : output;

  return (
    <div className="flex items-center gap-x-2 text-black font-extrabold italic tracking-tight-1 text-56 leading-110 md:text-104">
      <span className="text-purple-500">{value ?? "--"}</span>
      <span>{formattedOutput}</span>
    </div>
  );
}
