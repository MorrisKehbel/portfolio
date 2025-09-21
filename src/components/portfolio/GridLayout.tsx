"use client";

import Image from "next/image";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";

import {
  Card,
  Headliner,
  Projects,
  About,
  Links,
  Contact,
  TechStack,
  Settings,
} from "@/components/portfolio";

export const GridLayout = () => {
  const [startScale, setStartScale] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [gridShift, setGridShift] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
      setStartScale(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 super:grid-cols-12 super:[repeat(12,minmax(0,1fr))] mx-auto p-4 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={showAll ? "visible" : "hidden"}
      >
        <motion.section
          aria-labelledby="settings"
          layout
          className="super:col-span-1 super:row-span-3 md:col-span-2 xl:order-2 xl:col-span-1"
          variants={cardVariants}
        >
          <Card>
            <Settings />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="headline"
          layout
          className={` ${
            gridShift ? "super:col-span-6" : "super:col-span-4"
          }  super:row-span-3 md:col-span-2 xl:order-1 xl:col-span-3`}
          variants={cardVariants}
        >
          <Card className="flex items-end">
            <Headliner setGridShift={setGridShift} />
          </Card>
        </motion.section>

        <motion.section
          layout
          className="super:col-span-2 super:row-span-2 md:col-span-1 md:order-4 xl:order-5 xl:col-span-1 super:order-5"
        >
          <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: startScale ? 1 : 1.25, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              height: "100%",
              width: "100%",
            }}
          >
            <Card className="relative aspect-square border-2 border-white/10 overflow-hidden flex justify-center items-end">
              <div className="absolute inset-3 rounded-2xl border-5 border-text/10 pointer-events-none"></div>

              <Image
                src="/me.png"
                alt="My Portrait"
                width={1500}
                height={2000}
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
                className="hidden 2xl:flex object-cover filter grayscale-20 scale-180 hover:scale-190 translate-y-[-30%] transition-all duration-1300 delay-300 select-none dark:brightness-85"
              />

              <Image
                src="/me.png"
                alt="My Portrait"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
                className="2xl:hidden object-cover filter grayscale-20 scale-110 hover:scale-115 translate-y-[-5%] transition-all duration-1300 delay-300 select-none dark:brightness-85"
              />
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          aria-labelledby="about-me"
          layout
          className={`${
            gridShift ? "super:col-span-5" : "super:col-span-3"
          } super:row-span-2 md:col-span-1 md:order-3 xl:order-4 xl:col-span-2 2xl:col-span-2`}
          variants={cardVariants}
        >
          <Card>
            <About />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="projects-portfolio"
          layout
          className={` ${
            gridShift ? "super:col-span-5" : "super:col-span-7"
          } super:row-span-5 md:order-5 md:col-span-2 xl:col-span-2 super:order-3`}
          variants={cardVariants}
        >
          <Card>
            <Projects />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="techstack"
          className="super:col-span-6 super:row-span-5 md:order-6 md:col-span-2 xl:col-span-2 super:order-8"
          variants={cardVariants}
        >
          <Card>
            <TechStack />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="social-links"
          className="super:col-span-1 super:row-span-5 md:order-7 md:col-span-2 xl:col-span-1 xl:order-3 super:order-6"
          variants={cardVariants}
        >
          <Card>
            <Links />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="contact-me"
          className="super:col-span-5 super:row-span-5 md:order-8 md:col-span-2 xl:col-span-4 super:order-7"
          variants={cardVariants}
        >
          <Card>
            <Contact />
          </Card>
        </motion.section>
      </motion.div>
    </>
  );
};
