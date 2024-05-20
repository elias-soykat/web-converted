import { Button } from "@/components/ui/button";
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
      <Button
        className="my-6 flex items-center justify-center gap-x-1.5 bg-black py-6 font-semibold text-white sm:my-8 lg:text-base"
        type="submit"
      >
        Get Video <ArrowRight className="w-[18px] lg:w-[20px]" />
      </Button>
    </>
  );
}
