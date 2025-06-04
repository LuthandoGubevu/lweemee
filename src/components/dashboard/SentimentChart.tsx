'use client';

import type React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const mockSentimentData = [
  { name: 'Jan', sentiment: 0.2, positive: 40, negative: 10, neutral: 50 },
  { name: 'Feb', sentiment: 0.5, positive: 60, negative: 5, neutral: 35 },
  { name: 'Mar', sentiment: -0.1, positive: 30, negative: 35, neutral: 35 },
  { name: 'Apr', sentiment: 0.8, positive: 70, negative: 10, neutral: 20 },
  { name: 'May', sentiment: 0.3, positive: 50, negative: 20, neutral: 30 },
  { name: 'Jun', sentiment: 0.6, positive: 65, negative: 15, neutral: 20 },
];

const SentimentChart: React.FC = () => {
  return (
    <Card className="shadow-lg col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="font-headline">Sentiment Over Time</CardTitle>
        <CardDescription>Track overall sentiment trends for your brand.</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] w-full p-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockSentimentData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[-1, 1]} tickFormatter={(value) => value.toFixed(1)} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="sentiment" name="Overall Sentiment" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 6 }} dot={{ fill: 'hsl(var(--primary))', r:3 }}/>
            <Line type="monotone" dataKey="positive" name="Positive %" stroke="hsl(var(--chart-2))" strokeDasharray="5 5" strokeWidth={1.5} dot={{r:2}}/>
            <Line type="monotone" dataKey="negative" name="Negative %" stroke="hsl(var(--destructive))" strokeDasharray="5 5" strokeWidth={1.5} dot={{r:2}}/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SentimentChart;
