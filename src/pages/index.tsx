import { useState } from "react";
import Layout from "../components/Layout/Layout";
import CometM from "../components/CometM";
import MechaCloud from "../components/MechaCloud";

export default function Home(): JSX.Element {
  const [currentInstance, setCurrentInstance] = useState("comet-m");

  return (
    <div>
      <Layout>
        <div className="border-b py-2 border-[#202431] flex flex-col gap-5 md:flex-row justify-between md:items-center">
          <p className="text-lg font-medium">Documentation</p>
          <div className="flex flex-row gap-5 items-center">
            <button
              onClick={() => {
                setCurrentInstance("comet-m");
              }}
              className={`px-[11px] py-2 rounded-md  text-white font-medium ${currentInstance == "comet-m" ? "bg-[#22252C]/80" : ""}`}
            >
              Comet-M
            </button>
            <button
              onClick={() => {
                setCurrentInstance("mecha-cloud");
              }}
              className={`px-[11px] py-2 rounded-md  text-white font-medium ${currentInstance == "mecha-cloud" ? "bg-[#22252C]/80" : ""}`}
            >
              Mecha Cloud
            </button>
          </div>
        </div>
        {currentInstance === "comet-m" ? <CometM /> : <MechaCloud />}
      </Layout>
    </div>
  );
}
