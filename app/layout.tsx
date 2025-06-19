import type { Metadata } from "next";
import Layout from "@/components/layout/layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface Props {
  children?: React.ReactNode
}

export const metadata: Metadata = {
  title: "대학수학능력시험 성적증명서 발급시스템",
  description: "Kice",
};

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <Layout>
        {children}
      </Layout>
    </html>
  );
}
