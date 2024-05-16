import { H1 } from '@/components/Typography';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ReactMarkdown } from '@/components/ReactMarkdown';
import { pulseFitnessAI } from '@/models/projects/pulse-fitness';
import Image from 'next/image';
import gif from '../../../public/builder-demo.gif';
import { list } from '@vercel/blob';
import { Suspense } from 'react';

export default function PageDetail() {
  return (
    <>
      <ScrollProgress />
      <H1>{pulseFitnessAI.name}.</H1>
      <Suspense fallback={<Image src={gif} alt="Pulse Fitness AI" />}>
        <VideoComponent fileName="Pulse Fitness AI Demo-wlHBRO8aFHnKVWwpc86v52d0SvrUiY" />
      </Suspense>
      <ReactMarkdown content={content} />
    </>
  );
}

const content = `
`;

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video autoPlay muted loop aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
