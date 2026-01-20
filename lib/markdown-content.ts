import { projects } from '@/models/projects/data';
import { writing } from '@/models/writing/data';
import { readings } from '@/models/reading/data';

const SITE_URL = 'https://rohitchouhan.com';
const SITE_NAME = 'Rohit Chouhan';

// Home page content
const homeContent = `# ${SITE_NAME}

Hey there! I'm **Rohit**, a software engineer at Figma, currently leading the team behind **Figma Make**, our app builder that now serves hundreds of thousands of creators. I obsess over creating the best AI agent, currently reimagining how the whole agent architecture should run.

When I'm not deep in code, you'll find me on a completely different creative journey—learning to become a **digital artist**. There's something magical about switching from building software interfaces to crafting visual worlds. My dream? To create an entire universe through art, complete with its own stories and characters.

Life outside the screen is just as important to me. I'm that person who gets genuinely excited about a perfect **tennis serve**, spends weekends experimenting with **homemade ice cream** flavors (lavender honey is my latest obsession), and loses track of time in epic **gaming sessions**.

While I'm happily settled at Figma, I'm always up for interesting conversations about technology, creativity, or that perfect ice cream recipe. Let's connect!

## Navigation

- [Projects](${SITE_URL}/projects)
- [Writing](${SITE_URL}/writing)
- [Reading](${SITE_URL}/reading)
- [Stack](${SITE_URL}/stack)
`;

// Projects list page
function generateProjectsListContent(): string {
  const projectList = Object.values(projects)
    .sort((a, b) => {
      if (!a.endDate) return -1;
      if (!b.endDate) return 1;
      return b.endDate.diff(a.endDate);
    })
    .map((p) => {
      const endDate = p.endDate ? p.endDate.format('MMM YYYY') : 'Present';
      return `- [${p.name}](${SITE_URL}/projects/${p.id}) - ${p.startDate.format('MMM YYYY')} to ${endDate}`;
    })
    .join('\n');

  return `# Projects

${projectList}
`;
}

