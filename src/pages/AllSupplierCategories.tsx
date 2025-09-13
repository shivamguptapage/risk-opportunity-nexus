import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  UserPlus, 
  ArrowLeft,
  Package,
  TrendingUp,
  Building2
} from "lucide-react";

export default function AllSupplierCategories() {
  const supplierCategories = [
    {
      id: 1,
      category: "Steel & Metal Products",
      opportunityValue: "₹52.3 Cr",
      supplierCount: 15,
      averageSavings: "22%",
      topLocation: "Mumbai"
    },
    {
      id: 2,
      category: "Electronics & Components",
      opportunityValue: "₹38.9 Cr",
      supplierCount: 23,
      averageSavings: "18%",
      topLocation: "Bangalore"
    },
    {
      id: 3,
      category: "Renewable Energy",
      opportunityValue: "₹29.4 Cr",
      supplierCount: 12,
      averageSavings: "25%",
      topLocation: "Pune"
    },
    {
      id: 4,
      category: "Industrial Machinery",
      opportunityValue: "₹45.7 Cr",
      supplierCount: 18,
      averageSavings: "20%",
      topLocation: "Chennai"
    },
    {
      id: 5,
      category: "Chemical Products",
      opportunityValue: "₹31.8 Cr",
      supplierCount: 14,
      averageSavings: "16%",
      topLocation: "Ahmedabad"
    },
    {
      id: 6,
      category: "Construction Materials",
      opportunityValue: "₹42.1 Cr",
      supplierCount: 20,
      averageSavings: "19%",
      topLocation: "Delhi"
    },
    {
      id: 7,
      category: "Textile & Fabrics",
      opportunityValue: "₹26.5 Cr",
      supplierCount: 16,
      averageSavings: "15%",
      topLocation: "Surat"
    }
  ];

  const getSavingsColor = (savings: string) => {
    const percentage = parseInt(savings);
    if (percentage >= 20) return "text-opportunity-high";
    if (percentage >= 15) return "text-opportunity-medium";
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
            <h1 className="text-2xl font-bold text-foreground">All Supplier Categories</h1>
            <p className="text-muted-foreground">Onboarding potential breakdown by product category</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-opportunity-high" />
              Supplier Onboarding by Category ({supplierCategories.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supplierCategories
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
                          <span>Onboarding Category</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-opportunity-high">{category.opportunityValue}</p>
                      <p className="text-xs text-muted-foreground">Total Potential</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-dashboard-border">
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <UserPlus className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Suppliers</span>
                      </div>
                      <p className="font-bold text-foreground">{category.supplierCount}</p>
                    </div>
                    
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Avg Savings</span>
                      </div>
                      <p className={`font-bold ${getSavingsColor(category.averageSavings)}`}>
                        {category.averageSavings}
                      </p>
                    </div>
                    
                    <div className="text-center p-3 rounded-lg bg-dashboard-bg/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Top Location</span>
                      </div>
                      <p className="font-bold text-foreground">{category.topLocation}</p>
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