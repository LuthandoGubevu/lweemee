'use client';
import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockKeywords = [
  { text: 'Loadshedding', value: 64, color: 'bg-primary/80 text-primary-foreground' },
  { text: 'EFF', value: 40, color: 'bg-accent/70 text-accent-foreground' },
  { text: 'Springboks', value: 80, color: 'bg-green-500 text-white' },
  { text: 'Johannesburg', value: 30, color: 'bg-secondary text-secondary-foreground' },
  { text: 'Politics', value: 55, color: 'bg-yellow-500 text-black' },
  { text: 'Cape Town', value: 70, color: 'bg-blue-500 text-white' },
  { text: 'COVID-19', value: 20, color: 'bg-red-500 text-white' },
  { text: 'Economy', value: 45, color: 'bg-purple-500 text-white' },
  { text: 'Eskom', value: 75, color: 'bg-primary text-primary-foreground' },
];

// Function to scale font size based on value
const getKeywordStyle = (value: number, maxValue: number) => {
  const minFontSize = 0.8; // rem
  const maxFontSize = 2; // rem
  const scale = (value / maxValue) * (maxFontSize - minFontSize) + minFontSize;
  const opacity = (value / maxValue) * 0.6 + 0.4; // Opacity from 0.4 to 1.0
  return { fontSize: `${scale}rem`, opacity };
};

const KeywordCloud: React.FC = () => {
  const maxValue = Math.max(...mockKeywords.map(k => k.value));

  return (
    <Card className="shadow-lg col-span-1">
      <CardHeader>
        <CardTitle className="font-headline">Top Keywords</CardTitle>
        <CardDescription>Most frequently mentioned terms.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 items-center justify-center p-6 min-h-[300px]">
        {mockKeywords.sort((a,b) => b.value - a.value).map((keyword) => (
          <Badge
            key={keyword.text}
            className={`px-3 py-1.5 transition-all duration-300 ease-in-out hover:scale-110 ${keyword.color}`}
            style={getKeywordStyle(keyword.value, maxValue)}
            variant="default"
          >
            {keyword.text}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default KeywordCloud;
