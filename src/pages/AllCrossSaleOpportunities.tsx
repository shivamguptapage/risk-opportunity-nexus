import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  ArrowLeft,
  Building2,
  User,
  DollarSign
} from "lucide-react";

export default function AllCrossSaleOpportunities() {
  const crossSaleOpportunities = [
    {
      id: 1,
      clientName: "TechCorp Industries",
      salesperson: "Rahul Gupta",
      category: "Industrial Machinery",
      currentPurchase: "₹8.5 Cr",
      opportunityValue: "₹12.3 Cr",
      priority: "High",
      lastContact: "2 days ago"
    },
    {
      id: 2,
      clientName: "Global Manufacturing",
      salesperson: "Sunita Reddy",
      category: "Steel Products",
      currentPurchase: "₹6.2 Cr", 
      opportunityValue: "₹9.8 Cr",
      priority: "High",
      lastContact: "1 day ago"
    },
    {
      id: 3,
      clientName: "Advanced Solutions Ltd",
      salesperson: "Vikram Singh",
      category: "Electronic Components",
      currentPurchase: "₹4.1 Cr",
      opportunityValue: "₹6.7 Cr",
      priority: "Medium",
      lastContact: "3 days ago"
    },
    {
      id: 4,
      clientName: "Future Enterprises",
      salesperson: "Meera Joshi",
      category: "Raw Materials",
      currentPurchase: "₹5.8 Cr",
      opportunityValue: "₹8.9 Cr",
      priority: "High", 
      lastContact: "1 day ago"
    },
    {
      id: 5,
      clientName: "Prime Industries",
      salesperson: "Arjun Patel",
      category: "Construction Materials",
      currentPurchase: "₹3.4 Cr",
      opportunityValue: "₹5.2 Cr",
      priority: "Medium",
      lastContact: "4 days ago"
    },
    {
      id: 6,
      clientName: "Elite Manufacturing",
      salesperson: "Kavita Sharma",
      category: "Chemical Products",
      currentPurchase: "₹2.9 Cr",
      opportunityValue: "₹4.6 Cr",
      priority: "Medium",
      lastContact: "2 days ago"
    }
  ];

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-opportunity-high text-white";
      case "Medium":
        return "bg-opportunity-medium text-white";
      case "Low":
        return "bg-opportunity-low text-white";
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
            <h1 className="text-2xl font-bold text-foreground">All Cross-Sale Opportunities</h1>
            <p className="text-muted-foreground">Complete list of cross-selling opportunities</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-opportunity-high" />
              Cross-Sale Opportunities ({crossSaleOpportunities.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crossSaleOpportunities
                .sort((a, b) => parseFloat(b.opportunityValue.replace(/[₹,\sCr]/g, '')) - parseFloat(a.opportunityValue.replace(/[₹,\sCr]/g, '')))
                .map((opportunity) => (
                <div key={opportunity.id} className="flex items-center justify-between p-4 rounded-lg bg-dashboard-card border border-dashboard-border hover:shadow-md transition-shadow">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-foreground">{opportunity.clientName}</h4>
                      <Badge className={getPriorityBadgeColor(opportunity.priority)}>
                        {opportunity.priority} Priority
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {opportunity.salesperson}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {opportunity.category}
                      </div>
                      <span>Last contact: {opportunity.lastContact}</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <span className="text-muted-foreground">
                        Current: <span className="font-medium text-foreground">{opportunity.currentPurchase}</span>
                      </span>
                      <span className="text-muted-foreground">
                        Opportunity: <span className="font-medium text-opportunity-high">{opportunity.opportunityValue}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right mr-4">
                      <div className="flex items-center gap-1 text-opportunity-high">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-bold">{opportunity.opportunityValue}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Potential Value</p>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <Link to={`/cross-sale/${opportunity.id}`}>
                        <Eye className="h-4 w-4" />
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}