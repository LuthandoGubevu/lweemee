
'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, CalendarDays, Languages, TrendingDown, TrendingUp, Meh } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';


const FilterControls: React.FC = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  return (
    <Card className="mb-6 shadow-md">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 items-end">
          <div className="lg:col-span-2">
            <Label htmlFor="search-mentions" className="text-sm font-medium">Search Mentions</Label>
            <div className="relative mt-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="search-mentions" placeholder="Search by keyword, author..." className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="language-filter" className="text-sm font-medium">Language</Label>
            <Select>
              <SelectTrigger id="language-filter" className="mt-1">
                <Languages className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="af">Afrikaans</SelectItem>
                <SelectItem value="zu">Zulu</SelectItem>
                <SelectItem value="xh">Xhosa</SelectItem>
                <SelectItem value="st">Sesotho</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
             <Label htmlFor="date-range-filter" className="text-sm font-medium">Date Range</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date-range-filter"
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal mt-1"
                >
                  <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="sentiment-filter" className="text-sm font-medium">Sentiment</Label>
            <Select>
              <SelectTrigger id="sentiment-filter" className="mt-1">
                 {/* Placeholder for dynamic icon based on selection */}
                <SelectValue placeholder="Any Sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Sentiment</SelectItem>
                <SelectItem value="positive">
                  <div className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-green-500" /> Positive</div>
                </SelectItem>
                <SelectItem value="neutral">
                  <div className="flex items-center"><Meh className="h-4 w-4 mr-2 text-yellow-500" /> Neutral</div>
                </SelectItem>
                <SelectItem value="negative">
                  <div className="flex items-center"><TrendingDown className="h-4 w-4 mr-2 text-red-500" /> Negative</div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterControls;
