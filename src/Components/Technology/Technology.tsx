import  { use, useState } from "react";
import type { ITechnology } from "../../Type/types";
import AvailableTechnology from "./AvailableTechnology";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface TechnologyProps {
  technologyPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);

  const [stack, setStack] = useState<ITechnology[]>([]);
  console.log(stack);

  const addToStack = (item: ITechnology) => {
    const alreadyExists = stack.some((tech) => tech.id === item.id);

    if (alreadyExists) {
      return;
    }

    setStack((previous) => [...previous, item]);

    toast.success(`${item.name} added to your stack!`);
  };

  /////// Remove from the Stack

  const removeFromStack = (id:number) => {
    setStack((previous) => previous.filter((tech) => tech.id !== id));
  };

  /////// Remove from the Stack

  // Remove ALL function

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="max-w-7xl w-full mx-auto px-4 my-16">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-['Inter'] font-extrabold mb-3">
          Explore the <span className="text-[#ec4899]">Technologies</span>
        </h2>
        <p className="text-[17px] font-normal text-[#64748b]">
          ~ Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Content Layout: Cards Grid on Left, Sticky Box on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Tech Cards Container (Takes 3 Columns) */}
        <div className="lg:col-span-3">
          <AvailableTechnology
            technology={technology}
            onAdd={addToStack}
            stack={stack}
          />
        </div>

        {/* Sticky Sidebar (Takes 1 Column) */}
        <aside className=" sticky top-24 self-start z-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Your Stack</h3>
          <p className="text-sm text-slate-500 mb-6">
            {/* No technologies selected yet. */}

            {/* Actual code... */}

            {stack.length === 0
              ? "No technologies selected yet"
              : `${stack.length} technolog${stack.length === 1 ? "y" : "ies"} selected.`}
          </p>

          {stack.length === 0 ? (
            <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          ) : (
            <div>
              <div className="space-y-3">
                {stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between p-3 bg-slate-50  border border-slate-200/80 rounded-xl "
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center shrink-0">
                        <img
                          className="w-full h-full object-contain"
                          src={tech.img}
                          alt={tech.name}
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">
                        {tech.name}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromStack(tech.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <MdDelete className="text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              {stack.length > 1 && (
                <button
                  onClick={removeAll}
                  className="w-full mt-6 py-2 rounded-lg border border-red-200 text-red-500"
                >
                  Remove All
                </button>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Technology;
