import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingDown, 
  TrendingUp, 
  Users, 
  Building2, 
  DollarSign,
  AlertTriangle,
  Target,
  UserPlus
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { RiskModule } from "./RiskModule";
import { CrossSaleModule } from "./CrossSaleModule";
import { SupplierOnboardingModule } from "./SupplierOnboardingModule";
import { ThemeToggle } from "./theme-toggle";

export function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");

  // Mock data - in real app, this would come from API
  const summaryData = {
    risk: {
      totalAmount: "₹12.5 Cr",
      clients: 48,
      suppliers: 23,
      trend: "+15%"
    },
    crossSale: {
      totalAmount: "₹28.3 Cr",
      clients: 156,
      trend: "+8%"
    },
    supplierOnboarding: {
      totalAmount: "₹45.2 Cr",
      suppliers: 89,
      trend: "+22%"
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Risk & Opportunity Dashboard</h1>
            <p className="text-muted-foreground">Monitor risks and identify growth opportunities</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="3m">Last 3 months</option>
              <option value="custom">Custom Range</option>
            </select>
            <ThemeToggle />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard
            title="Total At-Risk Amount"
            value={summaryData.risk.totalAmount}
            subtitle={`${summaryData.risk.clients} clients, ${summaryData.risk.suppliers} suppliers`}
            icon={AlertTriangle}
            trend={{ value: summaryData.risk.trend, isPositive: false }}
            variant="risk"
          />
          <MetricCard
            title="Cross-Sale Opportunity"
            value={summaryData.crossSale.totalAmount}
            subtitle={`${summaryData.crossSale.clients} potential clients`}
            icon={Target}
            trend={{ value: summaryData.crossSale.trend, isPositive: true }}
            variant="opportunity"
          />
          <MetricCard
            title="Supplier Onboarding Potential"
            value={summaryData.supplierOnboarding.totalAmount}
            subtitle={`${summaryData.supplierOnboarding.suppliers} potential suppliers`}
            icon={UserPlus}
            trend={{ value: summaryData.supplierOnboarding.trend, isPositive: true }}
            variant="opportunity"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="risk" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
            <TabsTrigger value="risk" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Risk Management
            </TabsTrigger>
            <TabsTrigger value="cross-sale" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Cross-Sale Opportunities
            </TabsTrigger>
            <TabsTrigger value="supplier-onboarding" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Supplier Onboarding
            </TabsTrigger>
          </TabsList>

          <TabsContent value="risk">
            <RiskModule timeRange={selectedTimeRange} />
          </TabsContent>

          <TabsContent value="cross-sale">
            <CrossSaleModule timeRange={selectedTimeRange} />
          </TabsContent>

          <TabsContent value="supplier-onboarding">
            <SupplierOnboardingModule timeRange={selectedTimeRange} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}