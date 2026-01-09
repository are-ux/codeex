import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const activity = [
  { name: "Marisa Coleman", detail: "Inbound call • 8m", amount: "$1,260" },
  { name: "Davis Electrical", detail: "SMS follow-up", amount: "$420" },
  { name: "Mira Health", detail: "Invoice opened", amount: "$2,780" }
];

const customers = [
  { name: "Orchid Labs", amount: "$4,120", status: "Past due" },
  { name: "Stonebridge", amount: "$1,860", status: "Due in 5d" },
  { name: "Nova Freight", amount: "$980", status: "Due in 9d" }
];

export function HeroMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Card className="relative space-y-6 border border-white/80 bg-white/90 p-6 shadow-glow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Revenue</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">$84,240</p>
            <p className="mt-1 text-xs text-muted">+18% vs last month</p>
          </div>
          <Badge className="bg-accent-light text-accent">Live sync</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-primary-light/60 p-4">
            <p className="text-xs text-muted">Overdue invoices</p>
            <p className="mt-2 text-xl font-semibold">$12,930</p>
            <p className="mt-1 text-xs text-muted">14 accounts flagged</p>
          </div>
          <div className="rounded-2xl bg-secondary-light/70 p-4">
            <p className="text-xs text-muted">Call + SMS activity</p>
            <p className="mt-2 text-xl font-semibold">128 touches</p>
            <p className="mt-1 text-xs text-muted">Last 7 days</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Recent activity</p>
          {activity.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted">{item.detail}</p>
              </div>
              <span className="font-semibold text-primary">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Customers at risk</p>
          <div className="mt-3 space-y-2">
            {customers.map((customer) => (
              <div key={customer.name} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{customer.name}</span>
                <span className="font-semibold text-foreground">{customer.amount}</span>
                <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs text-primary">
                  {customer.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <div className="absolute -right-10 -top-8 h-20 w-20 rounded-full bg-secondary/20 blur-2xl" />
      <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
    </motion.div>
  );
}
