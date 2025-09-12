import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, User, Building2, DollarSign, TrendingUp, Package } from "lucide-react";

export default function CrossSaleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - would come from API in real app
  const opportunity = {
    id: parseInt(id || "1"),
    clientName: "Tech Innovations Pvt Ltd",
    salesperson: "Neha Singh",
    totalPurchase: "₹15.2 Cr",
    ourCategories: ["Electronics", "Cables"],
    otherCategories: ["Semiconductors", "Processors"],
    potentialAmount: "₹8.5 Cr",
    priority: "High",
    competitorPrice: "₹42,000/unit",
    ourPrice: "₹38,500/unit",
    clientEmail: "procurement@techinnovations.com",
    clientPhone: "+91 99887 65432",
    lastOrderDate: "2024-01-08",
    conversionProbability: "78%",
    detailedOpportunities: [
      {
        category: "Semiconductors",
        currentSupplier: "Silicon Valley Corp",
        monthlyVolume: "₹3.2 Cr",
        ourPrice: "₹38,500/unit",
        competitorPrice: "₹42,000/unit",
        savings: "₹280K/month"
      },
      {
        category: "Processors",
        currentSupplier: "Chip Masters Ltd",
        monthlyVolume: "₹2.8 Cr", 
        ourPrice: "₹52,000/unit",
        competitorPrice: "₹55,000/unit",
        savings: "₹168K/month"
      }
    ]
  };

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
              <h1 className="text-3xl font-bold text-foreground">Cross-Sale Opportunity</h1>
              <p className="text-muted-foreground">Detailed analysis for {opportunity.clientName}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Opportunity Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-opportunity-high" />
                  Opportunity Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{opportunity.clientName}</h3>
                  <Badge className={getPriorityBadgeColor(opportunity.priority)}>
                    {opportunity.priority} Priority
                  </Badge>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Salesperson: <span className="font-medium text-foreground">{opportunity.salesperson}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Total Purchase: <span className="font-medium text-foreground">{opportunity.totalPurchase}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Conversion Probability: <span className="font-medium text-opportunity-high">{opportunity.conversionProbability}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>Last Order: <span className="font-medium text-foreground">{opportunity.lastOrderDate}</span></span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-dashboard-border">
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Current Purchase from Others</p>
                    <p className="text-2xl font-bold text-muted-foreground">₹6.7 Cr</p>
                  </div>
                  <div className="p-4 rounded-lg bg-dashboard-bg/50">
                    <p className="text-sm text-muted-foreground">Cross-Sale Potential</p>
                    <p className="text-2xl font-bold text-opportunity-high">{opportunity.potentialAmount}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-dashboard-border">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Categories we sell to them:</p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.ourCategories.map((category) => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Categories they buy from others:</p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.otherCategories.map((category) => (
                        <Badge key={category} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Opportunities */}
            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Specific Cross-Sale Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunity.detailedOpportunities.map((opp, index) => (
                    <div key={index} className="p-4 rounded-lg bg-dashboard-bg/50 border border-dashboard-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{opp.category}</h4>
                        <Badge className="bg-opportunity-high text-white">{opp.savings} savings</Badge>
                      </div>
                      <div className="grid gap-2 md:grid-cols-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Current Supplier: <span className="font-medium text-foreground">{opp.currentSupplier}</span></p>
                          <p className="text-muted-foreground">Monthly Volume: <span className="font-medium text-foreground">{opp.monthlyVolume}</span></p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Our Price: <span className="font-medium text-opportunity-high">{opp.ourPrice}</span></p>
                          <p className="text-muted-foreground">Their Price: <span className="font-medium text-foreground">{opp.competitorPrice}</span></p>
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
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{opportunity.clientEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{opportunity.clientPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Probability</p>
                  <p className="font-medium text-opportunity-high">{opportunity.conversionProbability}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Competitive Advantage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Price Advantage</p>
                  <p className="font-medium text-opportunity-high">8.3% lower than competitors</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Existing Relationship</p>
                  <p className="font-medium text-foreground">Strong (2+ years)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Potential Monthly Savings</p>
                  <p className="font-medium text-opportunity-high">₹448K</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-dashboard-border shadow-card">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  Prepare Proposal
                </Button>
                <Button className="w-full" variant="outline">
                  Schedule Presentation
                </Button>
                <Button className="w-full" variant="outline">
                  Send Samples
                </Button>
                <Button className="w-full" variant="outline">
                  Contact Client
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}