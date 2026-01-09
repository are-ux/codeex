"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { customers } from "@/lib/mock/customers";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active: "bg-accent-light text-accent",
  New: "bg-secondary-light text-secondary",
  "At risk": "bg-primary-light text-primary",
  Paused: "bg-slate-100 text-slate-500",
  Churned: "bg-slate-200 text-slate-500"
};

export default function CustomersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [status, setStatus] = useState("All");
  const [owner, setOwner] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  const industries = useMemo(
    () => ["All", ...new Set(customers.map((customer) => customer.industry))],
    []
  );
  const owners = useMemo(
    () => ["All", ...new Set(customers.map((customer) => customer.owner))],
    []
  );
  const statuses = useMemo(
    () => ["All", ...new Set(customers.map((customer) => customer.status))],
    []
  );

  const filteredCustomers = useMemo(() => {
    const lower = search.toLowerCase();
    return customers.filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(lower) ||
        customer.company.toLowerCase().includes(lower) ||
        customer.email.toLowerCase().includes(lower);
      const matchesIndustry = industry === "All" || customer.industry === industry;
      const matchesStatus = status === "All" || customer.status === status;
      const matchesOwner = owner === "All" || customer.owner === owner;
      return matchesSearch && matchesIndustry && matchesStatus && matchesOwner;
    });
  }, [search, industry, status, owner]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">LedgerLink</p>
          <h2 className="text-2xl font-semibold">Customers</h2>
          <p className="mt-2 text-sm text-muted">
            Track account health, outreach, and receivables in one view.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <Input
              placeholder="Search customers"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="md:w-64"
            />
          <select
            className="w-full rounded-xl border border-white/70 bg-white/90 px-4 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20 md:w-40"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          >
            {industries.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <select
            className="w-full rounded-xl border border-white/70 bg-white/90 px-4 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20 md:w-36"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            {statuses.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <select
            className="w-full rounded-xl border border-white/70 bg-white/90 px-4 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20 md:w-40"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
          >
            {owners.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>

      <Card className="border border-white/70">
        <div className="overflow-x-auto">
          <div className="min-w-[900px] space-y-3">
            <div className="grid grid-cols-[1.3fr_1.2fr_1fr_1.4fr_1fr_1fr_auto] text-xs uppercase tracking-[0.2em] text-muted">
              <span>Customer</span>
              <span>Company</span>
              <span>Phone</span>
              <span>Email</span>
              <span>Outstanding</span>
              <span>Last contact</span>
              <span>Status</span>
            </div>
            <div className="space-y-2">
              {(loading ? Array.from({ length: 6 }) : filteredCustomers).map(
                (customer, index) => (
                  <motion.button
                    key={loading ? index : customer.id}
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => {
                      if (!loading) {
                        router.push(`/app/customers/${customer.id}`);
                      }
                    }}
                    className="group grid w-full grid-cols-[1.3fr_1.2fr_1fr_1.4fr_1fr_1fr_auto] items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-left text-sm transition hover:border-primary/30 hover:bg-primary-light/40"
                  >
                    <span className="font-medium">
                      {loading ? (
                        <span className="block h-4 w-24 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        customer.name
                      )}
                    </span>
                    <span className="text-muted">
                      {loading ? (
                        <span className="block h-4 w-28 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        customer.company
                      )}
                    </span>
                    <span className="text-muted">
                      {loading ? (
                        <span className="block h-4 w-20 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        customer.phone
                      )}
                    </span>
                    <span className="text-muted">
                      {loading ? (
                        <span className="block h-4 w-36 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        customer.email
                      )}
                    </span>
                    <span className="font-semibold">
                      {loading ? (
                        <span className="block h-4 w-20 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        `$${customer.outstandingAmount.toLocaleString()}`
                      )}
                    </span>
                    <span className="text-muted">
                      {loading ? (
                        <span className="block h-4 w-20 animate-pulse rounded-full bg-slate-200/70" />
                      ) : (
                        customer.lastContactDate
                      )}
                    </span>
                    <Badge
                      className={cn(
                        "justify-self-start text-xs normal-case",
                        statusStyles[loading ? "Active" : customer.status]
                      )}
                    >
                      {loading ? "Loading" : customer.status}
                    </Badge>
                  </motion.button>
                )
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
