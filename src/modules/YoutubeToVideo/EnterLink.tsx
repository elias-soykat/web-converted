import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function EnterLink({ onChange }: any) {
  return (
    <>
      <Input
        onChange={onChange}
        placeholder="Enter Youtube Link"
        type="text"
        className="w-full border border-black px-4 lg:py-6"
        required
      />
      <button
        className="my-6 flex items-center justify-center gap-x-2 rounded bg-black px-3 py-2 text-sm font-semibold text-white sm:my-8 lg:px-4 lg:py-2.5 lg:text-base"
        type="submit"
      >
        Get Video <ArrowRight className="w-[18px] sm:w-[20px]" />
      </button>
    </>
  );
}
