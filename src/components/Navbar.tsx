"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? "0.75rem" : "1.25rem",
        paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        boxShadow: scrolled ? "0 12px 30px -24px rgba(15, 23, 42, 0.4)" : "0 0 0 rgba(0,0,0,0)"
      }}
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition",
        scrolled ? "bg-background/90" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link href="#" className="text-lg font-semibold text-foreground">
          LedgerLink
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden lg:inline-flex"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button className="shadow-glow" onClick={() => router.push("/signup")}>
            Get started
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
