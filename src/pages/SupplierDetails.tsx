import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UserPlus, Building2, Package, DollarSign, MapPin, Star, TrendingUp } from "lucide-react";

export default function SupplierDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - would come from API in real app
  const supplier = {
    id: parseInt(id || "1"),
    supplierName: "Premium Steel Corp",
    totalVolume: "₹45.2 Cr",
    categories: ["Steel Products", "Metal Alloys", "Industrial Materials"],
    averagePrice: "₹35,000/unit",
    ourPrice: "₹38,500/unit",
    potentialSavings: "₹8.5 Cr",
    rating: "Excellent",
    location: "Mumbai, Maharashtra",
    contactEmail: "business@premiumsteel.com",
    contactPhone: "+91 98765 12345",
    establishedYear: "2015",
    certifications: ["ISO 9001", "ISO 14001", "BIS"],
    paymentTerms: "Net 30 days",
    deliveryTime: "5-7 days",
    minimumOrder: "₹50,000",
    categoryBreakdown: [
      {
        category: "Steel Products",
        monthlyVolume: "₹25.2 Cr",
        ourPrice: "₹38,500/unit",
        theirPrice: "₹35,000/unit",
        savingsPercentage: "9.1%"
      },
      {
        category: "Metal Alloys", 
        monthlyVolume: "₹12.8 Cr",
        ourPrice: "₹42,000/unit",
        theirPrice: "₹38,500/unit",
        savingsPercentage: "8.3%"
      },
      {
        category: "Industrial Materials",
        monthlyVolume: "₹7.2 Cr",
        ourPrice: "₹28,000/unit",
        theirPrice: "₹25,500/unit",
        savingsPercentage: "8.9%"
      }
    ]
  };

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
    <div className="min-h-screen bg-dashboard-bg p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/")}
              className="back-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Supplier Evaluation</h1>
              <p className="text-muted-foreground">Detailed analysis for {supplier.supplierName}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Supplier Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-opportunity-high" />
                  Supplier Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{supplier.supplierName}</h3>
                  <Badge className={getRatingBadgeColor(supplier.rating)}>
                    {supplier.rating} Rating
                  </Badge>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>Location: <span className="font-medium text-foreground">{supplier.location}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Total Volume: <span className="font-medium text-foreground">{supplier.totalVolume}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>Established: <span className="font-medium text-foreground">{supplier.establishedYear}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>Min Order: <span className="font-medium text-foreground">{supplier.minimumOrder}</span></span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-dashboard-border">
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Potential Annual Savings</p>
                    <p className="text-2xl font-bold text-opportunity-high">{supplier.potentialSavings}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Average Price Advantage</p>
                    <p className="text-2xl font-bold text-opportunity-high">8.8%</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-dashboard-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Product Categories:</p>
                  <div className="flex flex-wrap gap-2">
                    {supplier.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-dashboard-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {supplier.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="text-opportunity-high border-opportunity-high">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Category-wise Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supplier.categoryBreakdown.map((category, index) => (
                    <div key={index} className="p-4 rounded-lg bg-dashboard-bg/50 border border-dashboard-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{category.category}</h4>
                        <Badge className="bg-opportunity-high text-white">{category.savingsPercentage} savings</Badge>
                      </div>
                      <div className="grid gap-2 md:grid-cols-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Monthly Volume</p>
                          <p className="font-medium text-foreground">{category.monthlyVolume}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Their Price</p>
                          <p className="font-medium text-opportunity-high">{category.theirPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Our Current Price</p>
                          <p className="font-medium text-foreground">{category.ourPrice}</p>
                        </div>
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
                  <p className="text-sm text-muted-foreground">Business Email</p>
                  <p className="font-medium text-foreground">{supplier.contactEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{supplier.contactPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payment Terms</p>
                  <p className="font-medium text-foreground">{supplier.paymentTerms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Time</p>
                  <p className="font-medium text-foreground">{supplier.deliveryTime}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Onboarding Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-opportunity-high" />
                  <div>
                    <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    <p className="font-medium text-opportunity-high">8.8% average savings</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-opportunity-high" />
                  <div>
                    <p className="text-sm text-muted-foreground">Product Quality</p>
                    <p className="font-medium text-foreground">Premium grade materials</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-opportunity-high" />
                  <div>
                    <p className="text-sm text-muted-foreground">Geographic Advantage</p>
                    <p className="font-medium text-foreground">Strategic location</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Onboarding Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  Initiate Onboarding Process
                </Button>
                <Button className="w-full" variant="outline">
                  Request Product Samples
                </Button>
                <Button className="w-full" variant="outline">
                  Schedule Site Visit
                </Button>
                <Button className="w-full" variant="outline">
                  Get Quotation
                </Button>
                <Button className="w-full" variant="outline">
                  Contact Supplier
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}