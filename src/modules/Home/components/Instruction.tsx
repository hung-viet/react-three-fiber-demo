import React, { useEffect, useRef } from "react";
import { useLoader, useFrame, PrimitiveProps } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Instruction = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <svg
          width="40"
          height="44"
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{}}
        >
          <path
            d="M3 2V6.04C7.64 2.26 13.56 0 20 0C26.44 0 32.36 2.26 37 6.04V2H40V12H30V9H35.82C31.6 5.28 26.06 3 20 3C13.94 3 8.42 5.28 4.18 9H10V12H0V2H3Z"
            fill="white"
          />
          <path
            d="M6.22 25.54L13.82 22.2C14.08 22.08 14.38 22 14.7 22H16V13.26C16 10.62 17.92 8.26 20.54 8.02C21.232 7.9585 21.9293 8.04143 22.5876 8.26355C23.2459 8.48566 23.8509 8.84211 24.3642 9.3103C24.8775 9.77849 25.288 10.3482 25.5696 10.9834C25.8512 11.6185 25.9977 12.3052 26 13V29.3L29.74 28.5C30.12 28.44 31.78 28.2 33.2 29.62L36 32.44L25.76 42.82C25.02 43.58 24 44 22.94 44H9.84C7.88 44 6.22 42.6 5.9 40.66L4.06 29.78C3.91857 28.9351 4.0521 28.0672 4.44094 27.3039C4.82979 26.5406 5.45341 25.9223 6.22 25.54V25.54ZM8 29.12L9.84 40H22.94L30.34 32.44L22 34.22V13C22 12.44 21.56 12 21 12C20.44 12 20 12.44 20 13V25.36H16.48L8 29.12Z"
            fill="white"
          />
        </svg>
        <h1 style={{ marginTop: 0, color: "#ffffff" }}>
          Move your mouse left and right to rotate the model
        </h1>
      </div>
    </div>
  );
};

export default Instruction;
