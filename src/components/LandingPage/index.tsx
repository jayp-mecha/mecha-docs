import { useState, useEffect } from "react";
import CometM from "../CometM";
import Layout from "../Layout/Layout";
import MechaCloud from "../MechaCloud";
import { useHistory, useLocation } from "@docusaurus/router";
import CustomButton from "../Shared/CustomButton";
import Footer from "../Layout/Footer";
import CustomLinkCard from "../Shared/CustomLinkCards";

export default function LandingPage({ slug }: { slug: string }): JSX.Element {
  const [currentInstance, setCurrentInstance] = useState(slug);
  
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("hardware")) {
      setCurrentInstance("comet-m");
    } else if (path.includes("mecha-cloud")) {
      setCurrentInstance("mecha-cloud");
    }
  }, [location.pathname]);

  const handleNavigation = (path, instance) => {
    history.push(path);
  };

  return (
    <div>
      <Layout>
        <div className="border-b py-2 border-[#fafbfc] dark:border-[#202431] flex flex-col gap-5 md:flex-row justify-between md:items-center">
          <p className="text-lg font-medium mb-0">Documentation</p>
          <div className="flex flex-row gap-5 items-center">
            <CustomButton
              onClick={() => handleNavigation("/hardware", "comet-m")}
              backgroundColor={
                currentInstance === "comet-m"
                  ? "rgba(34, 37, 44, 0.8)"
                  : "transparent"
              }
              fontColor="white"
            >
              Comet-M
            </CustomButton>
            <CustomButton
              onClick={() => handleNavigation("/mecha-cloud", "mecha-cloud")}
              backgroundColor={
                currentInstance === "mecha-cloud"
                  ? "rgba(34, 37, 44, 0.8)"
                  : "transparent"
              }
              fontColor="white"
            >
              Mecha Cloud
            </CustomButton>
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
