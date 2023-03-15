import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-y-8 min-w-[22rem]">
      <motion.h1
        variants={fadeInUp}
        className="text-9xl font-bold text-white uppercase"
      >
        {title}
      </motion.h1>
      <motion.div variants={fadeInUp} className="mt-24 text-4xl max-w-[64rem]">
        {description}
      </motion.div>
    </div>
  );
}
