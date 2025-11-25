import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-blue-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
