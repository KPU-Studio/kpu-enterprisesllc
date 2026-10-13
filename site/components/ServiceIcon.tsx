// Premium icon set (Lucide) behind a stable name→icon map, so capability cards
// and industry chips share one consistent, polished line-icon system.
import {
  Network,
  Code2,
  ShieldCheck,
  Compass,
  Target,
  MessageSquareText,
  Workflow,
  LineChart,
  Container,
  Stethoscope,
  Banknote,
  Scale,
  Briefcase,
  Factory,
  Cpu,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Truck,
  Building2,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  // Service capabilities
  architecture: Network,
  code: Code2,
  shield: ShieldCheck,
  advisory: Compass,
  strategy: Target,
  app: MessageSquareText,
  automation: Workflow,
  analytics: LineChart,
  deploy: Container,
  // Industries
  healthcare: Stethoscope,
  finance: Banknote,
  legal: Scale,
  professional: Briefcase,
  manufacturing: Factory,
  technology: Cpu,
  retail: ShoppingBag,
  education: GraduationCap,
  nonprofit: HeartHandshake,
  government: Landmark,
  logistics: Truck,
  realestate: Building2,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Network;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
