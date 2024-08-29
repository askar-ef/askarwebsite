"use client";

import React, { useState } from "react";
import { Image, Box } from "@chakra-ui/react";

const ClientImage: React.FC<{
  src: string;
  placeholder: string;
  alt: string;
}> = ({ src, placeholder, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box position="relative" width="100%" height="100%">
      {/* Placeholder */}
      <Image
        src={placeholder}
        alt={alt}
        style={{
          filter: "blur(10px)",
          transition: "filter 0.3s ease",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Main Image */}
      <Image
        src={src}
        alt={alt}
        style={{
          filter: loaded ? "blur(0)" : "blur(10px)",
          transition: "filter 0.3s ease",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={() => setLoaded(true)}
      />
    </Box>
  );
};

export default ClientImage;
