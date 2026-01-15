import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dalia Environnement Sarl",
    short_name: "Dalia",
    icons: [
      {
        src: "/logo_dalia.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
