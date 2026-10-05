import type { ITechnology } from "../../Type/types";
import { FaStar, FaCheck } from "react-icons/fa"; // 1. Import FaCheck

const TechnologyCard = ({
  tech,
  onAdd,
  isAdded,
}: {
  tech: ITechnology;
  onAdd: (tech: ITechnology) => void;
  isAdded: boolean;
}) => {
  return (
    <div
      key={tech.id}
      className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm  flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.img}
            alt={tech.name}
            className="w-8 h-8 object-contain"
          />
          {tech.badge ? (
            <span className="text-xs font-medium px-3 py-1 bg-sky-50 text-sky-500 rounded-full">
              {tech.badge}
            </span>
          ) : (
            <div />
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
          {tech.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-5 text-xs text-slate-600">
          <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium whitespace-nowrap">
            {tech.category}
          </span>
          <span className="bg-slate-100 px-2 py-1 rounded-md font-medium whitespace-nowrap text-[11px]">
            {tech.difficulty}
          </span>
          <div className="ml-auto flex items-center gap-1 font-semibold text-slate-700 shrink-0">
            <span className="text-amber-400">
              <FaStar />
            </span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full font-medium py-3 rounded-xl transition-colors ${
            isAdded
              ? "bg-slate-300 text-slate-500 cursor-not-allowed"
              : "bg-[#0F172A] hover:bg-slate-800 text-white"
          }`}
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-2">
              <FaCheck />
              Added to Stack
            </span>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