// Individual project content
const projectContent: Record<string, string> = {
  figma: `# Figma

## Introduction
Figma is my first job out of college and I couldn't be happier. The people and the company culture is just awesome. Plus we are building some really cool stuff.
I work on the Extensibility team in the Creation Engine pillar. **We are responsible for building and maintaining the plugin, widget, and REST APIs**. Basically, if a third party developer wants to integrate into Figma, they go through one of our platforms.

Why is this team great? Since we are the API surface connecting the outside world to Figma's internal awesomeness, we touch a little bit of everything. The Figma Community really validates our work by creating incredible plugins and integrations, **even building entire businesses on our APIs**! Even organizations benefit from our platform because it serves as a way to **integrate their custom workflow into Figma's ecosystem seamlessly**.

I'll try to keep this list up to date, but here are some of the most notable projects I've worked on.

## Dev Mode
> [Dev Mode](https://www.figma.com/dev-mode/) is a new space in Figma for developers with features that help you translate designs into code, faster.

I was responsible for building the Extensibility platform for Dev Mode. By building this platform, you can:
Build code generation plugins for any language you want
Connect and sync developer resources linking to relevant design documentation
View and connect Jira issues and GitHub PRs to designs for handoff, brought to you by Jira and Github plugins.

This product is in an open beta, so we are continuing to build and improve this platform.

## Widgets
Widgets are custom interactive objects that run in Figma files.
Developers create the widget UI and business logic using a custom React-like API. For example, here is an example of a simple Counter widget.

![Counter Widget](https://static.figma.com/uploads/a1de4b17f2223c038bce3d888fc4dbc9a65fe66c)

What's awesome is that these are multiplayer-compatible out of the box. The Widget API handles all of the complexities for the developer.

## My contributions
I worked on this project for the greater part of a year, getting the project to launch. Specifically, I built the [<Input/> component](https://www.figma.com/widget-docs/api/component-Input/), an editable text field widget component. I also build Widget undo and redo logic, which was a bit trickier than Figma's standard undo and redo logic.`,

  facebook: `# Facebook

## Introduction
I was lucky enough to be accepted into a software engineering internship with Facebook. I was placed on the Delivery Intelligence team on the Ads Platform. This team is under the Ads Delivery & Signals org. Ads Delivery is the core system that powers the whole Facebook Ads platform. They offer advertisers a lot of control: bid, budget, targeting etc, but advertisers often do not understand how these levers would affect their performance. Advertisers run into various underlying problems as a result of suboptimal decisions that hurt their performance. This team focuses on improving the recommendation in all major ads lifecycle stages (pre-flight, mid-flight etc) to help advertisers make better decisions.

My work took me across the entire web stack. For frontend, I worked in Javascript/React. I used PHP/Hack for server-side code. I used C++ for backend code. Finally, I used SQL and Python for data analysis. It was a lot to learn in just 12 weeks, but I loved every minute of it and became a much better programmer as a result.

## Milestone 1 - Ad Set Learning Stage Status Log
An Ad Set (a group of ads) goes through multiple stages as the Facebook algorithms try to learn and optimize how to best deliver the ads. Unfortunately, advertisers were never notified to the changes in these statuses. When advertisers run hundreds and sometimes thousands of Ad Sets, it becomes extremely difficult to determine if an Ad Set status has changed. I was responsible for setting up this notification system by logging the changes in this status. I worked with designers and content strategists in a cross-functional effort in order to ship this product.

## Milestone 2 - Delivery Lever Recommendation Stability
Advertisers get control of several delivery levers such as bid, budget, and cost. One feature on Ads Manager is to tell advertisers when these levers are potentially missing opportunities to maximize an Ad Set's potential. For example, maybe an advertiser had set their budget too low, so they are not getting enough Ads out. Unfortunately, the recommendation fluctuated a lot, causing a confusing experience for the advertisers. My work was to improve the stability of the recommendation. I worked primarily on the backend to accomplish this. Once I had made the changes, I was able to verify the results using Python and SQL, where I found that I had improved the stability by over 20%!

## Milestone 3 - Internal Eligibility Checker Tool
There were three metrics my team provided advertisers to determine how well their Ad Sets compare to other advertisers in terms of quality, conversions, and creativity. Not all Ad Sets were eligible for these metrics, but advertisers didn't know why that was the case. Originally, the operations team would contact my team to determine the reason, which would then be reported back to the advertisers. This process was manual and tedious. I was able to automate this process by creating an internal tool, so the operations team could check for an advertiser themselves, streamlining the customer service process.

## Working Remotely
When I received word that I would have an opportunity to join Facebook this summer, I was inevitably excited to live in the Bay, go to the world-renowned Facebook campus in Menlo Park, and even see Mark Zuckerberg in person during his weekly Q&A's. Unfortunately, the pandemic of COVID-19 changed those plans. Facebook was incredibly resilient and was able to continue with a virtual internship. Their infrastructure and help were incredibly valuable. In the end, I learned a lot about software engineering at Facebook, which is the primary goal after all.`,

  'jp-morgan-chase-and-co': `# JP Morgan Chase & Co

I interned on a team that supported the market risk data for the Corporate Investment Bank at JPMorgan Chase & Co. Given they were managing large amounts of data, they needed a way to ensure that future code changes would not affect query performance. I built a web application to calculate, summarize, and visualize this data. I wrote the server and back-end code in Python. I used React.js to build the user interface. This was my first exposure to full-stack web development, and I loved it because I was responsible for every aspect of the application. My favorite part of the internship was the gratification of knowing I built a useful application for the team that they will use to validate performance and catch any potential issues that arise in the future.`,

  'rice-university': `# Rice University

![Rice University](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTk2dHM5N2JsdDRzdGpjajA2Z21yODk3ZXluMGxlZzhqdWticXJ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Uzu1OBXq6sB4gxoRe/giphy.gif)`,

  'senior-design': `# Senior Design

## Introduction
Senior design is the hallmark class of any engineering student. Students are put into teams to solve a real-world problem, applying all of their newly learned skills. In this class, the entire 40-student class was put onto the same team and acted as a software engineering consulting company, helping our clients at Schlumberger solve a problem.

## Problem
Schlumberger identified that international employees had a more difficult time integrating into the company's community. They hypothesized that a similar issue faced international Rice students. Therefore, they wanted us to build a social platform so that international Rice students would feel more integrated into the community, which can then be similarly applied to Schlumberger employees in the future.

## Solution
After numerous customer interviews and market research, we came up with a question-answer platform specifically designed for the international student community.

My Contributions: Once we entered the development stage, we generally broke into three main teams (each with about 10 people):
- Frontend (React, Typescript, Redux)
- Server and API (C#, Azure)
- Backend (SQL, C#)

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

- **Ambiguous tasks lead to confusion and lack of productivity** - Since a lot of my work had to deal with assigning people tasks, I had to be extremely clear about the scope of each person's work.
- **Your goals will contradict the goals of others on the team** - At every level of the project, each member has slightly different goals in mind. Managing these conflicts is extremely important.
- **Dependencies kill productivity** - More often than not, the frontend felt highly dependent on the execution of the API team. As a result, the frontend was extremely unproductive at times.
- **Divisions of responsibility greatly affect communication** - When we decided to divide the teams based on the technology stack, communication across teams was lacking. We had to rearrange the teams to be based on features.

## Conclusion
Overall, the project was difficult, but I am thankful for the semester. This class provided the most real-world experience than any other class at Rice University. Heading into my first full-time job, I will take these lessons and hope to build on them.`,

  'pulse-fitness-ai': `# Pulse Fitness AI

> **Note:** This project is no longer live.

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
- **AI**: GPT-3.5 (OpenAI)`,
};

