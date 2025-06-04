import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import FilterControls from "@/components/dashboard/FilterControls";
import { SearchCheck } from "lucide-react";

export default function AdvancedSearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline text-foreground">Advanced Search</h1>
        <p className="text-muted-foreground">Dive deep into your data with powerful search capabilities.</p>
      </div>
      <FilterControls />
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Search Results</CardTitle>
          <CardDescription>
            Refine your search using the filters above. Results will be displayed here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <SearchCheck className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-headline">No Results Yet</h3>
          <p className="text-muted-foreground max-w-md">
            Use the filters above to start your search. You&apos;ll be able to explore mentions by keywords, date ranges, languages, sentiment, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
