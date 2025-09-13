import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  UserPlus, 
  Eye, 
  TrendingUp,
  Building2,
  Package,
  DollarSign
} from "lucide-react";

interface SupplierOnboardingModuleProps {
  timeRange: string;
}

export function SupplierOnboardingModule({ timeRange }: SupplierOnboardingModuleProps) {
  // Mock data - in real app, this would come from API
  const supplierData = [
    {
      id: 1,
      supplierName: "Premium Steel Corp",
      totalVolume: "₹45.2 Cr",
      categories: ["Steel Products", "Metal Alloys", "Industrial Materials"],
      averagePrice: "₹35,000/unit",
      ourPrice: "₹38,500/unit",
      potentialSavings: "₹8.5 Cr",
      rating: "Excellent",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      supplierName: "Electronic Solutions Ltd",
      totalVolume: "₹28.7 Cr",
      categories: ["Semiconductors", "Electronic Components", "Cables"],
      averagePrice: "₹12,500/unit",
      ourPrice: "₹14,200/unit",
      potentialSavings: "₹5.2 Cr",
      rating: "Good",
      location: "Bangalore, Karnataka"
    },
    {
      id: 3,
      supplierName: "Green Energy Supplies",
      totalVolume: "₹32.1 Cr",
      categories: ["Solar Panels", "Inverters", "Renewable Energy"],
      averagePrice: "₹22,000/unit",
      ourPrice: "₹26,500/unit",
      potentialSavings: "₹7.8 Cr",
      rating: "Excellent",
      location: "Pune, Maharashtra"
    }
  ];

  const getRatingBadgeColor = (rating: string) => {
    switch (rating) {
      case "Excellent":
        return "bg-opportunity-high text-white";
      case "Good":
        return "bg-opportunity-medium text-white";
      case "Average":
        return "bg-opportunity-low text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Supplier Onboarding Candidates */}
      <Card className="bg-gradient-card border-dashboard-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-opportunity-high" />
              Top Supplier Onboarding Candidates
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/all-supplier-candidates">View All</Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supplierData.map((supplier) => (
              <div key={supplier.id} className="p-4 rounded-lg bg-dashboard-card border border-dashboard-border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-foreground">{supplier.supplierName}</h4>
                      <Badge className={getRatingBadgeColor(supplier.rating)}>
                        {supplier.rating} Rating
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-opportunity-high">{supplier.potentialSavings}</p>
                      <p className="text-xs text-muted-foreground">Potential Savings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {supplier.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Volume: {supplier.totalVolume}
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Product Categories:</p>
                      <div className="flex flex-wrap gap-1">
                        {supplier.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">Price Comparison:</p>
                      <div className="flex gap-4 text-xs">
                        <span>Their Price: <span className="font-medium text-opportunity-high">{supplier.averagePrice}</span></span>
                        <span>Our Price: <span className="font-medium">{supplier.ourPrice}</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-dashboard-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>Competitive pricing • High volume • Reliable supply chain</span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <Link to={`/supplier/${supplier.id}`}>
                        <Eye className="h-4 w-4" />
                        Evaluate
                      </Link>
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
            <CardTitle className="flex items-center justify-between">
              <span>Onboarding Potential by Category</span>
              <Button variant="outline" size="sm" asChild>
                <Link to="/all-supplier-categories">View All</Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Steel & Metal Products</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹52.3 Cr</p>
                  <p className="text-xs text-muted-foreground">15 suppliers</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Electronics & Components</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹38.9 Cr</p>
                  <p className="text-xs text-muted-foreground">23 suppliers</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Renewable Energy</span>
                <div className="text-right">
                  <p className="font-bold text-opportunity-high">₹29.4 Cr</p>
                  <p className="text-xs text-muted-foreground">12 suppliers</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle>Onboarding Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Total Qualified Suppliers</span>
                <span className="font-bold text-opportunity-high">89</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Average Cost Savings</span>
                <div className="flex items-center gap-2 text-opportunity-high">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-bold">18.5%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-dashboard-bg/50">
                <span className="text-sm font-medium">Top Location</span>
                <span className="font-medium">Mumbai (28 suppliers)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}