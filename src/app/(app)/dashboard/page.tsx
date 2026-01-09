"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PhoneCall, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  agingBuckets,
  followUpQueue,
  overdueInvoices,
  revenueSeries,
  summaryMetrics
} from "@/lib/mock/dashboard";
import { cn } from "@/lib/utils";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function CountUp({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 120, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const nextValue = Math.round(latest);
      setDisplay(
        value > 1000 ? currencyFormatter.format(nextValue) : nextValue.toString()
      );
    });
    return unsubscribe;
  }, [springValue, value]);

  return <span>{display}</span>;
}

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-full animate-pulse rounded-full bg-slate-200/70",
        className
      )}
    />
  );
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, []);

  const chartMax = useMemo(
    () => Math.max(...revenueSeries.map((point) => point.revenue)),
    []
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted">LedgerLink</p>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-sm text-muted">
          Snapshot of revenue health, collections, and outreach activity.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryMetrics.map((metric) => (
          <Card key={metric.label} className="space-y-3 border border-white/70">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {metric.label}
            </p>
            <p className="text-2xl font-semibold">
              {loading ? (
                <SkeletonBlock className="h-7 w-28" />
              ) : (
                <CountUp value={metric.value} />
              )}
            </p>
            <p className="text-xs text-muted">
              {loading ? <SkeletonBlock className="w-32" /> : metric.change}
            </p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card className="space-y-6 border border-white/70">
          <div>
            <h3 className="text-lg font-semibold">Revenue over time</h3>
            <p className="text-sm text-muted">Last 6 months billed revenue.</p>
          </div>
          {loading ? (
            <div className="space-y-4">
              <SkeletonBlock className="h-40 rounded-2xl" />
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonBlock key={index} className="h-3" />
                ))}
              </div>
            </div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueSeries} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis
                    hide
                    domain={[0, chartMax * 1.1]}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(30, 109, 224, 0.08)" }}
                    formatter={(value: number) => currencyFormatter.format(value)}
                  />
                  <Bar dataKey="revenue" fill="#1e6de0" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <Card className="space-y-6 border border-white/70">
          <div>
            <h3 className="text-lg font-semibold">Aging buckets</h3>
            <p className="text-sm text-muted">Outstanding invoices by age.</p>
          </div>
          <div className="space-y-4">
            {(loading ? Array.from({ length: 4 }) : agingBuckets).map(
              (bucket, index) => (
                <div key={loading ? index : bucket.bucket} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {loading ? <SkeletonBlock className="h-4 w-24" /> : bucket.bucket}
                    </span>
                    <span className="text-muted">
                      {loading ? (
                        <SkeletonBlock className="h-4 w-16" />
                      ) : (
                        currencyFormatter.format(bucket.amount)
                      )}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-primary-light/40">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: loading ? "0%" : `${bucket.percent}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-2 rounded-full bg-primary"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Card className="space-y-6 border border-white/70">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Overdue invoices</h3>
              <p className="text-sm text-muted">
                High-priority accounts to recover this week.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {overdueInvoices.length} invoices
            </p>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_auto] text-xs uppercase tracking-[0.2em] text-muted">
              <span>Customer</span>
              <span>Invoice</span>
              <span>Due date</span>
              <span>Amount</span>
              <span className="text-right">Status</span>
            </div>
            <div className="space-y-2">
              {(loading ? Array.from({ length: 5 }) : overdueInvoices).map(
                (invoice, index) => (
                  <div
                    key={loading ? index : invoice.invoice}
                    className="group grid grid-cols-[1.6fr_1fr_1fr_1fr_auto] items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary-light/40"
                  >
                    <span className="font-medium">
                      {loading ? <SkeletonBlock className="h-4 w-24" /> : invoice.customer}
                    </span>
                    <span className="text-muted">
                      {loading ? <SkeletonBlock className="h-4 w-16" /> : invoice.invoice}
                    </span>
                    <span className="text-muted">
                      {loading ? <SkeletonBlock className="h-4 w-20" /> : invoice.dueDate}
                    </span>
                    <span className="font-semibold text-foreground">
                      {loading ? (
                        <SkeletonBlock className="h-4 w-20" />
                      ) : (
                        currencyFormatter.format(invoice.amount)
                      )}
                    </span>
                    <div className="flex items-center justify-end gap-2">
                      <span className="rounded-full bg-secondary-light px-2 py-1 text-xs text-secondary">
                        {loading ? "Loading" : invoice.status}
                      </span>
                      <div className="flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
                        <button className="rounded-full border border-white/70 bg-white/90 p-2 text-muted transition hover:text-foreground">
                          <PhoneCall className="h-4 w-4" />
                        </button>
                        <button className="rounded-full border border-white/70 bg-white/90 p-2 text-muted transition hover:text-foreground">
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>

        <Card className="space-y-6 border border-white/70">
          <div>
            <h3 className="text-lg font-semibold">Follow up queue</h3>
            <p className="text-sm text-muted">
              Next best actions for revenue acceleration.
            </p>
          </div>
          <div className="space-y-4">
            {(loading ? Array.from({ length: 4 }) : followUpQueue).map(
              (item, index) => (
                <div
                  key={loading ? index : item.customer}
                  className="space-y-2 rounded-2xl border border-white/60 bg-white/80 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {loading ? <SkeletonBlock className="h-4 w-24" /> : item.customer}
                    </span>
                    <span className="text-xs text-muted">
                      {loading ? <SkeletonBlock className="h-4 w-16" /> : item.lastContact}
                    </span>
                  </div>
                  <div className="text-sm text-muted">
                    {loading ? (
                      <SkeletonBlock className="h-4 w-full" />
                    ) : (
                      <>
                        <span className="font-medium text-foreground">{item.reason}</span>{" "}
                        • {item.action}
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
