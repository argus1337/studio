import { suggestRelatedItems } from "@/ai/flows/suggest-related-items";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2 } from "lucide-react";

type AISuggestionsProps = {
  itemDescription: string;
};

export default async function AISuggestions({ itemDescription }: AISuggestionsProps) {
  const suggestions = await suggestRelatedItems({ itemDescription });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-primary" />
          <span>Style Suggestions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-primary">▸</span>
              {suggestion}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
