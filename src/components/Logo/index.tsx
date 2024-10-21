import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TProps = {
  className?: string;
};
export default function Logo({ className }: TProps) {
  return (
    <Link
      href="/"
      className={cn(
        className,
        "flex items-end gap-4 max-h-[50px] cursor-pointer items-center"
      )}
    >
      <Image
        src="/assets/Logo2.png"
        width="14"
        height="30"
        alt="Blinkadz logo"
        className="h-[30px] "
      />

      <h1 className="text-2xl font-bold text-white">Blinkadz</h1>
    </Link>
  );
}
