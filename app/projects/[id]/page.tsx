import { Project, ProjectSkeleton } from '../types';
import { use } from 'react';
import { H1 } from '@/components/Typography';
import renderRichText from '@/components/RichText';
import client from '@/utils/contentfulClient';
import { ScrollProgress } from '@/components/ScrollProgress';

type Props = {
  params: Project;
};

export default function PageDetail({ params }: Props) {
  const entry = use(client.getEntry<ProjectSkeleton>(params.id));
  const { name, content } = entry.fields;

  return (
    <>
      <ScrollProgress />
      <H1>{name}.</H1>
      {renderRichText(content)}
    </>
  );
}
