"use client";

import { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FALLBACK_ZONES = [
  "Pacific/Honolulu",
  "America/Anchorage",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "UTC",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Moscow",
  "Africa/Cairo",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Dhaka",
  "Asia/Bangkok",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
];

type TimezoneOption = {
  value: string;
  label: string;
  minutesOffset: number;
};

function buildTimezoneOptions(): TimezoneOption[] {
  let zones: string[];
  try {
    zones =
      typeof Intl.supportedValuesOf === "function"
        ? Intl.supportedValuesOf("timeZone")
        : FALLBACK_ZONES;
  } catch {
    zones = FALLBACK_ZONES;
  }

  const now = new Date();

  return zones
    .map((zone) => {
      let offsetLabel = "GMT+00:00";
      let minutesOffset = 0;
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: zone,
          timeZoneName: "shortOffset",
        }).formatToParts(now);
        const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+0";
        const match = raw.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
        if (match) {
          const sign = match[1] === "-" ? -1 : 1;
          const hours = Number(match[2]);
          const minutes = match[3] ? Number(match[3]) : 0;
          minutesOffset = sign * (hours * 60 + minutes);
          offsetLabel = `GMT${match[1]}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
        }
      } catch {
        // zone unresolvable in this runtime - keep the default offset
      }

      return {
        value: zone,
        minutesOffset,
        label: `(${offsetLabel}) ${zone.replace(/_/g, " ")}`,
      };
    })
    .sort((a, b) => a.minutesOffset - b.minutesOffset || a.value.localeCompare(b.value));
}

export function TimezoneSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const options = useMemo(() => buildTimezoneOptions(), []);

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 w-full rounded-lg text-[13px]">
        <SelectValue placeholder="Select time zone" />
      </SelectTrigger>
      <SelectContent className="max-h-72">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="text-[13px]">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
