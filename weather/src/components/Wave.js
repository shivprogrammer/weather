import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = ({waveColor}) => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M1440 5 0.487081 8.32998 -10000.21721 49.0556 185.318C23.165 170.328 355.647 354.282 450.052 227.276C620.48 899.331 49.0556 1122.41 19.8184 27.4774C1352.73"
        stroke={waveColor}
        strokeOpacity="0.5"
        strokeWidth="10"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;

