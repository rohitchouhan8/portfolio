import { ReactMarkdown } from '@/components/ReactMarkdown';
import { H1 } from '@/components/Typography';
import { evolutionOfLLMDevelopment } from '@/models/writing/evolution-of-llm-development';

export default function EvolutionOfLLMDevelopmentPage() {
  return (
    <>
      <H1>{evolutionOfLLMDevelopment.title}.</H1>
      <ReactMarkdown content={evolutionOfLLMDevelopment.content.content} />
    </>
  );
}
