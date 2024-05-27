import { H1 } from '@/components/Typography';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ReactMarkdown } from '@/components/ReactMarkdown';
import { pulseFitnessAI } from '@/models/projects/pulse-fitness';
import Image from 'next/image';
import gif from '../../../public/builder-demo.gif';
import { list } from '@vercel/blob';
import { Suspense } from 'react';
import { Callout } from '@/components/Callout';

export default function PageDetail() {
  return (
    <>
      <ScrollProgress />
      <H1>{pulseFitnessAI.name}.</H1>
      <Callout variant={'warning'}>This project is no longer live.</Callout>
      <Suspense fallback={<Image src={gif} alt="Pulse Fitness AI" />}>
        <VideoComponent fileName="Pulse Fitness AI Demo-wlHBRO8aFHnKVWwpc86v52d0SvrUiY" />
      </Suspense>
      <ReactMarkdown content={content} />
    </>
  );
}

const content = `
Pulse Fitness AI is a web app that leverages LLMs to generate personalized workout plans.

## Motivation 
I found existing workout apps to be too generic and not tailored to my fitness goals. Any time I would create a workout plan, I would have to manually adjust the exercises and sets to fit my needs. It negatively impacted my workout experience. 

I found myself frequently using ChatGPT to generate workout plans, which led me to creating Pulse Fitness AI. 

In addition, it was a great opportunity to learn about LLMs and explore various UI formats to interact with AI. 

## Features
- **Personalized Workout Plans**: Users can generate workout plans tailored to their fitness goals.
- **Workout Directory**: Users can view and save generated workout plans.
- **Adjustable Workout Plans**: Users can adjust the generated workout plans to fit their needs.

## Tech stack
- **Frontend**: NextJS, React, Tailwind CSS, Shadcn UI
- **Backend / Auth**: Supabase 
- **AI**: GPT-3.5 (OpenAI)
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
