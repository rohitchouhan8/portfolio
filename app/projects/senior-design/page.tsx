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

const content = `## Introduction
Senior design is the hallmark class of any engineering student. Students are put into teams to solve a real-world problem, applying all of their newly learned skills. In this class, the entire 40-student class was put onto the same team and acted as a software engineering consulting company, helping our clients at Schlumberger solve a problem. 
## Problem 
Schlumberger identified that international employees had a more difficult time integrating into the company’s community. They hypothesized that a similar issue faced international Rice students. Therefore, they wanted us to build a social platform so that international Rice students would feel more integrated into the community, which can then be similarly applied to Schlumberger employees in the future. 
## Solution 
After numerous customer interviews and market research, we came up with a question-answer platform specifically designed for the international student community. You can see a preview of the website in the image below.
My Contributions 
Once we entered the development stage, we generally broke into three main teams (each with about 10 people):
Frontend (React, Typescript, Redux)
Server and API (C#, Azure) 
Backend (SQL, C#)

I was put on the frontend team. The goals of the frontend team were to build:
- Functional application by working with API
- Intuitive interface
- Engaging user-centric experience

More specifically, I was the **team lead for the frontend team**. While my conceptions of what this role entailed evolved over the course of the semester, my primary responsibilities were to:
- Guide the overall vision of the web application
- Setup and maintain the frontend repo 
- Assign roles and tasks to team members 
- On board new or unfamiliar members to the team
- Contribute to the code base 
- Interface with the other team leads as well as the overall product managers to coordinate our efforts 



## My Reflections 
Overall, this semester was a lot more challenging than I had anticipated. While there were plenty of technical challenges, I believe the more important lessons were those relating to working within a large team and handling the soft challenges. I will enumerate a few of the challenges and lessons I have learned. 
- **Ambiguous tasks lead to confusion and lack of productivity** - Since a lot of my work had to deal with assigning people tasks, I had to be extremely clear about the scope of each person’s work. Otherwise, a member would solve the wrong problem. Sometimes, multiple people thought the same problem was their responsibility, leading to the same problem being solved twice. 
- **Your goals will contradict the goals of others on the team** -  At every level of the project, each member has slightly different goals in mind. Vertically, the overall product managers want to make sure the entire project is running smoothly, while the individual developers are focused on the details of specific features. Horizontally, the backend team is worried about an entirely different set of problems in comparison to the frontend. Managing these conflicts is extremely important. 
- **Dependencies kill productivity** - More often than not, the frontend felt highly dependent on the execution of the API team. As a result, the frontend was extremely unproductive at times. 
- **Divisions of responsibility greatly affect communication** - When we decided to divide the teams based on the technology stack (frontend, server, backend), it seemed like the most logical way to divide up the work. While communication amongst the individual teams was great, communication across teams was lacking.  This was highlighted by the fact that all of the problems we were solving required coordination among all of the teams. Therefore, we had to rearrange the teams to be based on features (e.g. post-management), which consisted of team members across the stack.

## Conclusion
Overall, the project was difficult, but I am thankful for the semester. This class provided the most real-world experience than any other class at Rice University. Heading into my first full-time job, I will take these lessons and hope to build on them.
`;
