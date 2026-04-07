import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Contracting for Growth Companies — Americurial",
  description:
    "How we help contractors unlock government revenue without building an internal capture team. Veteran-owned federal capture consulting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
