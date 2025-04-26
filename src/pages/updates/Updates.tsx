import { Calendar, GitCompare } from "lucide-react";
import { SmallHeader } from "../../components";
import { upcomingUpdates } from "../../helper/data/UpdatesData";
import { useState } from "react";

export const Updates = () => {
  const [updates] = useState(upcomingUpdates);

  // Sort at render time
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <SmallHeader primaryTitle="Updates" isSecondaryTitle={false} />

      <div className="flex flex-col gap-4">
        {sortedUpdates.map((update) => (
          <div
            key={update.id}
            className="group bg-[#1e1f1e] border border-white/10 rounded-xl transition-shadow hover:shadow-xl hover:border-white/20"
          >
            {/* Header */}
            <div className="p-5 border-b border-zinc-700/60">
              <h2 className="text-white text-lg md:text-xl font-semibold flex items-center gap-2">
                🚀 {update.title}
              </h2>
            </div>

            {/* Features List */}
            <div className="p-5 flex flex-col gap-4">
              {update.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-1 border-b border-zinc-700/30 last:border-none pb-4"
                >
                  <h3 className="text-base font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-zinc-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {update.types.map((type, index) => (
                  <span
                    className={`${
                      type === "New" && "bg-green-700/40 text-green-300"
                    } ${type === "Bug" && "bg-zinc-700/40 text-zinc-300"} ${
                      type === "Optimized" && "bg-orange-700/40 text-orange-300"
                    } px-3 py-1 text-xs rounded-full`}
                    key={index}
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{update.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitCompare size={14} />
                  <span>{update.version}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
