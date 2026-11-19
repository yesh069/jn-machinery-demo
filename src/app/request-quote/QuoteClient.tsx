"use client";
import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import { modelBySlug } from "@/lib/data";

export default function QuoteClient() {
  const m = modelBySlug(useSearchParams().get("model") ?? "");
  return <QuoteForm id="quote-page" interest={m ? `${m.name} electric conveyor oven` : undefined} />;
}
