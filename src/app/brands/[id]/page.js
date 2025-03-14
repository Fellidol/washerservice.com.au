"use client";

import { notFound, useParams } from "next/navigation";
import Page from "../page";
import { brands } from "@/data";

export default function ChildPage() {
  const { id } = useParams();
  const brand = brands.find((item) => item.id === id) || false;
  if (!brand) notFound(); // redirect to 404 page
  return <Page brand={brand} />;
}
