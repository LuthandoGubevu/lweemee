import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, BarChartHorizontalBig, Activity } from "lucide-react";
import SentimentChart from '@/components/dashboard/SentimentChart';
import KeywordCloud from '@/components/dashboard/KeywordCloud';

export default function TrendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline text-foreground">Trends Analysis</h1>
        <p className="text-muted-foreground">Explore evolving topics and sentiment patterns.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><TrendingUp className="text-primary"/> Topic Velocity</CardTitle>
            <CardDescription>Identify rapidly growing or declining topics.</CardDescription>
          </CardHeader>
          <CardContent className="min-h-[200px] flex items-center justify-center">
            <p className="text-muted-foreground">Topic velocity chart coming soon.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><BarChartHorizontalBig className="text-primary"/> Sentiment Distribution</CardTitle>
            <CardDescription>View sentiment breakdown across different topics or platforms.</CardDescription>
          </CardHeader>
          <CardContent className="min-h-[200px] flex items-center justify-center">
             <p className="text-muted-foreground">Sentiment distribution chart coming soon.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Activity className="text-primary"/> AI-Powered Insights</CardTitle>
          <CardDescription>Leverage GenAI to summarize trends and suggest content.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[200px] text-center">
          <p className="text-muted-foreground mb-4">
            This section will integrate AI-driven summaries of trending topics, sentiment shifts, and content suggestions based on the `summarizeTrends` and `suggestContentIdeas` GenAI flows.
          </p>
          <p className="text-sm text-foreground p-4 bg-secondary rounded-md">
            <strong>Example AI Summary (Placeholder):</strong> "Over the past week, conversations around 'sustainable energy' have increased by 35%, with predominantly positive sentiment. Key themes include solar panel installations and government rebates. Consider creating content highlighting success stories of SMEs adopting solar."
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SentimentChart />
        <KeywordCloud />
      </div>

    </div>
  );
}
