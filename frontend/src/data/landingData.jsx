
import {
  BusFront,
  MapPin,
  Clock3,
  ShieldCheck,
  Route,
  BellRing,
} from "lucide-react";

// These are sample frontend routes, not verified official transport data.
export const routes = [
  { name: "Askari X", stops: 9 },
  { name: "Badami Bagh", stops: 9 },
  { name: "Bahria Town", stops: 7 },
  { name: "Central Park Kahna", stops: 8 },
  { name: "Daroghawala", stops: 8 },
  { name: "DHA", stops: 9 },
  { name: "Manawan", stops: 8 },
  { name: "Paragon City", stops: 8 },
  { name: "Shahdara", stops: 8 },
];

const totalStops = routes.reduce(
  (sum, route) => sum + route.stops,
  0
);

export const stats = [
  { value: String(routes.length), label: "Sample routes listed" },
  { value: String(totalStops), label: "Sample stops" },
  { value: "GPS", label: "Tracking integration planned" },
  { value: "AI / ML", label: "ETA prediction goal" },
];

export const navigationLinks = [
  { label: "Tracking preview", href: "#tracking" },
  { label: "Routes", href: "#routes" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export const steps = [
  {
    title: "Create your account",
    description:
      "Sign up to access the UMTGo transport experience.",
  },
  {
    title: "Explore routes",
    description:
      "Browse the available route entries and transport information.",
  },
  {
    title: "Plan your commute",
    description:
      "Use the information available in the system to prepare for your journey.",
  },
];

export const features = [
  {
    icon: MapPin,
    title: "Route discovery",
    description:
      "Browse listed pickup areas and find the route relevant to your commute.",
  },
  {
    icon: BusFront,
    title: "Transport overview",
    description:
      "Keep essential transport information together in one place.",
  },
  {
    icon: Clock3,
    title: "Arrival-time planning",
    description:
      "ETA support depends on connected transport data and a validated model.",
  },
  {
    icon: Route,
    title: "Route information",
    description:
      "Review sample route and stop details from the frontend.",
  },
  {
    icon: BellRing,
    title: "Useful updates",
    description:
      "A foundation for future transport announcements and trip updates.",
  },
  {
    icon: ShieldCheck,
    title: "Student-focused access",
    description:
      "A transport experience designed around the UMT community.",
  },
];
