"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { customers } from "@/lib/mock/customers";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "Financial", "Communication", "Activity"] as const;

export default function CustomerDetailPage() {
  const params = useParams<{ id: string }>();
  const customer = useMemo(
    () => customers.find((item) => item.id === params.id),
    [params.id]
  );
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!customer) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer not found</h2>
        <p className="text-sm text-muted">Please select a valid customer.</p>
      </div>
    );
  }

  const invoices = [
    { id: "INV-2049", amount: 18450, status: "Overdue", date: "Sep 12, 2024" },
    { id: "INV-2025", amount: 8600, status: "Sent", date: "Sep 24, 2024" },
    { id: "INV-2011", amount: 12300, status: "Paid", date: "Aug 30, 2024" }
  ];

  const payments = [
    { id: "PAY-887", amount: 12300, date: "Aug 30, 2024", method: "ACH" },
    { id: "PAY-862", amount: 9800, date: "Aug 10, 2024", method: "Wire" }
  ];

  const quotes = [
    { id: "QT-102", amount: 22000, date: "Sep 5, 2024", status: "Open" },
    { id: "QT-096", amount: 15800, date: "Aug 12, 2024", status: "Accepted" }
  ];

  const calls = [
    { id: "CL-883", note: "Reviewed payment timeline", date: "Sep 20, 2024" },
    { id: "CL-872", note: "Left voicemail", date: "Sep 14, 2024" }
  ];

  const smsThread = [
    { id: "sms-1", sender: "LedgerLink", text: "Checking in on invoice INV-2049.", time: "Sep 20, 4:12 PM" },
    { id: "sms-2", sender: customer.name, text: "We are reviewing with AP, expect update tomorrow.", time: "Sep 20, 4:19 PM" }
  ];

  const activity = [
    { id: "evt-1", label: "Invoice INV-2049 sent", date: "Sep 12, 2024" },
    { id: "evt-2", label: "Follow-up SMS sent", date: "Sep 18, 2024" },
    { id: "evt-3", label: "Call completed", date: "Sep 20, 2024" },
    { id: "evt-4", label: "Payment received for INV-2011", date: "Aug 30, 2024" }
  ];

  return (
    <div className="space-y-8">
      <Card className="border border-white/70">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Customer</p>
            <h2 className="text-2xl font-semibold">
              {loading ? (
                <span className="block h-6 w-40 animate-pulse rounded-full bg-slate-200/70" />
              ) : (
                customer.name
              )}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {loading ? (
                <span className="block h-4 w-32 animate-pulse rounded-full bg-slate-200/70" />
              ) : (
                customer.company
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
              {loading ? (
                <span className="block h-4 w-32 animate-pulse rounded-full bg-primary/20" />
              ) : (
                `$${customer.outstandingAmount.toLocaleString()} outstanding`
              )}
            </div>
            <Button variant="secondary">
              <PhoneCall className="h-4 w-4" />
              Call now
            </Button>
            <Button>
              <Send className="h-4 w-4" />
              Send SMS
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              activeTab === tab
                ? "bg-primary text-white shadow-soft"
                : "bg-white/80 text-muted hover:bg-primary-light/60 hover:text-foreground"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "Overview" && (
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">Basic info</h3>
              <div className="grid gap-3 text-sm text-muted sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]">Phone</p>
                  <p className="mt-1 text-foreground">{customer.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]">Email</p>
                  <p className="mt-1 text-foreground">{customer.email}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]">Industry</p>
                  <p className="mt-1 text-foreground">{customer.industry}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]">Owner</p>
                  <p className="mt-1 text-foreground">{customer.owner}</p>
                </div>
              </div>
            </Card>
            <div className="space-y-6">
              <Card className="space-y-3 border border-white/70">
                <h3 className="text-lg font-semibold">Notes</h3>
                <p className="text-sm text-muted">
                  Finance team requested confirmation on payment cadence and updated
                  AP contact information.
                </p>
              </Card>
              <Card className="space-y-3 border border-white/70">
                <h3 className="text-lg font-semibold">Recent activity</h3>
                <p className="text-sm text-muted">
                  Last payment received Aug 30, 2024 • Last contact Sep 20, 2024
                </p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Financial" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">Invoices</h3>
              <div className="space-y-3 text-sm text-muted">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{invoice.id}</p>
                      <p className="text-xs text-muted">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">
                        ${invoice.amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted">{invoice.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">Payments</h3>
              <div className="space-y-3 text-sm text-muted">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{payment.id}</p>
                      <p className="text-xs text-muted">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">
                        ${payment.amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted">{payment.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">Quotes & estimates</h3>
              <div className="space-y-3 text-sm text-muted">
                {quotes.map((quote) => (
                  <div key={quote.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{quote.id}</p>
                      <p className="text-xs text-muted">{quote.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">
                        ${quote.amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted">{quote.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "Communication" && (
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">Call history</h3>
              <div className="space-y-3 text-sm text-muted">
                {calls.map((call) => (
                  <div key={call.id} className="space-y-1 rounded-xl border border-white/70 bg-white/80 p-3">
                    <p className="font-medium text-foreground">{call.note}</p>
                    <p className="text-xs text-muted">{call.date}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="space-y-4 border border-white/70">
              <h3 className="text-lg font-semibold">SMS thread</h3>
              <div className="space-y-3">
                {smsThread.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm",
                      message.sender === "LedgerLink"
                        ? "bg-primary-light text-foreground"
                        : "bg-white/80 text-muted"
                    )}
                  >
                    <p className="font-medium text-foreground">{message.sender}</p>
                    <p className="mt-1">{message.text}</p>
                    <p className="mt-2 text-xs text-muted">{message.time}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "Activity" && (
          <Card className="space-y-4 border border-white/70">
            <h3 className="text-lg font-semibold">Timeline</h3>
            <div className="space-y-4">
              {activity.map((event) => (
                <div key={event.id} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{event.label}</p>
                    <p className="text-xs text-muted">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
