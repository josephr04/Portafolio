import { routes } from "../routes"
import { useState } from "react";
import { motion } from "framer-motion";

export function NavDesktop() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  return (
    <div className="flex">
      <ul className="flex gap-6">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <motion.li key={title} className="flex flex-col" onHoverStart={() => setHoveredItem(title)} onHoverEnd={() => setHoveredItem(null)}>
              <a href={href} className="flex items-center gap-1 hover:text-neutral-300 transition-all font-semibold">
                {title}
              </a>
              <div className={`border-t-3 border-blue-400 rounded-xl transition-all duration-400 ease-in-out ${hoveredItem === title ? "w-full" : "w-0"}`}></div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  )
}