import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@theme-original/Layout";
import CustomButton from "../../components/Shared/CustomButton";

function CustomHeader() {
  const [currentInstance, setCurrentInstance] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/docs")) {
      setCurrentInstance("docs");
    } else if (path.includes("/hardware")) {
      setCurrentInstance("hardware");
    } else {
      setCurrentInstance("");
    }
  }, [location]);

  return (
    <div
      className="__docs-header bg-[#FAFBFC] dark:bg-[#05070A] z-10"
    >
      <div className="py-2 px-5 my-2 flex flex-col gap-5 md:flex-row justify-between md:items-center">
        <p className="text-lg font-medium m-0">Documentation</p>
      </div>
    </div>
  );
}

export default function CustomLayout(props) {
  return (
    <Layout {...props}>
      {/* <CustomHeader /> */}
      {props.children}
    </Layout>
  );
}
