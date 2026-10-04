import type { ITechnology } from "../../Type/types";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome Star
import TechnologyCard from "./TechnologyCard";

interface IAvailableTechnologyProps {
  technology: ITechnology[];
  onAdd: (tech: ITechnology) => void;
  stack: ITechnology[];
}

const AvailableTechnology = ({
  technology,
  stack,
  onAdd,
}: IAvailableTechnologyProps) => {
  // console.log(technology, "technology from AvailableTechnology");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {technology.map((tech: ITechnology) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechnology;

// import React from "react";
// import type { ITechnology } from "../../Type/types";

// // interface IAvailableTechnologyProps {
// //     technology:
// // IAvailableTechnologyProps
// // }

// const AvailableTechnology = ({ technology }) => {
//   console.log(technology, "technology from AvailableTechnology");
//   return (
//     <div className="max-w-7xl w-full mx-auto h-[60px] py-4 px-4">
//       {technology.map((tech: ITechnology) => {
//         return (
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Card Title</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default AvailableTechnology;
