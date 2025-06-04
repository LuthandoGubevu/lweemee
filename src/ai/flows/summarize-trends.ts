// Summarize trending topics and sentiment shifts related to a brand.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTrendsInputSchema = z.object({
  brandName: z.string().describe('The name of the brand to analyze.'),
  timePeriod: z.string().describe('The time period for the report (e.g., last week).'),
  data: z.string().describe('A string containing all social media, blogs, forums, and news data related to the brand.'),
});

export type SummarizeTrendsInput = z.infer<typeof SummarizeTrendsInputSchema>;

const SummarizeTrendsOutputSchema = z.object({
  summary: z.string().describe('A summarized report of the top trending topics and sentiment shifts related to the brand.'),
});

export type SummarizeTrendsOutput = z.infer<typeof SummarizeTrendsOutputSchema>;

export async function summarizeTrends(input: SummarizeTrendsInput): Promise<SummarizeTrendsOutput> {
  return summarizeTrendsFlow(input);
}

const summarizeTrendsPrompt = ai.definePrompt({
  name: 'summarizeTrendsPrompt',
  input: {schema: SummarizeTrendsInputSchema},
  output: {schema: SummarizeTrendsOutputSchema},
  prompt: `You are a marketing analyst summarizing trending topics and sentiment for brands.

  Analyze the following data for the brand {{{brandName}}} over the time period {{{timePeriod}}}.

  Data: {{{data}}}

  Provide a concise summary of the top trending topics and any significant sentiment shifts.
  Include key conversations and potential strategic adjustments based on your analysis.
  `,
});

const summarizeTrendsFlow = ai.defineFlow(
  {
    name: 'summarizeTrendsFlow',
    inputSchema: SummarizeTrendsInputSchema,
    outputSchema: SummarizeTrendsOutputSchema,
  },
  async input => {
    const {output} = await summarizeTrendsPrompt(input);
    return output!;
  }
);
