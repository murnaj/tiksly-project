"use client";

import { Stream } from "@cloudflare/stream-react";

const CLOUDFLARE_CUSTOMER_CODE = "customer-wyu58i20r3viufsr";

export const streamThumb = (videoId: string) =>
  `https://${CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=1s&height=480`;

/**
 * Premium video component powered by the official Cloudflare Stream React SDK.
 */
export function HlsVideo({
  videoId,
  active,
  className,
}: {
  videoId: string;
  active: boolean;
  className?: string;
}) {
  return (
    <div className={className ?? "absolute inset-0 w-full h-full"}>
      {active ? (
        <Stream
          src={videoId}
          controls={false}
          autoplay
          muted
          loop
          className="w-full h-full object-cover border-0"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={streamThumb(videoId)}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
