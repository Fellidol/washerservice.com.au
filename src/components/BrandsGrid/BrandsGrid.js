"use client";

import Section from "@/components/Section";
import { brands } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const BrandsGrid = () => {
  return (
    <div
      className="relative"
      style={{
        background:
          "linear-gradient(90deg, rgba(67,87,103,1) 0%, rgba(37,51,66,1) 100%)",
      }}
    >
      <Section>
        <motion.div
          className="flex flex-wrap justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
          viewport={{ once: true }}
        >
          {brands.map((item) => (
            <Card key={item.name} img={item.image} alt={item.name} />
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

function Card(props) {
  return (
    <motion.div
      className={`relative w-[calc(50%-12px)] md:w-[calc(33%-24px)] lg:w-[calc(25%-24px)] p-4 rounded-xl overflow-hidden flex flex-col gap-3 bg-white ${props.className}`}
      variants={itemVariants}
    >
      <div className="relative w-full aspect-square grid items-center justify-center">
        <Image
          src={props.img}
          fill={true}
          alt="brand"
          style={{ objectFit: "contain" }}
        />
      </div>
    </motion.div>
  );
}

export default BrandsGrid;
