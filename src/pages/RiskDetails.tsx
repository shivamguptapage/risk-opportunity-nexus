import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, User, Building2, Calendar, TrendingDown, DollarSign } from "lucide-react";

export default function RiskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - would come from API in real app
  const riskCase = {
    id: parseInt(id || "1"),
    clientName: "ABC Manufacturing Ltd",
    salesperson: "Rajesh Kumar",
    category: "Steel Products",
    previousPurchase: "₹2.5 Cr",
    supplierPurchase: "₹2.8 Cr",
    riskLevel: "High",
    daysAgo: 2,
    supplierName: "Direct Steel Corp",
    clientEmail: "procurement@abcmanufacturing.com",
    clientPhone: "+91 98765 43210",
    lastOrderDate: "2024-01-10",
    riskTrend: "+35%",
    historicalData: [
      { month: "Oct 2023", fromUs: "₹3.2 Cr", direct: "₹0.5 Cr" },
      { month: "Nov 2023", fromUs: "₹2.8 Cr", direct: "₹1.2 Cr" },
      { month: "Dec 2023", fromUs: "₹2.5 Cr", direct: "₹2.1 Cr" },
      { month: "Jan 2024", fromUs: "₹1.8 Cr", direct: "₹2.8 Cr" }
    ]
  };

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
    <div className="min-h-screen bg-dashboard-bg p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Risk Case Details</h1>
              <p className="text-muted-foreground">Detailed analysis for {riskCase.clientName}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Client Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-risk-high" />
                  Client Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{riskCase.clientName}</h3>
                  <Badge className={getRiskBadgeColor(riskCase.riskLevel)}>
                    {riskCase.riskLevel} Risk
                  </Badge>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Salesperson: <span className="font-medium text-foreground">{riskCase.salesperson}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>Category: <span className="font-medium text-foreground">{riskCase.category}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Last Direct Purchase: <span className="font-medium text-foreground">{riskCase.daysAgo} days ago</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingDown className="h-4 w-4" />
                    <span>Risk Trend: <span className="font-medium text-risk-high">{riskCase.riskTrend}</span></span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-dashboard-border">
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Previous Purchase (From Us)</p>
                    <p className="text-2xl font-bold text-foreground">{riskCase.previousPurchase}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Direct Purchase (Recent)</p>
                    <p className="text-2xl font-bold text-risk-high">{riskCase.supplierPurchase}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase History */}
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Purchase History Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskCase.historicalData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-dashboard-bg/50">
                      <span className="font-medium">{data.month}</span>
                      <div className="flex gap-6 text-sm">
                        <span className="text-muted-foreground">
                          From Us: <span className="font-medium text-foreground">{data.fromUs}</span>
                        </span>
                        <span className="text-muted-foreground">
                          Direct: <span className="font-medium text-risk-high">{data.direct}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{riskCase.clientEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{riskCase.clientPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Order Date</p>
                  <p className="font-medium text-foreground">{riskCase.lastOrderDate}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Competing Supplier</p>
                  <p className="font-medium text-foreground">{riskCase.supplierName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Their Recent Volume</p>
                  <p className="font-medium text-risk-high">{riskCase.supplierPurchase}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loss Trend</p>
                  <p className="font-medium text-risk-high">{riskCase.riskTrend} increase</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  Schedule Call with Client
                </Button>
                <Button className="w-full" variant="outline">
                  Send Competitive Proposal
                </Button>
                <Button className="w-full" variant="outline">
                  Alert Sales Manager
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}