import { Project, ProjectSkeleton } from '../types';
import { use } from 'react';
import { H1 } from '@/components/Typography';
import renderRichText from '@/components/RichText';
import client from '@/utils/contentfulClient';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ReactMarkdown } from '@/components/ReactMarkdown';

type Props = {
  params: Project;
};

const content = `I was an undergraduate teaching assistant (TA) for four semesters. I have been a TA for Algorithmic Thinking, a course covering discrete mathematics, algorithms, and implementation of these concepts in Python. I was a TA for Reasoning About Algorithms, which takes a more in-depth and theoretical approach to algorithms. I was a TA in Advanced Object-Oriented Programming and Design, which is a Java-based course teaching software engineering methodologies. Finally, I was a TA for operating systems. In these positions, I have facilitated lab discussions, taught students during office hours, and graded student work.
## COMP 182 - Algorithmic Thinking
Algorithmic Thinking is one of the most notoriously difficult classes at Rice University because it covers discrete mathematics, algorithms, and implementation of these concepts in Python. I know TA's helped me a lot during this course, so I wanted to pay it forward by helping the next round of students taking the class. Specifically, I made sure to TA the lab sessions in addition to hosting office hours and grading homework because I knew I would have an opportunity to have face-to-face interactions with the students, allowing me to make a larger impact. 
## COMP 382 - Reasoning About Algorithms
Acting as an extension of COMP 182, I also TA'd COMP 382, which covers a more in-depth and theoretical approach to algorithms, to further help students. From my experience helping during lab sessions from the previous semester, I was asked to lead the lab sessions during COMP 382. This entailed preparing weekly problem sets for students to solve. I also then facilitated a student-led discussion about how to go about solving these answers. There were about 150 students in the class, which was extremely daunting. After a few sessions, I became more comfortable presenting in front of such a large audience, and I am forever grateful for the opportunity. 
## COMP 310 - Advanced Object-Oriented Programming
Advanced Object-Oriented Programming and Design is a Java-based course teaching software engineering methodologies. In these positions, I have facilitated lab discussions, taught students during office hours, and graded student work. This course took place during Spring 2020 when the class had to prematurely end due to COVID-19. Despite this, I had heard that several students were disappointed they would not have an opportunity to complete the final project, which entails creating a peer-to-peer game using Google Maps. As a result, I spearheaded the effort to unofficially run a final project for those interested. It culminated in a "Demo Day," where each game was played by the different teams. 
## COMP 421 - Operating Systems
Operating Systems is high-level computer science and electrical engineering course that every student must take to graduate. It is well-known as one of the most difficult classes at Rice University because of how hard some of the projects are. There are three main projects: terminal, kernel, and file systems. As a TA, I primarily hosted office hours to help students with these projects. I also graded the students' work. Since I didn't have much work to do in this senior year semester, I spent a lot of time helping students, sometimes hosting 2-3 hour office hours. When I was a student in this class, the TA's were extremely helpful, so I wanted to pass that same culture down to the next class when I became a TA. 

`;

export default function Figma({ params }: Props) {
  return (
    <>
      <ScrollProgress />
      <H1>Rice University.</H1>
      <ReactMarkdown content={content} />
    </>
  );
}
