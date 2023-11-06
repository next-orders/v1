"use client";

import { useRouter } from "next/navigation";
import { IconArrowBackUp } from "@tabler/icons-react";

export const BackBlock = () => {
  const router = useRouter();

  return (
    <div className="w-full lg:w-auto mx-auto md:mx-0">
      <button
        onClick={() => router.back()}
        className="px-5 py-3 w-full flex flex-row gap-2 justify-center text-base font-normal cursor-pointer rounded-2xl bg-zinc-200 hover:bg-zinc-300 hover:scale-95 duration-200"
      >
        <IconArrowBackUp stroke={1.5} /> Return
      </button>
    </div>
  );
};
