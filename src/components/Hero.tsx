import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

// Harmonious color palette
const COLORS_TOP = ["#3E92CC", "#22AED1"];

const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    width: Math.random() * 10 + 5,
    height: Math.random() * 10 + 5,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
  }));
};

const Hero = () => {
  const [particles, setParticles] = useState(generateParticles(10));
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    setParticles(generateParticles(10));
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-6 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight cursor-default">
            Hello world !, I'm Isuru Pradeep.
          </h1>
          <p className="max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed cursor-default">
            Face what you fear.
          </p>

          <Link href="/about" passHref>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-lg bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              About Me
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/isuruPradeep.png"
            alt="Isuru Pradeep"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
