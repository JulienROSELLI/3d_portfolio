"use client";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { wrap } from "module";
import React from "react";
import { BallCanvas } from "./canvas";
import { StaticImageData } from "next/image";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(
        ({ name, icon }: { name: string; icon: StaticImageData }) => (
          <div className="w-28 h-28" key={name}>
            <BallCanvas icon={icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
