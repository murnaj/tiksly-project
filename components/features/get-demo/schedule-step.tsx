"use client";

import { addMinutes, format, isBefore, isToday, startOfDay } from "date-fns";
import { Globe } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { TimezoneSelect } from "./timezone-select";

const SLOT_COUNT = 7;
const SLOT_INTERVAL_MINUTES = 30;
const START_HOUR = 9;

function getTimeSlotsForDate(date: Date): string[] {
  const day = startOfDay(date);
  const now = new Date();

  let start = addMinutes(day, START_HOUR * 60);
  if (isToday(date) && isBefore(start, now)) {
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    const roundedMinutes =
      Math.ceil(minutesSinceMidnight / SLOT_INTERVAL_MINUTES) * SLOT_INTERVAL_MINUTES;
    start = addMinutes(day, roundedMinutes);
  }

  return Array.from({ length: SLOT_COUNT }, (_, i) =>
    format(addMinutes(start, i * SLOT_INTERVAL_MINUTES), "h:mm a"),
  );
}

export function ScheduleStep({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  timezone,
  onTimezoneChange,
  onConfirm,
}: {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  onSelectTime: (time: string | undefined) => void;
  timezone: string;
  onTimezoneChange: (timezone: string) => void;
  onConfirm: () => void;
}) {
  const slots = selectedDate ? getTimeSlotsForDate(selectedDate) : [];

  return (
    <div className="py-6 px-4 md:py-8 md:px-5 xl:p-8">
      <div
        className={cn(
          "grid gap-6",
          selectedDate && "md:grid-cols-[minmax(0,1fr)_190px]",
        )}
      >
        <div className="min-w-0">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Select a Date &amp; Time
          </h2>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onSelectDate(date);
              onSelectTime(undefined);
            }}
            disabled={{ before: startOfDay(new Date()) }}
            className="w-full p-0 bg-[#FAFAFA]"
            classNames={{
              root: "w-full",
              month: "w-full",
              month_caption: "flex h-9 w-full items-center pr-16 text-[15px] font-semibold text-black",
              nav: "absolute right-0 top-0 flex items-center gap-1",
              button_previous: "size-7 rounded-full p-0 flex items-center justify-center text-black hover:bg-gray-100",
              button_next: "size-7 rounded-full p-0 flex items-center justify-center text-black hover:bg-gray-100",
              weekday: "flex-1 text-[14px] h-[32px] w-[32px] font-medium text-gray-400 select-none",
              week: cn("mt-2 flex w-full", selectedDate ? "gap-5" : "gap-7.5"),
            }}
          />

          <div className="mt-6 flex items-start gap-2.5 border-t border-gray-100 pt-6">
            <Globe className="mt-2 size-4 shrink-0 text-gray-500" />
            <div className="min-w-0 flex-1">
              <p className="mb-1.5 text-xs font-medium text-gray-500">
                Time zone
              </p>
              <TimezoneSelect value={timezone} onChange={onTimezoneChange} />
            </div>
          </div>
        </div>

        <Collapsible open={Boolean(selectedDate)} className="min-w-0">
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            {selectedDate && (
              <div className="min-w-0 md:border-l md:border-gray-100 md:pl-4">
                <p className="mb-3 text-sm font-semibold text-black">
                  {format(selectedDate, "EEEE, MMMM d")}
                </p>

                <div className="flex flex-col gap-2">
                  {slots.map((slot) => (
                    <div
                      key={slot}
                      className={cn(
                        "grid gap-2",
                        selectedTime === slot ? "grid-cols-[1fr_auto]" : "grid-cols-1",
                      )}
                    >
                      <Button
                        type="button"
                        onClick={() => onSelectTime(slot)}
                        className={cn(
                          "h-11 min-w-0 justify-center truncate rounded-xl border text-[14px] font-medium transition-colors",
                          selectedTime === slot
                            ? "border-transparent bg-black text-white hover:bg-gray-800"
                            : "border-gray-200 bg-transparent text-black hover:bg-gray-50",
                        )}
                      >
                        {slot}
                      </Button>
                      {selectedTime === slot && (
                        <Button
                          type="button"
                          onClick={onConfirm}
                          className="h-11 shrink-0 rounded-xl bg-black px-4 text-[13px] font-semibold text-white hover:bg-gray-800"
                        >
                          Confirm
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
