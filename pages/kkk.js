import React from "react";

import Layout from "@/components/Layout";
import OurService from "@/components/OurService";
import About from "@/components/About";
function kkk() {
  return (
    <div>
      <About />
    </div>
  );
}

export default kkk;
kkk.getLayout = function PageLayout(page) {
  return (
    <div className="">
      <Layout>{page}</Layout>
    </div>
  );
};
