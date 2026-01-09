"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  CircleDollarSign,
  Globe2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { HeroMockup } from "@/components/HeroMockup";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const features = [
  {
    title: "Unified revenue feed",
    description:
      "Merge calls, invoices, and AR signals into a single command center for every account.",
    icon: LineChart
  },
  {
    title: "Automated follow-ups",
    description:
      "Trigger personalized SMS and call workflows the moment invoices drift toward risk.",
    icon: Workflow
  },
  {
    title: "Compliance-ready insights",
    description:
      "Audit-ready records keep finance and operations aligned across every touchpoint.",
    icon: ShieldCheck
  },
  {
    title: "Instant team alignment",
    description:
      "Sync sales, finance, and support with shared timelines and live customer context.",
    icon: Sparkles
  }
];

const steps = [
  {
    title: "Connect QuickBooks + Twilio",
    description:
      "Securely link your billing and communications data in under five minutes.",
    icon: Globe2
  },
  {
    title: "Activate smart workflows",
    description:
      "LedgerLink enriches invoices with every call, SMS, and note automatically.",
    icon: Activity
  },
  {
    title: "Recover cash faster",
    description:
      "Spot high-risk accounts early and launch outreach with a single click.",
    icon: CircleDollarSign
  }
];

const industries = [
  {
    title: "Professional services",
    description: "Keep retainers and project invoices in lockstep."
  },
  { title: "Healthcare", description: "Coordinate billing across practices."
  },
  { title: "Logistics", description: "Stay ahead of delayed settlements." },
  { title: "SaaS", description: "Tie usage and payments to outreach." },
  { title: "Manufacturing", description: "Align ops and finance on payouts." }
];

const pricing = [
  {
    name: "Starter",
    price: "$199",
    description: "For emerging teams syncing their first revenue stack.",
    features: ["Up to 10 users", "QuickBooks + Twilio sync", "Basic workflows"]
  },
  {
    name: "Growth",
    price: "$449",
    description: "For scaling teams needing automation and insights.",
    features: ["Unlimited users", "Smart workflows", "Multi-entity support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For global operations with advanced compliance.",
    features: ["Dedicated success", "Custom integrations", "Audit trails"]
  }
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge>Revenue operations</Badge>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Your calls, invoices and cash flow, finally in one place.
            </h1>
            <p className="text-lg text-muted">
              LedgerLink connects QuickBooks with Twilio so your finance and revenue
              teams see every payment, call, and follow-up in real time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="shadow-glow">Start free trial</Button>
              <Button variant="secondary">Watch demo</Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                SOC2-ready workflows
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Setup in days, not weeks
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <HeroMockup />
          </motion.div>
        </section>

        <section id="features" className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <Badge>Features</Badge>
            <h2 className="text-3xl font-semibold">Everything revenue teams need.</h2>
            <p className="text-muted">
              Built for B2B finance leaders who want full visibility and proactive
              outreach in a single workspace.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 25px 45px -30px rgba(30, 109, 224, 0.7)" }}
              >
                <Card className="h-full space-y-4 border border-white/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <Badge>How it works</Badge>
            <h2 className="text-3xl font-semibold">Connect in minutes.</h2>
            <p className="text-muted">
              LedgerLink is designed to sit between your finance system and your
              customer communications.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-light text-secondary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="industries" className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <Badge>Industries</Badge>
            <h2 className="text-3xl font-semibold">Built for complex billing.</h2>
            <p className="text-muted">
              LedgerLink supports industries that depend on predictable cash flow
              and trusted communications.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm transition"
              >
                <h3 className="text-base font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm text-muted">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <Badge>Pricing</Badge>
            <h2 className="text-3xl font-semibold">Plans that grow with you.</h2>
            <p className="text-muted">
              Start small and scale with advanced compliance and collaboration.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, scale: plan.name === "Growth" ? 1.02 : 1 }}
              >
                <Card
                  className={cn(
                    "h-full space-y-5 border",
                    plan.name === "Growth"
                      ? "border-primary/60 shadow-glow"
                      : "border-white/70"
                  )}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                    <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.name === "Growth" ? "primary" : "secondary"}>
                    Choose plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="login"
          className="rounded-3xl bg-primary-light/50 p-10 text-center shadow-soft"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl space-y-6"
          >
            <Badge className="mx-auto w-fit">Ready to launch</Badge>
            <h2 className="text-3xl font-semibold">
              See your revenue operations in one command center.
            </h2>
            <p className="text-muted">
              Start your 14-day trial or schedule a demo with our onboarding team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Input
                placeholder="Work email"
                className="max-w-xs flex-1 bg-white"
              />
              <Button className="shadow-glow">Get started</Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/70">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 text-sm text-muted md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">LedgerLink</p>
            <p>Modern revenue operations for B2B teams.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <span>About</span>
            <span>Blog</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
