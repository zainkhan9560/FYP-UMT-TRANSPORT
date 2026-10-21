
import {
  BusFront,
  Clock3,
  MapPin,
  BellRing,
  ShieldCheck,
  Route,
} from 'lucide-react'

import { Link } from 'react-router-dom'

export const features = [
  {
    icon: MapPin,
    title: 'Live Bus Tracking',
    description:
      'View the bus location on a map and follow its journey toward your pickup stop.',
  },
  {
    icon: Clock3,
    title: 'Smart ETA Prediction',
    description:
      'Get estimated arrival times using route information and available location history.',
  },
  {
    icon: Route,
    title: 'Route Information',
    description:
      'Explore bus routes, pickup points, and destinations before starting your journey.',
  },
  {
    icon: BellRing,
    title: 'Travel Notifications',
    description:
      'Receive transport updates and delay notifications when the service supports them.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access',
    description:
      'Provide separate dashboards and permissions for students, drivers, and administrators.',
  },
  {
    icon: BusFront,
    title: 'Transport Management',
    description:
      'Help authorized staff manage buses, drivers, routes, and service information.',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Sign in',
    description:
      'Log in to your account and select your assigned bus route.',
  },
  {
    number: '02',
    title: 'Track your bus',
    description:
      'View the latest reported location and estimated arrival time.',
  },
  {
    number: '03',
    title: 'Plan your trip',
    description:
      'Use the available information to plan when to leave for your stop.',
  },
]

export const routes = [
  { name: 'Askari X', stops: 'View route stops' },
  { name: 'Bahria Town', stops: 'View route stops' },
  { name: 'DHA', stops: 'View route stops' },
  { name: 'Paragon City', stops: 'View route stops' },
  { name: 'Shahdara', stops: 'View route stops' },
  { name: 'Central Park', stops: 'View route stops' },
]

export const navigationLinks = [
  { label: 'Features', to: '#features' },
  { label: 'How it works', to: '#how-it-works' },
  { label: 'Routes', to: '#routes' },
]

export const stats = [
  {
    value: "6+",
    label: "Transport Routes",
  },
  {
    value: "24/7",
    label: "Transport Access",
  },
  {
    value: "Live",
    label: "Bus Tracking",
  },
  {
    value: "3",
    label: "User Roles",
  },
];

