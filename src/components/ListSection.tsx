"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ListSection({
  title,
  data,
  primaryKey,

}: {
  title: string;
  data: { [key: string]: string }[]; // 接受通用数据结构
  primaryKey: string; // 指定主字段的 key
}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section className="w-full p-4">
      <div className="mb-6">
        <h2 className={`common-title text-center mb-4 ${inView ? "float-up":"hidden"}`}>{title}</h2>

        <p className={`common-text text-center ${inView ? "float-up-text":"hidden"}`}>
          {data[0].organization
            ? "A journey of growth, creativity, and innovation. Here’s a glimpse into my professional milestones, showcasing the skills, projects, and accomplishments that define my career."
            : "A path of learning, discovery, and accomplishment. Here’s a glimpse into my academic milestones, highlighting the degrees, institutions, and experiences that have shaped my expertise."}
        </p>
      </div>
      <div ref={ref} className="flex flex-col gap-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={
              inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.8 + index * 0.3, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row w-full justify-between gap-4 p-4 border border-gray-200 shadow-sm rounded-sm"
          >
            {/* 左侧文本部分 */}
            <div className="flex flex-1 flex-col">
              <div className="flex-1 text-center sm:text-left experience-title">
                {item[primaryKey]} {/* 这里是动态主字段 */}
              </div>
              <div className="flex-1 text-center sm:text-left experience-text">
                {item.organization || item.university} {/* 适配不同数据 */}
              </div>
            </div>

            {/* 右侧时间部分 */}
            <div className="flex-1 flex flex-col justify-between text-center sm:text-right">
              {item.location && <p>{item.location}</p>}
              <p className="responsive-text">{item.time || item.graduate_date}</p> {/* 适配时间字段 */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
