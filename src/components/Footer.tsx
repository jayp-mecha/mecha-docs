import React, { Fragment, useEffect, useState } from "react";
import Icon from "./icons/Icons";
import { cn } from "../utils/tailwindHelper";





const socialas = [
  {
    name: "linkedIn",
    link: "https://www.mechasystems.com/",
    icon: "linkedin",
  },
  {
    name: "x",
    link: "https://x.com/mecha_systems",
    icon: "x",
  },
  {
    name: "discord",
    link: "#",
    icon: "discord",
  },
  {
    name: "reddit",
    link: "#",
    icon: "reddit",
  },
  {
    name: "github",
    link: "https://github.com/mecha-systems",
    icon: "github",
  },
];
type sublinks = {
  name: string;
  href: string;
};
type footeras = {
  head: {
    name: string;
    href: string;
  };
  links: sublinks[];
};
const footer: footeras[] = [
  {
    head: {
      name: "PLATFORM",
      href: "/platform",
    },
    links: [
      {
        name: "Comet-M",
        href: "/hardware/comet-m",
      },
      {
        name: "About Mecha",
        href: "/about",
      },
      {
        name: "Pilot",
        href: "/pilot",
      },
    ],
  },
  {
    head: {
      name: "TERMS & POLICIES",
      href: "/platform",
    },
    links: [
      {
        name: "Observability",
        href: "#",
      },
      {
        name: "Mesh Networking",
        href: "/platform/networking",
      },
      {
        name: "Workflows",
        href: "#",
      },
      {
        name: "Device SDK",
        href: "/platfrom/device-sdk",
      },
      {
        name: "BYOD",
        href: "#",
      },
    ],
  },
  {
    head: {
      name: "ABOUT",
      href: "/about",
    },
    links: [
      {
        name: "Documentation",
        href: "#",
      },
      {
        name: "Community",
        href: "#",
      },
      {
        name: "Blogs",
        href: "/blog",
      },
      {
        name: "Newsroom",
        href: "/newsroom",
      },
      {
        name: "Security",
        href: "/security",
      },
    ],
  },
  {
    head: {
      name: "RESOURCES",
      href: "#",
    },
    links: [
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "Privacy Policy",
        href: "/legal/privacy",
      },
      {
        name: "Terms Of Use",
        href: "/legal/terms-of-use",
      },
      {
        name: "Code of Conduct",
        href: "/legal/code-of-conduct",
      },
      {
        name: "Cookie Notice",
        href: "/legal/cookie-notice",
      },
      {
        name: "Cookie Settings",
        href: "#",
      },
    ],
  },
];
const footerMobile = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Security",
    href: "/security",
  },
  {
    name: "Newsroom",
    href: "/news-room",
  },
  {
    name: "Privacy",
    href: "/legal/privacy",
  },
  {
    name: "Terms",
    href: "/legal/terms-of-use",
  },
];

const Footer = () => {


  return (
    <div className="mt-[75px] lg:mt-[150px] lg:grid lg:grid-cols-6 md:mb-[40px]">
      <div className="md:flex flex-col gap-3 hidden cursor-pointer">
        {/* <LogoLottie /> */}
        <Icon name="mecha_logo" height="80px" width="80px" />
        {/* <MechaIcon className="dark:text-white h-[64px] w-[64px] md:h-[79px] md:w-[79px]" /> */}
      </div>
      {/* Desktop footer */}
      <div className="hidden w-full md:grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 ">
        {footer.map((value, index) => {
          return (
            <div
              className="flex flex-col gap-2 mt-8 lg:mt-0"
              key={`d-${index}`}
            >
              {value.links.map((link, innerIndex) => {
                if (link.name === "Pilot") {
                  return (
                    <a
                      key={`pilot-${innerIndex}`}
                      href="/pilot"
                      className="group w-full flex flex-row  lg:justify-center lg:w-max   lg:rounded-2xl  flex lg:items-center gap-1 dark:text-custom-50 text-sm md:text-base  text-custom-410"
                    >
                      <span>Pilot Program </span>
                      <i className="group-hover:-translate-y-1 group-hover:translate-x-1 transform transition duration-200">
                        🚀
                      </i>
                    </a>
                  );                
                } else {
                  return (
                    <a
                      href={link.href}
                      key={`${innerIndex}`}
                      className="dark:text-custom-50 text-sm md:text-base  text-custom-410"
                    >
                      {link.name}
                    </a>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      {/* Mobile footer */}
      <div className="md:hidden grid w-full grid-cols-3 gap-4">
        {footerMobile.map((link, index) => {
          return (
            <a
              href={link.href}
              key={`mobile-${index}`}
              className="dark:text-custom-50 text-sm md:text-base  text-custom-410"
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <div className="col-span-2 lg:col-span-1 mt-10 md:mt-[60px] lg:mt-0 mb-[100px]">
        <div className="gap-6 flex flex-col">
          <div className="flex flex-row gap-[11px] ">
            {socialas.map((link, index) => {
              return (
                <a
                  target="_blank"
                  key={`m-socialas-${index}`}
                  href={link.link}
                  className={cn(
                    "transform hover:scale-105 transition duration-200 p-[1px] min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center rounded-lg border border-custom-50",
                    {
                      "hover:bg-[#0077b5] hover:text-white":
                        link.name === "linkedIn",
                    },
                    {
                      "hover:bg-[#FF4500] hover:text-white":
                        link.name === "reddit",
                    },
                    {
                      "hover:bg-grape-800 hover:text-white":
                        link.name === "discord",
                    },
                    {
                      "hover:bg-mecha-gray-100 hover:text-white":
                        link.name === "github",
                    },
                    {
                      "hover:bg-[#1C2321] hover:text-white": link.name === "x",
                    },
                  )}
                  rel="noreferrer"
                >
                  <Icon name={link.icon} height="15px" width="15px"/>
                </a>
              );
            })}
            {/* Theme changing button */}
            
          </div>
          <div>
            <p className="text-sm md:text-base dark:text-custom-50 custom-410">
              &copy; 2023 Mecha Systems, Inc.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
