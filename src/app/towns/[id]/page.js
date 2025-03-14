"use client";

import { useParams } from "next/navigation";
import Page from "../page";
import { towns } from "@/data";

export default function ChildPage() {
  const { id } = useParams();
  const town = towns.find((item) => item.id === id) || false;
  if (!town) notFound(); // redirect to 404 page
  return <Page town={town} />;
}
