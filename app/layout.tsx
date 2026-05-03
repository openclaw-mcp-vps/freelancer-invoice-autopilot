import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Autopilot — Auto-generate invoices from time tracking",
  description: "Connects to Toggl, Harvest, and Clockify to automatically generate invoices with proper tax calculations. Built for independent contractors and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee3d6c4b-9d4e-471e-b29b-7d671ea39a71"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
