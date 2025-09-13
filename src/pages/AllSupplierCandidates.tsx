import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  UserPlus, 
  Eye, 
  ArrowLeft,
  Building2,
  Package,
  DollarSign,
  MapPin
} from "lucide-react";

export default function AllSupplierCandidates() {
  const supplierCandidates = [
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
    },
    {
      id: 4,
      supplierName: "Industrial Tech Corp",
      totalVolume: "₹51.3 Cr",
      categories: ["Heavy Machinery", "Industrial Equipment", "Automation"],
      averagePrice: "₹125,000/unit",
      ourPrice: "₹142,000/unit",
      potentialSavings: "₹9.8 Cr",
      rating: "Excellent",
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 5,
      supplierName: "Chemical Industries Ltd",
      totalVolume: "₹36.9 Cr",
      categories: ["Industrial Chemicals", "Polymers", "Specialty Chemicals"],
      averagePrice: "₹18,500/unit",
      ourPrice: "₹21,200/unit",
      potentialSavings: "₹6.4 Cr",
      rating: "Good",
      location: "Ahmedabad, Gujarat"
    },
    {
      id: 6,
      supplierName: "Construction Materials Inc",
      totalVolume: "₹42.8 Cr",
      categories: ["Cement", "Steel Bars", "Construction Hardware"],
      averagePrice: "₹8,200/unit",
      ourPrice: "₹9,500/unit",
      potentialSavings: "₹7.1 Cr",
      rating: "Excellent",
      location: "Delhi, NCR"
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
            <h1 className="text-2xl font-bold text-foreground">All Supplier Candidates</h1>
            <p className="text-muted-foreground">Complete list of potential suppliers for onboarding</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-opportunity-high" />
              Supplier Onboarding Candidates ({supplierCandidates.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supplierCandidates
                .sort((a, b) => parseFloat(b.potentialSavings.replace(/[₹,\sCr]/g, '')) - parseFloat(a.potentialSavings.replace(/[₹,\sCr]/g, '')))
                .map((supplier) => (
                <div key={supplier.id} className="p-4 rounded-lg bg-dashboard-card border border-dashboard-border hover:shadow-md transition-shadow">
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
                        <MapPin className="h-4 w-4" />
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
      </div>
    </div>
  );
}