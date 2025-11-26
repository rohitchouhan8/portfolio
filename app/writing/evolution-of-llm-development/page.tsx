import { ReactMarkdown } from '@/components/ReactMarkdown';
import { H1, ListMonoSubtitle } from '@/components/Typography';
import { evolutionOfLLMDevelopment } from '@/models/writing/evolution-of-llm-development';
import { formatDate } from '@/utils/date';

export default function EvolutionOfLLMDevelopmentPage() {
  return (
    <>
      <H1>{evolutionOfLLMDevelopment.title}</H1>
      <ListMonoSubtitle>
        {formatDate(evolutionOfLLMDevelopment.publishDate, 'MMMM D, YYYY')}
      </ListMonoSubtitle>
      <ReactMarkdown content={evolutionOfLLMDevelopment.content.content} />
    </>
  );
}