// Writing list page
function generateWritingListContent(): string {
  const writingList = Object.values(writing)
    .map((w) => {
      if (w.content.type === 'external') {
        return `- [${w.title}](${w.content.url}) - ${w.publishDate}`;
      }
      return `- [${w.title}](${SITE_URL}/writing/${w.id}) - ${w.publishDate}`;
    })
    .join('\n');

  return `# Writing

${writingList}
`;
}

// Writing content from models
function getWritingContent(slug: string): string | null {
  const article = writing[slug];
  if (!article) return null;

  if (article.content.type === 'markdown') {
    return `# ${article.title}

*Published: ${article.publishDate}*

${article.content.content}`;
  }

  return `# ${article.title}

This article is hosted externally: [Read on external site](${article.content.url})`;
}

// Reading list page
function generateReadingListContent(): string {
  const readingList = readings
    .map((r) => `### ${r.title}\n*by ${r.author}*\n\n${r.review}`)
    .join('\n\n---\n\n');

  return `# Reading

${readingList}
`;
}

// Stack page
const stackContent = `# Stack

Tools and software I use regularly:

- **[Raycast](https://raycast.com/)** - A faster and more extensible Apple Spotlight
- **[Cursor](https://cursor.com/)** - AI-powered IDE
- **[Graphite](https://graphite.dev/)** - GitHub with better UX
- **[Arc Browser](https://arc.net/)** - A better way to browse the web
- **[Arc Search](https://apps.apple.com/us/app/arc-search/id6472513080)** - AI-powered mobile search
- **[Monarch](https://www.monarchmoney.com/)** - Personal finance tracking and budgeting
`;

// Main function to get markdown content for a path
export function getMarkdownContent(pathname: string): string | null {
  // Normalize pathname
  const path = pathname === '' ? '/' : pathname;

  // Home page
  if (path === '/') {
    return homeContent;
  }

  // Projects list
  if (path === '/projects') {
    return generateProjectsListContent();
  }

  // Individual project
  if (path.startsWith('/projects/')) {
    const projectId = path.replace('/projects/', '');
    return projectContent[projectId] || null;
  }

  // Writing list
  if (path === '/writing') {
    return generateWritingListContent();
  }

  // Individual writing
  if (path.startsWith('/writing/')) {
    const slug = path.replace('/writing/', '');
    return getWritingContent(slug);
  }

  // Reading
  if (path === '/reading') {
    return generateReadingListContent();
  }

  // Stack
  if (path === '/stack') {
    return stackContent;
  }

  return null;
}
