import { ImageResponse } from "next/og";

// ✅ Required for serverless runtime
export const runtime = "edge";

// ✅ Generate OG image dynamically
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          background: "black",
          color: "white",
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🚀 Hui Xu | Software Engineer
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}