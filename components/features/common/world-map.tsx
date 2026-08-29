export const WorldMapSvg = () => {
  // A solid world map path to use as a mask
  const mapPath = "M140,110 l20,30 l-10,20 l-40,-10 l-10,-30 z M160,140 l30,40 l-10,30 l-30,10 l-20,-40 z M200,200 l40,50 l-10,60 l-30,20 l-20,-80 z M400,100 l50,20 l20,40 l-40,60 l-50,-20 z M480,180 l60,80 l-20,60 l-40,10 l-30,-70 z M600,150 l80,40 l20,80 l-60,30 l-50,-90 z M700,280 l40,20 l10,40 l-30,20 l-40,-40 z";
  
  const svgMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath fill='black' d='${mapPath}'/%3E%3C/svg%3E")`;

  return (
    <div 
      className="w-full h-full"
      style={{
        // Create the dotted pattern
        backgroundImage: "radial-gradient(circle at center, #94A3B8 2px, transparent 0)",
        backgroundSize: "8px 8px",
        // Mask the dots to only show up inside the world map path!
        maskImage: svgMask,
        WebkitMaskImage: svgMask,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
};
