import React, { useState } from "react";
import Breadcrumb from "elements/Breadcrumb";

export default function Example() {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return <Breadcrumb data={breadcrumbList} />;
}
