import type { Metadata } from "next";
import GetDemoFlow from "@/components/features/get-demo/get-demo-flow";

export const metadata: Metadata = {
  title: "Book a Meeting | Tiksly",
  description:
    "Book a meeting with the Tiksly team and see how to scale your brand revenue on TikTok Shop.",
};

export default function BookAMeetingPage() {
  return (
    <>
      <GetDemoFlow />
    </>
  );
}
