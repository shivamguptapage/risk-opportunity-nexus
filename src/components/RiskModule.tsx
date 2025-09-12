import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Eye, 
  TrendingDown,
  Building2,
  User
} from "lucide-react";

interface RiskModuleProps {
  timeRange: string;
}

export function RiskModule({ timeRange }: RiskModuleProps) {
  // Mock data - in real app, this would come from API
  const riskData = [
    {
      id: 1,
      clientName: "ABC Manufacturing Ltd",
      salesperson: "Rajesh Kumar",
      category: "Steel Products",
      previousPurchase: "₹2.5 Cr",
      supplierPurchase: "₹2.8 Cr",
      riskLevel: "High",
      daysAgo: 2
    },
    {
      id: 2,
      clientName: "XYZ Industries",
      salesperson: "Priya Sharma",
      category: "Electrical Components",
      previousPurchase: "₹1.2 Cr",
      supplierPurchase: "₹1.1 Cr",
      riskLevel: "Medium",
      daysAgo: 1
    },
    {
      id: 3,
      clientName: "Global Tech Solutions",
      salesperson: "Amit Patel",
      category: "Hardware Supplies",
      previousPurchase: "₹800K",
      supplierPurchase: "₹750K",
      riskLevel: "Low",
      daysAgo: 3
    }
  ];

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-risk-high text-white";
      case "Medium":
        return "bg-risk-medium text-white";
      case "Low":
        return "bg-risk-low text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Risk Cases */}
      <Card className="bg-gradient-card border-dashboard-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-risk-high" />
            Recent Risk Cases (Last 3 Days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskData.map((risk) => (
              <div key={risk.id} className="flex items-center justify-between p-4 rounded-lg bg-dashboard-card border border-dashboard-border">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-foreground">{risk.clientName}</h4>
                    <Badge className={getRiskBadgeColor(risk.riskLevel)}>
                      {risk.riskLevel} Risk
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {risk.salesperson}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {risk.category}
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <span className="text-muted-foreground">
                      Previously bought from us: <span className="font-medium text-foreground">{risk.previousPurchase}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Bought directly ({risk.daysAgo}d ago): <span className="font-medium text-risk-high">{risk.supplierPurchase}</span>
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analytics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle>Top At-Risk Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {riskData.map((client, index) => (
                <div key={client.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{client.clientName}</p>
                    <p className="text-sm text-muted-foreground">{client.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-risk-high">{client.supplierPurchase}</p>
                    <p className="text-xs text-muted-foreground">Lost amount</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle>Risk Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">This Month vs Last Month</span>
                <div className="flex items-center gap-2 text-risk-high">
                  <TrendingDown className="h-4 w-4" />
                  <span className="font-bold">+15% Risk Increase</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Most Affected Category</span>
                <span className="font-medium">Steel Products (₹5.2 Cr)</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Top Risk Supplier</span>
                <span className="font-medium">Direct Steel Corp</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}