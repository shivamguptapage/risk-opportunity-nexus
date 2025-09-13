import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  ArrowLeft,
  Package,
  TrendingUp,
  Users
} from "lucide-react";

export default function AllCrossSaleCategories() {
  const crossSaleCategories = [
    {
      id: 1,
      category: "Steel & Metal Products",
      opportunityValue: "₹125.8 Cr",
      clientCount: 45,
      averageOrderSize: "₹2.8 Cr",
      conversionRate: "65%"
    },
    {
      id: 2,
      category: "Electrical Components",
      opportunityValue: "₹89.2 Cr", 
      clientCount: 38,
      averageOrderSize: "₹2.3 Cr",
      conversionRate: "58%"
    },
    {
      id: 3,
      category: "Industrial Machinery",
      opportunityValue: "₹156.4 Cr",
      clientCount: 29,
      averageOrderSize: "₹5.4 Cr",
      conversionRate: "72%"
    },
    {
      id: 4,
      category: "Raw Materials",
      opportunityValue: "₹98.7 Cr",
      clientCount: 52,
      averageOrderSize: "₹1.9 Cr",
      conversionRate: "61%"
    },
    {
      id: 5,
      category: "Electronic Components",
      opportunityValue: "₹76.3 Cr",
      clientCount: 41,
      averageOrderSize: "₹1.8 Cr",
      conversionRate: "55%"
    },
    {
      id: 6,
      category: "Construction Materials",
      opportunityValue: "₹134.9 Cr",
      clientCount: 33,
      averageOrderSize: "₹4.1 Cr",
      conversionRate: "68%"
    },
    {
      id: 7,
      category: "Chemical Products",
      opportunityValue: "₹67.5 Cr",
      clientCount: 27,
      averageOrderSize: "₹2.5 Cr",
      conversionRate: "52%"
    }
  ];

  const getConversionColor = (rate: string) => {
    const percentage = parseInt(rate);
    if (percentage >= 70) return "text-opportunity-high";
    if (percentage >= 60) return "text-opportunity-medium";
    return "text-opportunity-low";
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
            <h1 className="text-2xl font-bold text-foreground">All Cross-Sale Categories</h1>
            <p className="text-muted-foreground">Complete breakdown of cross-selling opportunities by category</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-opportunity-high" />
              Cross-Sale Categories by Opportunity Value ({crossSaleCategories.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crossSaleCategories
                .sort((a, b) => parseFloat(b.opportunityValue.replace(/[₹,\sCr]/g, '')) - parseFloat(a.opportunityValue.replace(/[₹,\sCr]/g, '')))
                .map((category, index) => (
                <div key={category.id} className="p-4 rounded-lg bg-dashboard-card border border-dashboard-border hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-opportunity-high text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{category.category}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Package className="h-4 w-4" />
                          <span>Category Potential</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-opportunity-high">{category.opportunityValue}</p>
                      <p className="text-xs text-muted-foreground">Total Opportunity</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-dashboard-border">
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Client Count</span>
                      </div>
                      <p className="font-bold text-foreground">{category.clientCount}</p>
                    </div>
                    
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Avg Order Size</span>
                      </div>
                      <p className="font-bold text-foreground">{category.averageOrderSize}</p>
                    </div>
                    
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      </div>
                      <p className={`font-bold ${getConversionColor(category.conversionRate)}`}>
                        {category.conversionRate}
                      </p>
                    </div>
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