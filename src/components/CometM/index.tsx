import React from "react";
import InformationTile from "../Shared/InformationTile";

const CometM = () => {
  const specArr = [
    {
      title: "Get Started",
      icon: "img/plane.svg",
    },
    {
      title: "Hardware",
      icon: "img/hardware.svg",
    },
    {
      title: "Specifications",
      icon: "img/specifications.svg",
    },
    {
      title: "Mechanix OS",
      icon: "img/mechanixos.svg",
    },
    {
      title: "Linux kernel",
      icon: "img/linuxkernel.svg",
    },
    {
      title: "Peripherals",
      icon: "img/peripherals.svg",
    },
    {
      title: "Bootloader",
      icon: "img/peripherals.svg",
    },
    {
      title: "Downloads",
      icon: "img/peripherals.svg",
    },
  ];
  const thingsArr = [
    {
      title: "Build apps",
      icon: "img/buildapps.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Artificial Intelligence",
      icon: "img/artificialintelligence.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Customize kernel",
      icon: "img/kernel.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Mechanix OS",
      icon: "img/mechanixos.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Home Automation",
      icon: "img/homeautomation.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "IoT connectivity",
      icon: "img/iotconnectivity.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Build extensions",
      icon: "img/buildextension.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
    {
      title: "Experiments",
      icon: "img/experiments.svg",
      description:
        "Effortlessly create and deploy powerful applications tailored to your needs.",
    },
  ];
  const guidesArr = [
    {
      title: "Connecting via serial de-bugging UART",
      icon: "img/plane.svg",
      description: "Beginner | 5min",
    },
    {
      title: "Fashing new image via USB",
      icon: "img/plane.svg",
      description: "Beginner | 5min",
    },
    {
      title: "Connecting via serial de-bugging UART",
      icon: "img/plane.svg",
      description: "Beginner | 5min",
    },
    {
      title: "Fashing new image via USB",
      icon: "img/plane.svg",
      description: "Beginner | 5min",
    },
  ];

  return (
    <div>
      <div className="mt-20 py-5 flex flex-col md:items-center gap-20 md:gap-5 md:grid grid-cols-2 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-[#B7BBC8]">MACHINE</h3>
          <h1 className="font-bold text-[52px] text-white">Comet-M</h1>
          <h3 className="text-[#B7BBC8]">
            Guides and references to get started with your programmable handheld
            computer
          </h3>
        </div>
        <div className="relative flex justify-center items-center">
          <img className="object-cover" src="img/comet-bg.svg" />
          <img className="z-10 absolute object-cover" src="img/comet.svg" />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        {specArr.map((spec, index) => (
          <InformationTile spec={spec} key={index} />
        ))}
      </div>
      <div className="mt-20">
        <h1 className="text-[36px] font-bold text-[#A4A7B4]">Things to do</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
          {thingsArr.map((spec, index) => (
            <InformationTile spec={spec} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-[#B7BBC8]">RESOURCES</h3>
        <h1 className="text-[36px] font-bold text-white mt-5">How-to-guides</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {guidesArr.map((spec, index) => (
            <div className="py-3 px-5 rounded-md border-2 border-[#202431] bg-[#15171D] flex flex-row items-center gap-2">
              <img className="w-[90px] h-[90px]" src={spec.icon} />
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-medium text-2xl">
                  {spec.title}
                </h1>
                <p className="text-[#B7BBC8]">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CometM;
