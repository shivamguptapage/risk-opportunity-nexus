import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: "risk" | "opportunity" | "default";
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  variant = "default",
  className 
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "risk":
        return "bg-gradient-risk text-white";
      case "opportunity":
        return "bg-gradient-opportunity text-white";
      default:
        return "bg-gradient-card border-dashboard-border";
    }
  };

  return (
    <Card className={cn(
      "shadow-card transition-all duration-200 hover:shadow-dashboard",
      getVariantStyles(),
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium opacity-90">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-sm opacity-75">{subtitle}</p>
            )}
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Icon className="h-8 w-8 opacity-80" />
            {trend && (
              <div className={cn(
                "text-xs font-medium px-2 py-1 rounded-full",
                trend.isPositive
                  ? "bg-opportunity-high/20 text-opportunity-high"
                  : "bg-risk-high/20 text-risk-high"
              )}>
                {trend.value}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}