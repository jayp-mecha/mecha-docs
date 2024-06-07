import { useState } from "react";
import CometM from "../CometM";
import Footer from "../Footer";
import Layout from "../Layout/Layout";
import MechaCloud from "../MechaCloud";
import { useHistory } from "@docusaurus/router";


export default function LandingPage({slug} : {slug: string}): JSX.Element {
  const [currentInstance, setCurrentInstance] = useState(slug);

  const history = useHistory();

  const handleNavigation = (path, instance) => {
    history.push(path);
    setCurrentInstance(instance);
  };
  
  return (
    <div>
      <Layout>
        <div className="border-b py-2 border-[#202431] flex flex-col gap-5 md:flex-row justify-between md:items-center">
          <p className="text-lg font-medium">Documentation</p>
          <div className="flex flex-row gap-5 items-center">
            <button
              onClick={() => handleNavigation("/hardware", "comet-m")}
              className={`px-[11px] py-2 rounded-md text-white font-medium ${
                currentInstance === "comet-m" ? "bg-[#22252C]/80" : ""
              }`}
            >
              Comet-M
            </button>
            <button
              onClick={() => handleNavigation("/mecha-cloud", "mecha-cloud")}
              className={`px-[11px] py-2 rounded-md text-white font-medium ${
                currentInstance === "mecha-cloud" ? "bg-[#22252C]/80" : ""
              }`}
            >
              Mecha Cloud
            </button>
          </div>
        </div>
        {currentInstance === "comet-m" ? <CometM /> : <MechaCloud />}
        <div className="mt-20 py-14 px-5 rounded-md border-2 border-[#202431] bg-[#15171D] flex flex-row items-center gap-2">
          <h1 className="text-[36px] font-bold text-white">
            Looking for docs on{" "}
            {currentInstance === "comet-m" ? "Mecha Cloud" : "Comet-M"}?
          </h1>
        </div>
        <div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
