declare module "lucide-react" {
  import { ComponentType, SVGProps, RefAttributes } from "react";

  interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  type LucideIcon = ComponentType<LucideProps & RefAttributes<SVGSVGElement>>;

  export type { LucideIcon, LucideProps };

  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BarChart2: LucideIcon;
  export const Building2: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const CheckIcon: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronDownIcon: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronLeftIcon: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronRightIcon: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ChevronUpIcon: LucideIcon;
  export const Clock: LucideIcon;
  export const Cookie: LucideIcon;
  export const CreditCard: LucideIcon;
  export const DollarSign: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const FileText: LucideIcon;
  export const Globe: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Handshake: LucideIcon;
  export const Headphones: LucideIcon;
  export const Info: LucideIcon;
  export const Lock: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Megaphone: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Package: LucideIcon;
  export const Phone: LucideIcon;
  export const Play: LucideIcon;
  export const Plus: LucideIcon;
  export const Radio: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const Search: LucideIcon;
  export const Share2: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Store: LucideIcon;
  export const Target: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const User: LucideIcon;
  export const UserCheck: LucideIcon;
  export const UserPlus: LucideIcon;
  export const Users: LucideIcon;
  export const Video: LucideIcon;
  export const X: LucideIcon;
  export const Zap: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Rocket: LucideIcon;
}
