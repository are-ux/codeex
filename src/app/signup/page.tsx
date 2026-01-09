"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,193,166,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(30,109,224,0.22),_transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="space-y-6 border border-white/70 bg-white/90 p-8 shadow-glow">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Get started
            </p>
            <h1 className="text-2xl font-semibold">Create your LedgerLink account</h1>
            <p className="text-sm text-muted">
              14 day free trial, no credit card required.
            </p>
          </div>
          <form className="space-y-4">
            <Input placeholder="Full name" autoComplete="name" />
            <Input type="email" placeholder="Work email" autoComplete="email" />
            <Input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <Input placeholder="Company name" autoComplete="organization" />
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Company size
              </label>
              <select className="w-full rounded-xl border border-white/70 bg-white/90 px-4 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                <option>1–5</option>
                <option>6–20</option>
                <option>21+</option>
              </select>
            </div>
            <Button className="w-full">Create account</Button>
          </form>
          <div className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-foreground">
              Sign in
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
