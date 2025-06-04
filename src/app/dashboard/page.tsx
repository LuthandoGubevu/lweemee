'use client';
import type React from 'react';
import { Smile, MessageCircle, TrendingUp, Search, Filter, ListFilter, ThumbsUp, Meh, ThumbsDown, Newspaper, Twitter as TwitterIcon, Youtube as YoutubeIcon, MessageSquare as ForumIcon, Globe as BlogIcon } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import KeywordCloud from '@/components/dashboard/KeywordCloud';
import FilterControls from '@/components/dashboard/FilterControls';
import MentionCard, { type Mention } from '@/components/dashboard/MentionCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';

const mockMentions: Mention[] = [
  { id: '1', platform: 'Twitter', author: 'TechGuruZA', content: 'Just tried the new MyMobile plan, amazing speeds in Joburg! #MyMobile #5GSA', timestamp: new Date(Date.now() - 3600000).toISOString(), sentiment: 'positive', language: 'English', link: '#', authorAvatar: 'https://placehold.co/100x100.png?text=TG' , dataAihint: 'person avatar'},
  { id: '2', platform: 'News24', author: 'News24 Official', content: 'Eskom announces stage 4 load shedding effective immediately. More details to follow.', timestamp: new Date(Date.now() - 7200000).toISOString(), sentiment: 'negative', language: 'English', link: '#', sourceName: 'News24 Article', authorAvatar: 'https://placehold.co/100x100.png?text=N2', dataAihint: 'news logo' },
  { id: '3', platform: 'Reddit', author: 'r/SouthAfricaUser', content: 'Anyone else experiencing issues with HomeAffairs online portal? Been trying to apply for a passport for days.', timestamp: new Date(Date.now() - 10800000).toISOString(), sentiment: 'negative', language: 'English', link: '#', sourceName: 'r/SouthAfrica', authorAvatar: 'https://placehold.co/100x100.png?text=RD', dataAihint: 'forum user' },
  { id: '4', platform: 'IOL', author: 'IOL News', content: 'Government launches new initiative to boost tourism in the Eastern Cape.', timestamp: new Date(Date.now() - 14400000).toISOString(), sentiment: 'neutral', language: 'English', link: '#', sourceName: 'IOL News', authorAvatar: 'https://placehold.co/100x100.png?text=IO', dataAihint: 'news logo' },
  { id: '5', platform: 'Blog', author: 'FoodieInPretoria', content: 'Discovered this hidden gem of a restaurant in Hazelwood. The bunny chow is to die for! Highly recommend.', timestamp: new Date(Date.now() - 18000000).toISOString(), sentiment: 'positive', language: 'English', link: '#', sourceName: 'Pretoria Food Blog', authorAvatar: 'https://placehold.co/100x100.png?text=FP', dataAihint: 'person avatar' },
  { id: '6', platform: 'YouTube', author: 'MzansiVlogger', content: 'Check out my latest video exploring the Drakensberg mountains! Link in bio. #SouthAfrica #Travel', timestamp: new Date(Date.now() - 21600000).toISOString(), sentiment: 'positive', language: 'English', link: '#', authorAvatar: 'https://placehold.co/100x100.png?text=MV', dataAihint: 'person avatar' },
];


export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Overall Sentiment" value="Positive" icon={<Smile className="h-6 w-6" />} description="+5% from last week" />
        <StatCard title="Total Mentions" value="1,482" icon={<MessageCircle className="h-6 w-6" />} description="Across all platforms today" />
        <StatCard title="Hot Topics" value="3 New" icon={<TrendingUp className="h-6 w-6" />} description="Loadshedding, Rugby, Elections" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SentimentChart />
        <KeywordCloud />
      </div>
      
      {/* Filters and Mentions Feed */}
      <div>
        <h2 className="text-2xl font-semibold font-headline mb-4 text-foreground">Recent Mentions</h2>
        <FilterControls />
        <ScrollArea className="h-[600px] w-full rounded-md border p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {mockMentions.map((mention) => (
                    <MentionCard key={mention.id} mention={mention} />
                ))}
            </div>
        </ScrollArea>
      </div>
    </div>
  );
}
