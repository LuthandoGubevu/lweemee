import type React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Twitter, Newspaper, Reddit, Youtube, MessageSquare, Globe, ThumbsUp, Meh, ThumbsDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

export interface Mention {
  id: string;
  platform: 'Twitter' | 'News24' | 'IOL' | 'Reddit' | 'YouTube' | 'Forum' | 'Blog';
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string; // ISO string
  sentiment: 'positive' | 'neutral' | 'negative';
  language: string;
  link: string;
  sourceName?: string; // e.g. "MyBroadband Forum"
}

interface MentionCardProps {
  mention: Mention;
}

const PlatformIcon: React.FC<{ platform: Mention['platform'] }> = ({ platform }) => {
  const iconProps = { className: "h-5 w-5 text-muted-foreground" };
  switch (platform) {
    case 'Twitter': return <Twitter {...iconProps} />;
    case 'News24':
    case 'IOL': return <Newspaper {...iconProps} />;
    case 'Reddit': return <Reddit {...iconProps} />;
    case 'YouTube': return <Youtube {...iconProps} />;
    case 'Forum': return <MessageSquare {...iconProps} />;
    case 'Blog': return <Globe {...iconProps} />;
    default: return <Globe {...iconProps} />;
  }
};

const SentimentIndicator: React.FC<{ sentiment: Mention['sentiment'] }> = ({ sentiment }) => {
  switch (sentiment) {
    case 'positive': return <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white"><ThumbsUp className="h-3 w-3 mr-1" /> Positive</Badge>;
    case 'neutral': return <Badge variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-black"><Meh className="h-3 w-3 mr-1" /> Neutral</Badge>;
    case 'negative': return <Badge variant="destructive"><ThumbsDown className="h-3 w-3 mr-1" /> Negative</Badge>;
    default: return <Badge variant="outline">Unknown</Badge>;
  }
};

const MentionCard: React.FC<MentionCardProps> = ({ mention }) => {
  const timeAgo = formatDistanceToNow(new Date(mention.timestamp), { addSuffix: true });

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src={mention.authorAvatar || `https://placehold.co/100x100.png?text=${mention.author.substring(0,2)}`} alt={mention.author} data-ai-hint="person avatar"/>
          <AvatarFallback>{mention.author.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold font-headline leading-tight">{mention.author}</CardTitle>
            <a href={mention.link} target="_blank" rel="noopener noreferrer" aria-label={`View on ${mention.platform}`}>
              <PlatformIcon platform={mention.platform} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            {mention.sourceName || mention.platform} &bull; {timeAgo}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm">
        <p className="leading-relaxed">{mention.content}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center text-xs">
        <SentimentIndicator sentiment={mention.sentiment} />
        <Badge variant="outline" className="font-mono">{mention.language}</Badge>
      </CardFooter>
    </Card>
  );
};

export default MentionCard;
