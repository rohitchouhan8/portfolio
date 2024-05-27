import { H1 } from '@/components/Typography';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ReactMarkdown } from '@/components/ReactMarkdown';
import { riceUniversity } from '@/models/projects/rice-university';

export default function PageDetail() {
  return (
    <>
      <ScrollProgress />
      <H1>{riceUniversity.name}.</H1>
      <ReactMarkdown content={content} />
    </>
  );
}

const content = `
![Pulse Fitness AI](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTk2dHM5N2JsdDRzdGpjajA2Z21yODk3ZXluMGxlZzhqdWticXJ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Uzu1OBXq6sB4gxoRe/giphy.gif)
`;
