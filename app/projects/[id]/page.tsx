import { H1 } from '@/components/Typography';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Project } from '@/models/projects/types';
import { projects } from '@/models/projects/data';
import { ReactMarkdown } from '@/components/ReactMarkdown';

type Props = {
  params: Project;
};

export default function PageDetail({ params }: Props) {
  const { name, content } = projects[params.id];
  return (
    <>
      <ScrollProgress />
      <H1>{name}.</H1>
      <ReactMarkdown content={content} />
    </>
  );
}
