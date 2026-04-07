import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot Product Tour — Win Government Contracts",
  description:
    "See how CapturePilot helps small businesses find, qualify, and win federal contracts. Smart matching, AI proposals, market intelligence, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
