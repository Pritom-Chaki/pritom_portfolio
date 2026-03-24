import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const avatarData = await readFile(join(process.cwd(), "public", "avatar.jpg"));
  const avatarBase64 = `data:image/jpeg;base64,${avatarData.toString("base64")}`;

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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #22d3ee",
            borderRadius: "24px",
            padding: "48px 64px",
            background: "rgba(15, 23, 42, 0.8)",
          }}
        >
          <img
            src={avatarBase64}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              border: "4px solid #22d3ee",
              marginBottom: "24px",
            }}
          />
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#f1f5f9",
              marginBottom: "8px",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#22d3ee",
              marginBottom: "16px",
            }}
          >
            Flutter Developer & App Developer
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Building elegant, performant mobile and web applications
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#22d3ee",
              marginTop: "24px",
              opacity: 0.8,
            }}
          >
            pritom.me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
