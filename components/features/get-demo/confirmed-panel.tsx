"use client";

import { format } from "date-fns";
import { CheckCircle2 } from "lucide-react";

export function ConfirmedPanel({
  name,
  date,
  time,
  timezone,
}: {
  name: string;
  date: Date | undefined;
  time: string | undefined;
  timezone: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center md:p-8">
      <div className="flex size-14 items-center justify-center rounded-full bg-[#B4F656]">
        <CheckCircle2 className="size-7 text-black" />
      </div>

      <h2 className="text-xl font-semibold text-black md:text-2xl">
        You&apos;re booked, {name.split(" ")[0]}!
      </h2>

      {date && time && (
        <p className="text-[15px] text-gray-500">
          {format(date, "EEEE, MMMM d")} at {time} ({timezone.replace(/_/g, " ")})
        </p>
      )}

      <p className="max-w-sm text-[14px] leading-relaxed text-gray-500">
        A calendar invite with the Zoom link is on its way to your inbox. See
        you soon!
      </p>
    </div>
  );
}
