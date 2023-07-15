import "./styles/globals.scss";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "My Portfolio",
  description: "Created By Azmir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
