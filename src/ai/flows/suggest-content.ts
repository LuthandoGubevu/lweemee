'use server';

/**
 * @fileOverview Suggests content ideas based on trending topics and sentiment analysis.
 *
 * - suggestContentIdeas - A function that suggests content ideas.
 * - SuggestContentIdeasInput - The input type for the suggestContentIdeas function.
 * - SuggestContentIdeasOutput - The return type for the suggestContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentIdeasInputSchema = z.object({
  trendingTopics: z
    .string()
    .describe('Trending topics on social media in South Africa.'),
  sentimentAnalysis: z
    .string()
    .describe('Sentiment analysis of the trending topics.'),
});
export type SuggestContentIdeasInput = z.infer<
  typeof SuggestContentIdeasInputSchema
>;

const SuggestContentIdeasOutputSchema = z.object({
  contentIdeas: z
    .string()
    .describe('A list of content ideas based on the trending topics and sentiment analysis.'),
});
export type SuggestContentIdeasOutput = z.infer<
  typeof SuggestContentIdeasOutputSchema
>;

export async function suggestContentIdeas(
  input: SuggestContentIdeasInput
): Promise<SuggestContentIdeasOutput> {
  return suggestContentIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentIdeasPrompt',
  input: {schema: SuggestContentIdeasInputSchema},
  output: {schema: SuggestContentIdeasOutputSchema},
  prompt: `You are a social media expert specializing in content creation for the South African market.

  Based on the trending topics and their sentiment, suggest content ideas that would resonate with the target audience.

  Trending Topics: {{{trendingTopics}}}
  Sentiment Analysis: {{{sentimentAnalysis}}}

  Content Ideas:`,
});

const suggestContentIdeasFlow = ai.defineFlow(
  {
    name: 'suggestContentIdeasFlow',
    inputSchema: SuggestContentIdeasInputSchema,
    outputSchema: SuggestContentIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
