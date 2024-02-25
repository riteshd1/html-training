import React, { useState } from "react";

import List from "./List";
import Create from "./Create";
import Component1 from "./ContextExample/Component1";

function Blogs() {
  const [blogData,setBlogData] = useState([]);
  return (
    <>
    <Create setBlogData={setBlogData} />
    <List  blogData={blogData} />
    <Component1 />
    </>
  );
}

export default Blogs;