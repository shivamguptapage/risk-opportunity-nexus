import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  Eye, 
  ArrowLeft,
  Building2,
  User,
  Calendar
} from "lucide-react";

export default function AllRiskCases() {
  // Extended mock data
  const allRiskCases = [
    {
      id: 1,
      clientName: "ABC Manufacturing Ltd",
      salesperson: "Rajesh Kumar",
      category: "Steel Products",
      previousPurchase: "₹2.5 Cr",
      supplierPurchase: "₹2.8 Cr",
      riskLevel: "High",
      daysAgo: 2,
      location: "Mumbai",
      date: "2024-01-10"
    },
    {
      id: 2,
      clientName: "XYZ Industries",
      salesperson: "Priya Sharma",
      category: "Electrical Components",
      previousPurchase: "₹1.2 Cr",
      supplierPurchase: "₹1.1 Cr",
      riskLevel: "Medium",
      daysAgo: 1,
      location: "Delhi",
      date: "2024-01-11"
    },
    {
      id: 3,
      clientName: "Global Tech Solutions",
      salesperson: "Amit Patel",
      category: "Hardware Supplies",
      previousPurchase: "₹800K",
      supplierPurchase: "₹750K",
      riskLevel: "Low",
      daysAgo: 3,
      location: "Bangalore",
      date: "2024-01-09"
    },
    {
      id: 4,
      clientName: "Industrial Corp Ltd",
      salesperson: "Neha Singh",
      category: "Raw Materials",
      previousPurchase: "₹3.2 Cr",
      supplierPurchase: "₹3.5 Cr",
      riskLevel: "High",
      daysAgo: 1,
      location: "Chennai",
      date: "2024-01-11"
    },
    {
      id: 5,
      clientName: "Modern Enterprises",
      salesperson: "Arjun Mehta",
      category: "Machinery Parts",
      previousPurchase: "₹950K",
      supplierPurchase: "₹920K",
      riskLevel: "Medium",
      daysAgo: 2,
      location: "Pune",
      date: "2024-01-10"
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
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">All Risk Cases</h1>
            <p className="text-muted-foreground">Complete list of clients at risk</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-risk-high" />
              All Risk Cases ({allRiskCases.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allRiskCases.map((risk) => (
                <div key={risk.id} className="flex items-center justify-between p-4 rounded-lg bg-dashboard-card border border-dashboard-border hover:shadow-md transition-shadow">
                  <div className="space-y-2 flex-1">
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
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {risk.date}
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <span className="text-muted-foreground">
                        Previously: <span className="font-medium text-foreground">{risk.previousPurchase}</span>
                      </span>
                      <span className="text-muted-foreground">
                        Direct purchase: <span className="font-medium text-risk-high">{risk.supplierPurchase}</span>
                      </span>
                      <span className="text-muted-foreground">
                        Location: <span className="font-medium">{risk.location}</span>
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <Link to={`/risk/${risk.id}`}>
                      <Eye className="h-4 w-4" />
                      Details
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}