'use server';

/**
 * @fileOverview Suggest related items based on a Depop listing.
 *
 * - suggestRelatedItems - A function that suggests related items.
 * - SuggestRelatedItemsInput - The input type for the suggestRelatedItems function.
 * - SuggestRelatedItemsOutput - The return type for the suggestRelatedItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedItemsInputSchema = z.object({
  itemDescription: z.string().describe('The description of the Depop item.'),
});
export type SuggestRelatedItemsInput = z.infer<typeof SuggestRelatedItemsInputSchema>;

const SuggestRelatedItemsOutputSchema = z.array(z.string()).describe('An array of suggested related items.');
export type SuggestRelatedItemsOutput = z.infer<typeof SuggestRelatedItemsOutputSchema>;

export async function suggestRelatedItems(input: SuggestRelatedItemsInput): Promise<SuggestRelatedItemsOutput> {
  return suggestRelatedItemsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedItemsPrompt',
  input: {schema: SuggestRelatedItemsInputSchema},
  output: {schema: SuggestRelatedItemsOutputSchema},
  prompt: `Given the following description of a Depop item, suggest 5 related items:

{{{itemDescription}}}`,
});

const suggestRelatedItemsFlow = ai.defineFlow(
  {
    name: 'suggestRelatedItemsFlow',
    inputSchema: SuggestRelatedItemsInputSchema,
    outputSchema: SuggestRelatedItemsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
