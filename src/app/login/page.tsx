"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,98,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(30,109,224,0.2),_transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="space-y-6 border border-white/70 bg-white/90 p-8 shadow-glow">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Welcome back
            </p>
            <h1 className="text-2xl font-semibold">Sign in to LedgerLink</h1>
            <p className="text-sm text-muted">
              Manage revenue operations with real-time customer context.
            </p>
          </div>
          <form className="space-y-4">
            <Input type="email" placeholder="Work email" autoComplete="email" />
            <Input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <Button className="w-full">Sign in</Button>
          </form>
          <div className="flex items-center justify-between text-sm text-muted">
            <Link href="#" className="transition hover:text-foreground">
              Forgot password
            </Link>
            <Link href="/signup" className="transition hover:text-foreground">
              Create a new account
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
