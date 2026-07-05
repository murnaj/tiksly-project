"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { EventInfoPanel } from "./event-info-panel";
import { ScheduleStep } from "./schedule-step";
import { DetailsForm, type DemoDetails } from "./details-form";
import { ConfirmedPanel } from "./confirmed-panel";

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = "schedule" | "details" | "confirmed";

export default function GetDemoFlow() {
  const [step, setStep] = useState<Step>("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [timezone, setTimezone] = useState<string>(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [details, setDetails] = useState<DemoDetails | null>(null);

  const canGoBack = step === "details" || (step === "schedule" && !!selectedDate);

  const handleBack = () => {
    if (step === "details") {
      setStep("schedule");
      return;
    }
    setSelectedDate(undefined);
    setSelectedTime(undefined);
  };

  const handleSubmitDetails = (values: DemoDetails) => {
    setDetails(values);
    setStep("confirmed");
  };

  return (
    <section className="overflow-hidden bg-white pb-14 md:pb-20">
      <div className="container mx-auto px-3 lg:px-4">
        <Card
          className={cn(
            "mx-auto overflow-hidden bg-[#FAFAFA] rounded-[2rem] border-gray-300 p-0 transition-[max-width] duration-500 ease-out md:rounded-2xl",
            step === "schedule" && selectedDate ? "max-w-5xl" : "max-w-3xl",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
            <EventInfoPanel showBack={canGoBack} onBack={handleBack} />

            <div className="relative min-h-105 border-t border-gray-300 md:border-t-0 md:border-l">
              <AnimatePresence mode="wait">
                {step === "schedule" && (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <ScheduleStep
                      selectedDate={selectedDate}
                      onSelectDate={setSelectedDate}
                      selectedTime={selectedTime}
                      onSelectTime={setSelectedTime}
                      timezone={timezone}
                      onTimezoneChange={setTimezone}
                      onConfirm={() => setStep("details")}
                    />
                  </motion.div>
                )}

                {step === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <DetailsForm onSubmit={handleSubmitDetails} />
                  </motion.div>
                )}

                {step === "confirmed" && (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="h-full"
                  >
                    <ConfirmedPanel
                      name={details?.name ?? "there"}
                      date={selectedDate}
                      time={selectedTime}
                      timezone={timezone}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </div>  
    </section>
  );
}
