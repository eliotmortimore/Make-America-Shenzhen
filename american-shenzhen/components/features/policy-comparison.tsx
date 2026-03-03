import { CheckCircle2, XCircle } from "lucide-react";

export function PolicyComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4 text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="font-semibold text-lg">What Helps</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-3 text-sm text-emerald-200/80">
            <span className="font-bold text-emerald-400 shrink-0">1.</span>
            <span>Speed. Compressing certification timelines to match test durations.</span>
          </li>
          <li className="flex gap-3 text-sm text-emerald-200/80">
            <span className="font-bold text-emerald-400 shrink-0">2.</span>
            <span>Permitting reform for factory construction.</span>
          </li>
          <li className="flex gap-3 text-sm text-emerald-200/80">
            <span className="font-bold text-emerald-400 shrink-0">3.</span>
            <span>Workforce training that expands the labor pool for tech-enabled manufacturing.</span>
          </li>
          <li className="flex gap-3 text-sm text-emerald-200/80">
            <span className="font-bold text-emerald-400 shrink-0">4.</span>
            <span>Targeted tariffs protecting existing domestic capacity.</span>
          </li>
        </ul>
      </div>

      <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4 text-red-400">
          <XCircle className="h-6 w-6" />
          <h3 className="font-semibold text-lg">What Hurts</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-3 text-sm text-red-200/80">
            <span className="font-bold text-red-400 shrink-0">1.</span>
            <span>Tariffs on imported machine tools (Japan, Germany, Taiwan). Raises capital costs.</span>
          </li>
          <li className="flex gap-3 text-sm text-red-200/80">
            <span className="font-bold text-red-400 shrink-0">2.</span>
            <span>Bureaucratic throughput taxes (6 months for 3 weeks of testing).</span>
          </li>
          <li className="flex gap-3 text-sm text-red-200/80">
            <span className="font-bold text-red-400 shrink-0">3.</span>
            <span>Subsidies for operation rather than construction/permitting.</span>
          </li>
          <li className="flex gap-3 text-sm text-red-200/80">
            <span className="font-bold text-red-400 shrink-0">4.</span>
            <span>Blanket tariffs that punish domestic buyers without domestic alternatives.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
