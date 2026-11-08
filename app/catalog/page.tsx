import CatalogClient from "./CatalogClient";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Catalog — LP.",
  description:
    "Browse all 26 business web application systems. Finance, Inventory, Sales, HR, Services, Education, and Advanced custom solutions.",
};

export default function CatalogPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
