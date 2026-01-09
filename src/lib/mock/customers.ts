export type CustomerStatus = "Active" | "New" | "At risk" | "Paused" | "Churned";

export interface CustomerRecord {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  status: CustomerStatus;
  owner: string;
  outstandingAmount: number;
  lastContactDate: string;
  lifetimeRevenue: number;
}

export const customers: CustomerRecord[] = [
  {
    id: "cust-1001",
    name: "Avery West",
    company: "Summit Logistics",
    phone: "+1 (312) 555-0194",
    email: "avery.west@summitlogistics.com",
    industry: "Logistics",
    status: "Active",
    owner: "Mia Chen",
    outstandingAmount: 18450,
    lastContactDate: "Sep 22, 2024",
    lifetimeRevenue: 284000
  },
  {
    id: "cust-1002",
    name: "Jordan Patel",
    company: "Silver Oak Medical",
    phone: "+1 (415) 555-0147",
    email: "jordan.patel@silveroakhealth.com",
    industry: "Healthcare",
    status: "At risk",
    owner: "Diego Ramos",
    outstandingAmount: 27630,
    lastContactDate: "Sep 20, 2024",
    lifetimeRevenue: 412500
  },
  {
    id: "cust-1003",
    name: "Claire Novak",
    company: "Brightline Studios",
    phone: "+1 (212) 555-0178",
    email: "claire@brightlinestudios.co",
    industry: "Creative",
    status: "Active",
    owner: "Mia Chen",
    outstandingAmount: 9600,
    lastContactDate: "Sep 18, 2024",
    lifetimeRevenue: 198400
  },
  {
    id: "cust-1004",
    name: "Eliot Park",
    company: "HarborView Health",
    phone: "+1 (213) 555-0129",
    email: "eliot.park@harborviewhealth.com",
    industry: "Healthcare",
    status: "New",
    owner: "Sasha Blake",
    outstandingAmount: 6200,
    lastContactDate: "Sep 24, 2024",
    lifetimeRevenue: 45200
  },
  {
    id: "cust-1005",
    name: "Sophia Alvarez",
    company: "Caldera Systems",
    phone: "+1 (646) 555-0112",
    email: "sophia@calderasystems.io",
    industry: "SaaS",
    status: "Active",
    owner: "Priya Singh",
    outstandingAmount: 12380,
    lastContactDate: "Sep 16, 2024",
    lifetimeRevenue: 336900
  },
  {
    id: "cust-1006",
    name: "Mason Lee",
    company: "Vanta Manufacturing",
    phone: "+1 (469) 555-0151",
    email: "mason.lee@vantamfg.com",
    industry: "Manufacturing",
    status: "At risk",
    owner: "Diego Ramos",
    outstandingAmount: 31400,
    lastContactDate: "Sep 19, 2024",
    lifetimeRevenue: 508000
  },
  {
    id: "cust-1007",
    name: "Naomi Keller",
    company: "Orchid Labs",
    phone: "+1 (305) 555-0133",
    email: "naomi@orchidlabs.ai",
    industry: "Biotech",
    status: "Active",
    owner: "Sasha Blake",
    outstandingAmount: 7820,
    lastContactDate: "Sep 21, 2024",
    lifetimeRevenue: 254700
  },
  {
    id: "cust-1008",
    name: "Rafael Dunn",
    company: "Axis Freight",
    phone: "+1 (404) 555-0184",
    email: "rafael.dunn@axisfreight.com",
    industry: "Logistics",
    status: "Paused",
    owner: "Priya Singh",
    outstandingAmount: 10450,
    lastContactDate: "Sep 12, 2024",
    lifetimeRevenue: 176200
  },
  {
    id: "cust-1009",
    name: "Lena Brooks",
    company: "Stonebridge Services",
    phone: "+1 (720) 555-0116",
    email: "lena.brooks@stonebridge.co",
    industry: "Professional services",
    status: "Active",
    owner: "Mia Chen",
    outstandingAmount: 5200,
    lastContactDate: "Sep 23, 2024",
    lifetimeRevenue: 214900
  },
  {
    id: "cust-1010",
    name: "Theo Grant",
    company: "Northwind Supplies",
    phone: "+1 (617) 555-0180",
    email: "theo@northwindsupplies.com",
    industry: "Retail",
    status: "At risk",
    owner: "Sasha Blake",
    outstandingAmount: 8420,
    lastContactDate: "Sep 17, 2024",
    lifetimeRevenue: 302100
  },
  {
    id: "cust-1011",
    name: "Rhea Patel",
    company: "Nova Freight",
    phone: "+1 (214) 555-0104",
    email: "rhea.patel@novafreight.com",
    industry: "Logistics",
    status: "Active",
    owner: "Diego Ramos",
    outstandingAmount: 13600,
    lastContactDate: "Sep 14, 2024",
    lifetimeRevenue: 289300
  },
  {
    id: "cust-1012",
    name: "Miles Ortega",
    company: "Forge Dynamics",
    phone: "+1 (917) 555-0123",
    email: "miles.ortega@forgedynamics.com",
    industry: "Manufacturing",
    status: "New",
    owner: "Priya Singh",
    outstandingAmount: 9800,
    lastContactDate: "Sep 25, 2024",
    lifetimeRevenue: 68200
  },
  {
    id: "cust-1013",
    name: "Isla Moreno",
    company: "Mira Health",
    phone: "+1 (503) 555-0143",
    email: "isla.moreno@mirahealth.com",
    industry: "Healthcare",
    status: "Active",
    owner: "Mia Chen",
    outstandingAmount: 11200,
    lastContactDate: "Sep 13, 2024",
    lifetimeRevenue: 263500
  },
  {
    id: "cust-1014",
    name: "Finn Taylor",
    company: "Atlas SaaS Group",
    phone: "+1 (415) 555-0162",
    email: "finn@atlassaas.io",
    industry: "SaaS",
    status: "Active",
    owner: "Sasha Blake",
    outstandingAmount: 14250,
    lastContactDate: "Sep 15, 2024",
    lifetimeRevenue: 355800
  },
  {
    id: "cust-1015",
    name: "Brooke Ellis",
    company: "Crestline Advisors",
    phone: "+1 (646) 555-0190",
    email: "brooke@crestlineadvisors.com",
    industry: "Professional services",
    status: "Paused",
    owner: "Priya Singh",
    outstandingAmount: 4600,
    lastContactDate: "Sep 8, 2024",
    lifetimeRevenue: 118900
  },
  {
    id: "cust-1016",
    name: "Owen Scott",
    company: "BluePeak Analytics",
    phone: "+1 (312) 555-0170",
    email: "owen.scott@bluepeakanalytics.com",
    industry: "SaaS",
    status: "Active",
    owner: "Diego Ramos",
    outstandingAmount: 6900,
    lastContactDate: "Sep 11, 2024",
    lifetimeRevenue: 212300
  },
  {
    id: "cust-1017",
    name: "Nina Howard",
    company: "Evergreen Hospitality",
    phone: "+1 (206) 555-0159",
    email: "nina@evergreenhospitality.com",
    industry: "Hospitality",
    status: "Churned",
    owner: "Mia Chen",
    outstandingAmount: 0,
    lastContactDate: "Aug 30, 2024",
    lifetimeRevenue: 90400
  },
  {
    id: "cust-1018",
    name: "Julian Cruz",
    company: "Pioneer Capital",
    phone: "+1 (646) 555-0134",
    email: "julian.cruz@pioneercapital.com",
    industry: "Finance",
    status: "Active",
    owner: "Sasha Blake",
    outstandingAmount: 17300,
    lastContactDate: "Sep 10, 2024",
    lifetimeRevenue: 498600
  }
];
