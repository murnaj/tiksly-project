"use client";

import { ArrowLeft, Clock, MessageSquare } from "lucide-react";

export function EventInfoPanel({
  showBack,
  onBack,
}: {
  showBack: boolean;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 ">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-black transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="size-4" />
          </button>
        )}
        <span className="text-lg lg:text-2xl font-extrabold tracking-tighter text-black">
          tiksly
        </span>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
        <h1 className="text-lg leading-snug font-semibold text-black lg:text-2xl">
          30 Minute Demo Call with the Tiksly Team
        </h1>

        <div className="flex items-center gap-2.5 text-[14px] text-gray-500">
          <Clock className="size-4 shrink-0" />
          <span>30 min</span>
        </div>

        <div className="flex items-start gap-2.5 text-[14px] text-gray-500">
          <MessageSquare className="mt-0.5 size-4 shrink-0" />
          <span>Web conferencing details provided upon confirmation.</span>
        </div>

        <p className="text-[14px] leading-relaxed text-gray-500">
          Hey, I&apos;m Tom! If you&apos;re curious about Tiksly, let&apos;s hop
          on a brief demo call. I&apos;ll show you how to turn any product link
          into instant video briefs and find creators for your category.
        </p>

        <p className="text-[14px] text-gray-500">
          All other inquiries can be sent to{" "}
          <a
            href="mailto:hello@tiksly.app"
            className="font-medium text-black underline underline-offset-2"
          >
            hello@tiksly.app
          </a>
        </p>
      </div>
    </div>
  );
}
