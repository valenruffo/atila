import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #c8a44e, #f0d68a, #c8a44e)",
          }}
        />
        {/* Brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            ATILA
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 300,
              letterSpacing: "0.3em",
              color: "#c8a44e",
              textTransform: "uppercase",
            }}
          >
            PÁDEL
          </div>
          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 2,
              backgroundColor: "#c8a44e",
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "#888888",
              letterSpacing: "0.05em",
            }}
          >
            Canchas de Pádel Profesionales
          </div>
        </div>
        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #c8a44e, #f0d68a, #c8a44e)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
