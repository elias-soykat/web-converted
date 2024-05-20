import { useToast } from "./ui/use-toast";

type Props = {
  variant: "default" | "destructive" | null | undefined;
  title: string;
};

export default function Notification({ variant, title }: Props) {
  const { toast } = useToast();

  return toast({ variant, title });
}
