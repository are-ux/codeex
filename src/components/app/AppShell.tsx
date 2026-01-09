"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  ChevronDown,
  FileText,
  Gauge,
  HelpCircle,
  LineChart,
  PhoneCall,
  Repeat2,
  Settings,
  Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/app/dashboard", icon: Gauge },
  { label: "Customers", href: "/app/customers", icon: Users },
  { label: "Invoices and Payments", href: "/app/invoices", icon: FileText },
  { label: "Calls and SMS", href: "/app/calls", icon: PhoneCall },
  { label: "Follow ups", href: "/app/follow-ups", icon: Repeat2 },
  { label: "Automation", href: "/app/automation", icon: LineChart },
  { label: "Reports", href: "/app/reports", icon: LineChart },
  { label: "Settings", href: "/app/settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentTitle = useMemo(() => {
    const item = navItems.find((navItem) => navItem.href === pathname);
    return item?.label ?? "Dashboard";
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-64 flex-col border-r border-white/70 bg-white/70 p-6 lg:flex">
        <Link href="/" className="text-lg font-semibold">
          LedgerLink
        </Link>
        <nav className="mt-8 flex flex-col gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <motion.div key={item.href} whileHover={{ x: 4, scale: 1.01 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-primary-light text-primary"
                      : "text-muted hover:bg-primary-light/60 hover:text-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      active ? "text-primary" : "text-muted"
                    )}
                  />
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 left-0 z-40 w-64 border-r border-white/70 bg-white p-6 shadow-soft lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold">
                LedgerLink
              </Link>
              <button
                className="text-sm text-muted"
                onClick={() => setMobileOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <motion.div key={item.href} whileHover={{ x: 4, scale: 1.01 }}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                        active
                          ? "bg-primary-light text-primary"
                          : "text-muted hover:bg-primary-light/60 hover:text-foreground"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          active ? "text-primary" : "text-muted"
                        )}
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="flex flex-1 flex-col">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/70 bg-white/80 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </Button>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                LedgerLink
              </p>
              <h1 className="text-xl font-semibold">{currentTitle}</h1>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden w-64 lg:block">
              <Input placeholder="Search" />
            </div>
            <button className="rounded-full border border-white/70 bg-white/80 p-2 text-muted transition hover:text-foreground">
              <HelpCircle className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-white/70 bg-white/80 p-2 text-muted transition hover:text-foreground">
              <Bell className="h-4 w-4" />
            </button>
            <div className="relative">
              <button
                className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-2 py-1.5 text-sm font-medium"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  LL
                </div>
                <span className="hidden sm:inline">Avery West</span>
                <ChevronDown className="h-4 w-4 text-muted" />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/70 bg-white p-3 text-sm shadow-soft"
                  >
                    <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-muted transition hover:bg-primary-light/60 hover:text-foreground">
                      Profile
                    </button>
                    <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-muted transition hover:bg-primary-light/60 hover:text-foreground">
                      Billing
                    </button>
                    <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-muted transition hover:bg-primary-light/60 hover:text-foreground">
                      Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex-1 px-6 py-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
