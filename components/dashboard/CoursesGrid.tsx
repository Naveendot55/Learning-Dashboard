"use client";

import { motion } from "framer-motion";
import type { Course } from "@/lib/types";
import { CourseCard } from "./CourseCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, transform: "translateY(16px)" },
  show: {
    opacity: 1, transform: "translateY(0px)",
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

export function CoursesGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
    >
      {courses.map((c) => (
        <motion.div key={c.id} variants={item}>
          <CourseCard course={c} />
        </motion.div>
      ))}
    </motion.div>
  );
}
