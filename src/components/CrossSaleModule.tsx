import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  TrendingUp,
  Building2,
  User,
  DollarSign
} from "lucide-react";

interface CrossSaleModuleProps {
  timeRange: string;
}

export function CrossSaleModule({ timeRange }: CrossSaleModuleProps) {
  // Mock data - in real app, this would come from API
  const crossSaleData = [
    {
      id: 1,
      clientName: "Tech Innovations Pvt Ltd",
      salesperson: "Neha Singh",
      totalPurchase: "₹15.2 Cr",
      ourCategories: ["Electronics", "Cables"],
      otherCategories: ["Semiconductors", "Processors"],
      potentialAmount: "₹8.5 Cr",
      priority: "High",
      competitorPrice: "₹42,000/unit",
      ourPrice: "₹38,500/unit"
    },
    {
      id: 2,
      clientName: "Manufacturing Excellence Co",
      salesperson: "Vikram Mehta",
      totalPurchase: "₹22.8 Cr",
      ourCategories: ["Steel", "Tools"],
      otherCategories: ["Machinery Parts", "Safety Equipment"],
      potentialAmount: "₹12.3 Cr",
      priority: "High",
      competitorPrice: "₹15,000/unit",
      ourPrice: "₹14,200/unit"
    },
    {
      id: 3,
      clientName: "Green Energy Solutions",
      salesperson: "Anita Gupta",
      totalPurchase: "₹8.9 Cr",
      ourCategories: ["Solar Panels"],
      otherCategories: ["Inverters", "Batteries"],
      potentialAmount: "₹5.1 Cr",
      priority: "Medium",
      competitorPrice: "₹28,000/unit",
      ourPrice: "₹26,500/unit"
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
    <div className="space-y-6">
      {/* Cross-Sale Opportunities */}
      <Card className="bg-gradient-card border-dashboard-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-opportunity-high" />
            High-Priority Cross-Sale Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {crossSaleData.map((opportunity) => (
              <div key={opportunity.id} className="p-4 rounded-lg bg-dashboard-card border border-dashboard-border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-foreground">{opportunity.clientName}</h4>
                      <Badge className={getPriorityBadgeColor(opportunity.priority)}>
                        {opportunity.priority} Potential
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-opportunity-high">{opportunity.potentialAmount}</p>
                      <p className="text-xs text-muted-foreground">Potential Revenue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {opportunity.salesperson}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Total Purchase: {opportunity.totalPurchase}
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Categories we sell to them:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.ourCategories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Categories they buy from others:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.otherCategories.map((category) => (
                          <Badge key={category} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-dashboard-border">
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Our Price: <span className="font-medium text-opportunity-high">{opportunity.ourPrice}</span></span>
                      <span>Competitor: <span className="font-medium">{opportunity.competitorPrice}</span></span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle>Top Cross-Sale Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Semiconductors</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹25.3 Cr</p>
                  <p className="text-xs text-muted-foreground">Potential</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Machinery Parts</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹18.7 Cr</p>
                  <p className="text-xs text-muted-foreground">Potential</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Safety Equipment</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹12.1 Cr</p>
                  <p className="text-xs text-muted-foreground">Potential</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Cross-Sale Conversion Rate</span>
                <div className="flex items-center gap-2 text-opportunity-high">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-bold">32%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Average Deal Size</span>
                <span className="font-medium">₹8.5 Cr</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Top Performing Salesperson</span>
                <span className="font-medium">Neha Singh</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}