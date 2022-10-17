import React from "react";
import { Fade } from "react-awesome-reveal";

export default function MainContent({ data, current }) {
  return <Fade direction="down">{data[current] && data[current].content}</Fade>;
}
