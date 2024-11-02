import { cn } from "@/lib/utils";

export default function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden opacity-70 [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Teal Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-teal-100/40" />

      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:500vh] [inset:0%_0px] [margin-left:-100%] [transform-origin:100%_0_0] [width:800vw]",
            // Light Styles
            "[background-image:linear-gradient(to_right,#374151_1px,transparent_0),linear-gradient(to_bottom,#374151_1px,transparent_0)]",
            // Dark styles
            "dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_0),linear-gradient(to_bottom,#ffffff_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-50/30 via-transparent to-transparent dark:from-teal-900/20" />
    </div>
  );
}
