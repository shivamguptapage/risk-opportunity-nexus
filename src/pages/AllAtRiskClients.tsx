import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowLeft,
  Building2,
  TrendingDown
} from "lucide-react";

export default function AllAtRiskClients() {
  const atRiskClients = [
    {
      id: 1,
      clientName: "ABC Manufacturing Ltd",
      category: "Steel Products",
      lostAmount: "₹2.8 Cr",
      riskScore: 85,
      location: "Mumbai"
    },
    {
      id: 2,
      clientName: "XYZ Industries",
      category: "Electrical Components", 
      lostAmount: "₹1.1 Cr",
      riskScore: 65,
      location: "Delhi"
    },
    {
      id: 3,
      clientName: "Global Tech Solutions",
      category: "Hardware Supplies",
      lostAmount: "₹750K",
      riskScore: 45,
      location: "Bangalore"
    },
    {
      id: 4,
      clientName: "Industrial Corp Ltd",
      category: "Raw Materials",
      lostAmount: "₹3.5 Cr",
      riskScore: 92,
      location: "Chennai"
    },
    {
      id: 5,
      clientName: "Modern Enterprises",
      category: "Machinery Parts",
      lostAmount: "₹920K",
      riskScore: 58,
      location: "Pune"
    },
    {
      id: 6,
      clientName: "Tech Innovations Pvt Ltd",
      category: "Electronic Components",
      lostAmount: "₹1.5 Cr",
      riskScore: 72,
      location: "Hyderabad"
    },
    {
      id: 7,
      clientName: "Supreme Industries",
      category: "Plastic Materials",
      lostAmount: "₹2.1 Cr",
      riskScore: 78,
      location: "Ahmedabad"
    }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-risk-high";
    if (score >= 60) return "text-risk-medium";
    return "text-risk-low";
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
            <h1 className="text-2xl font-bold text-foreground">All At-Risk Clients</h1>
            <p className="text-muted-foreground">Complete ranking of clients by risk level</p>
          </div>
        </div>

        <Card className="bg-gradient-card border-dashboard-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-risk-high" />
              At-Risk Clients Ranking ({atRiskClients.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {atRiskClients
                .sort((a, b) => b.riskScore - a.riskScore)
                .map((client, index) => (
                <div key={client.id} className="flex items-center justify-between p-4 rounded-lg bg-dashboard-card border border-dashboard-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{client.clientName}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {client.category}
                        </div>
                        <span>•</span>
                        <span>{client.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-bold text-risk-high">{client.lostAmount}</p>
                        <p className="text-xs text-muted-foreground">Lost amount</p>
                      </div>
                      <div>
                        <p className={`font-bold ${getRiskColor(client.riskScore)}`}>
                          {client.riskScore}%
                        </p>
                        <p className="text-xs text-muted-foreground">Risk score</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/risk/${client.id}`}>
                          <TrendingDown className="h-4 w-4 mr-2" />
                          Analyze
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