import { ImageResponse } from "next/og";

export const alt = "Junk4Car Calgary | Calgary's Junk Car Buyers & Towing Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1330",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(245,158,11,0.16), rgba(10,19,48,0) 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 128,
            height: 128,
            borderRadius: 28,
            backgroundColor: "#f59e0b",
            marginBottom: 40,
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a1330"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#fbfaf7",
          }}
        >
          JUNK4CAR
          <span style={{ color: "#f59e0b", marginLeft: 18 }}>CALGARY</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 500,
            color: "#e2e8f0",
            marginTop: 24,
          }}
        >
          Cash for Junk Cars · Towing Included · Calgary, Alberta
        </div>
      </div>
    ),
    { ...size }
  );
}
