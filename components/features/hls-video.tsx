"use client";

import { useRef, useEffect, useState } from "react";
import type Hls from "hls.js";

const CLOUDFLARE_CUSTOMER_CODE = "customer-wyu58i20r3viufsr";

const hlsUrl = (videoId: string) =>
  `https://${CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${videoId}/manifest/video.m3u8`;

export const streamThumb = (videoId: string) =>
  `https://${CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=1s&height=480`;

/**
 * Lightweight muted-loop video backed by Cloudflare Stream HLS.
 *
 * Why not the Cloudflare <iframe> player? Each iframe boots a full player app
 * (megabytes of JS) — a wall of them freezes the tab. A native <video> fed the
 * raw HLS manifest via hls.js is an order of magnitude cheaper, so many can
 * play at once inside a smooth scrolling marquee.
 *
 * `active` controls playback: when false the stream is fully detached (hls
 * destroyed, buffers freed) so off-screen sections cost nothing. A poster JPG
 * is always shown underneath, so there is never a black flash.
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    let cancelled = false;

    const teardown = () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      video.removeAttribute("src");
      video.load();
      setReady(false);
    };

    if (!active) {
      video.pause();
      teardown();
      return;
    }

    const src = hlsUrl(videoId);

    // Safari / iOS play HLS natively — no library needed.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      const onLoaded = () => {
        if (cancelled) return;
        setReady(true);
        video.play().catch(() => {});
      };
      video.addEventListener("loadeddata", onLoaded, { once: true });
      return () => {
        cancelled = true;
        video.removeEventListener("loadeddata", onLoaded);
        teardown();
      };
    }

    // Everyone else: hls.js, loaded on demand so it never blocks first paint.
    import("hls.js").then(({ default: HlsLib }) => {
      if (cancelled || !HlsLib.isSupported()) return;
      const hls = new HlsLib({
        maxBufferLength: 6, // keep buffers tiny — these are short looping clips
        capLevelToPlayerSize: true, // never fetch a resolution bigger than the tile
        startLevel: -1,
      });
      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(HlsLib.Events.MANIFEST_PARSED, () => {
        if (cancelled) return;
        setReady(true);
        video.play().catch(() => {});
      });
    });

    return () => {
      cancelled = true;
      teardown();
    };
  }, [active, videoId]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={streamThumb(videoId)}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster={streamThumb(videoId)}
        className={className ?? "absolute inset-0 w-full h-full object-cover"}
      />
    </>
  );
}
