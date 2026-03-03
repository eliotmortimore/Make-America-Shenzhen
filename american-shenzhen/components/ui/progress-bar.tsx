import { cn } from "@/lib/utils";

interface ProgressBarProps {
  score: number;
  max?: number;
  label?: string;
  color?: "blue" | "green" | "red" | "neutral";
}

export function ProgressBar({ score, max = 5, label, color = "blue" }: ProgressBarProps) {
  const segments = Array.from({ length: max }, (_, i) => i + 1);

  const colors = {
    blue: "bg-blue-600",
    green: "bg-emerald-500",
    red: "bg-rose-500",
    neutral: "bg-neutral-500",
  };

  return (
    <div className="flex items-center gap-4">
      {label && <span className="text-xs font-mono text-muted-foreground w-8">{label}</span>}
      <div className="flex gap-1">
        {segments.map((segment) => (
          <div
            key={segment}
            className={cn(
              "h-2 w-4 rounded-sm transition-all duration-300",
              score >= segment ? colors[color] : "bg-neutral-800"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-mono text-muted-foreground ml-auto">{score}/{max}</span>
    </div>
  );
}
