import { Card } from "@/components/ui/Card";

const titleMap: Record<string, string> = {
  dashboard: "Dashboard",
  customers: "Customers",
  invoices: "Invoices and Payments",
  calls: "Calls and SMS",
  "follow-ups": "Follow ups",
  automation: "Automation",
  reports: "Reports",
  settings: "Settings"
};

const descriptionMap: Record<string, string> = {
  dashboard: "Track revenue momentum and urgent follow-up signals here soon.",
  customers: "Customer profiles and engagement history will appear here.",
  invoices: "Monitor invoice status, payments, and aging reports in this view.",
  calls: "Review call and SMS activity timelines in one place.",
  "follow-ups": "Launch and monitor follow-up workflows from this hub.",
  automation: "Design automation playbooks and triggers in this space.",
  reports: "Generate finance and operations reports here.",
  settings: "Manage team settings and workspace preferences here."
};

export default function Page() {
  const path = "settings";
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted">LedgerLink</p>
        <h2 className="text-2xl font-semibold">{titleMap[path]}</h2>
      </div>
      <Card className="border border-white/70 bg-white/80">
        <p className="text-sm text-muted">{descriptionMap[path]}</p>
      </Card>
    </div>
  );
}
