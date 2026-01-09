export const summaryMetrics = [
  {
    label: "Total outstanding",
    value: 482750,
    change: "+6.4% from last month"
  },
  {
    label: "Collected this month",
    value: 218930,
    change: "+12.1% from last month"
  },
  {
    label: "Overdue invoices",
    value: 27,
    change: "7 high priority"
  },
  {
    label: "Follow ups today",
    value: 14,
    change: "5 urgent touchpoints"
  }
];

export const revenueSeries = [
  { month: "Apr", revenue: 168000 },
  { month: "May", revenue: 182400 },
  { month: "Jun", revenue: 196300 },
  { month: "Jul", revenue: 204800 },
  { month: "Aug", revenue: 219600 },
  { month: "Sep", revenue: 231900 }
];

export const agingBuckets = [
  { bucket: "0–30 days", amount: 152400, percent: 46 },
  { bucket: "31–60 days", amount: 86400, percent: 26 },
  { bucket: "61–90 days", amount: 54200, percent: 16 },
  { bucket: "90+ days", amount: 39850, percent: 12 }
];

export const overdueInvoices = [
  {
    customer: "Silver Oak Medical",
    invoice: "INV-2049",
    dueDate: "Sep 12, 2024",
    amount: 18450,
    status: "High risk"
  },
  {
    customer: "Summit Logistics",
    invoice: "INV-2017",
    dueDate: "Sep 18, 2024",
    amount: 9720,
    status: "Needs follow up"
  },
  {
    customer: "Caldera Systems",
    invoice: "INV-1998",
    dueDate: "Sep 24, 2024",
    amount: 12380,
    status: "Pending call"
  },
  {
    customer: "Northwind Supplies",
    invoice: "INV-1973",
    dueDate: "Sep 28, 2024",
    amount: 8420,
    status: "SMS reminder sent"
  },
  {
    customer: "Brightline Studios",
    invoice: "INV-1944",
    dueDate: "Oct 2, 2024",
    amount: 13600,
    status: "Escalate"
  }
];

export const followUpQueue = [
  {
    customer: "Vanta Manufacturing",
    reason: "Invoice overdue 31 days",
    action: "Call AP manager",
    lastContact: "Sep 20, 2024"
  },
  {
    customer: "HarborView Health",
    reason: "Payment plan requested",
    action: "Send updated terms",
    lastContact: "Sep 21, 2024"
  },
  {
    customer: "Forge Dynamics",
    reason: "SMS unanswered",
    action: "Schedule follow-up",
    lastContact: "Sep 22, 2024"
  },
  {
    customer: "Axis Freight",
    reason: "New invoice issued",
    action: "Confirm receipt",
    lastContact: "Sep 23, 2024"
  }
];
