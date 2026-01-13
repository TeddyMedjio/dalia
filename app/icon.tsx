import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Fleur stylisée de Dalia avec les couleurs du logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Pétales de la fleur */}
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pétale central jaune */}
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="25"
              fill="#F2C717"
              opacity="1"
            />

            {/* Pétales verts autour */}
            <ellipse
              cx="100"
              cy="60"
              rx="20"
              ry="35"
              fill="#69AB4B"
              opacity="0.9"
            />
            <ellipse
              cx="140"
              cy="100"
              rx="35"
              ry="20"
              fill="#3A923A"
              opacity="0.9"
            />
            <ellipse
              cx="100"
              cy="140"
              rx="20"
              ry="35"
              fill="#69AB4B"
              opacity="0.9"
            />
            <ellipse
              cx="60"
              cy="100"
              rx="35"
              ry="20"
              fill="#3A923A"
              opacity="0.9"
            />

            {/* Pétales diagonaux */}
            <ellipse
              cx="75"
              cy="75"
              rx="25"
              ry="18"
              fill="#69AB4B"
              opacity="0.85"
              transform="rotate(-45 75 75)"
            />
            <ellipse
              cx="125"
              cy="75"
              rx="25"
              ry="18"
              fill="#69AB4B"
              opacity="0.85"
              transform="rotate(45 125 75)"
            />
            <ellipse
              cx="125"
              cy="125"
              rx="25"
              ry="18"
              fill="#69AB4B"
              opacity="0.85"
              transform="rotate(-45 125 125)"
            />
            <ellipse
              cx="75"
              cy="125"
              rx="25"
              ry="18"
              fill="#69AB4B"
              opacity="0.85"
              transform="rotate(45 75 125)"
            />

            {/* Centre de la fleur */}
            <circle cx="100" cy="100" r="15" fill="#F2C717" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
