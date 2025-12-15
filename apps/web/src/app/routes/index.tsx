import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Business Transactions Made Easy | Okay",
      description:
        "Free & unlimited invoices, bills, purchase order and receipts transactions tools for business",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
