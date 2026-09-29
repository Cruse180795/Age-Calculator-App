import DisplayOutputString from "./ui/DisplayOutputString";
import FormInput from "./ui/FormInput";
import FormLabel from "./ui/FormLabel";
import ArrowIcon from "./icons/ArrowIcon";

export default function AgeForm() {
  return (
    <form className="bg-white px-6 py-12 space-y-8 md:px-14 md:py-14 lg:max-w-210" id="form">
      {/** Inputs */}
      <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
        {/** Day */}
        <div className="grid grid-cols-1 gap-y-2">
          <FormLabel htmlFor="day" label="day" />
          <FormInput id="day" name="day" placeholder="DD" />
          {/** Error state - empty */}
          <p className="text-red-400 text-xs italic leading-150 hidden">This field is required</p>
        </div>
        {/** Month */}
        <div className="grid grid-cols-1 gap-y-2">
          <FormLabel htmlFor="month" label="month" />
          <FormInput id="month" name="month" placeholder="MM" />
          {/** Error state - empty */}
          <p className="text-red-400 text-xs italic leading-150 hidden">This field is required</p>
        </div>
        {/** Year */}
        <div className="grid grid-cols-1 gap-y-2">
          <FormLabel htmlFor="year" label="year" />
          <FormInput id="year" name="year" placeholder="YYYY" />
          {/** Error state - empty */}
          <p className="text-red-400 text-xs italic leading-150 hidden">This field is required</p>
        </div>
      </div>

      {/** Button and Divider */}
      <div className="flex justify-center items-center">
        <hr className="border-gray-200 w-full" />
        <div className="">
          <button className="bg-purple-500 rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-300 hover:bg-black">
            <ArrowIcon className="size-6 md:size-11" />
          </button>
        </div>
        <hr className="border-gray-200 w-full lg:hidden" />
      </div>

      {/** Outputs */}
      <div>
        <DisplayOutputString output="years" />
        <DisplayOutputString output="months" />
        <DisplayOutputString output="days" />
      </div>
    </form>
  );
}
