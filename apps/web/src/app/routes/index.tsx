import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Create, Manage & Share Beautiful Invoices | Invoic",
      description:
        "Free for business and high scalable invoices, bills, transactions documents tools for pdf, and API",
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
