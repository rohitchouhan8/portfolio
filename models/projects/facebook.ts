import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

const content = `## Introduction
I was lucky enough to be accepted into a software engineering internship with Facebook. I was placed on the Delivery Intelligence team on the Ads Platform. This team is under the Ads Delivery & Signals org. Ads Delivery is the core system that powers the whole Facebook Ads platform. They offer advertisers a lot of control: bid, budget, targeting etc, but advertisers often do not understand how these levers would affect their performance. Advertisers run into various underlying problems as a result of suboptimal decisions that hurt their performance. This team focuses on improving the recommendation in all major ads lifecycle stages (pre-flight, mid-flight etc) to help advertisers make better decisions.
My work took me across the entire web stack. For frontend, I worked in Javascript/React. I used PHP/Hack for server-side code. I used C++ for backend code. Finally, I used SQL and Python for data analysis. It was a lot to learn in just 12 weeks, but I loved every minute of it and became a much better programmer as a result. I will go through the three main projects I was responsible for. 
## Milestone 1 - Ad Set Learning Stage Status Log 
An Ad Set (a group of ads) goes through multiple stages as the Facebook algorithms try to learn and optimize how to best deliver the ads. Unfortunately, advertisers were never notified to the changes in these statuses. When advertisers  run hundreds and sometimes thousands of Ad Sets, it becomes extremely difficult to determine if an Ad Set status has changed. I was responsible for setting up this notification system by logging the changes in this status. I worked with designers and content strategists in a cross-functional effort in order to ship this product. 
## Milestone 2 - Delivery Lever Recommendation Stability 
Advertisers get control of several delivery levers such as bid, budget, and cost. One feature on Ads Manager is to tell advertisers when these levers are potentially missing opportunities to maximize an Ad Set's potential. For example, maybe an advertiser had set their budget too low, so they are not getting enough Ads out. Unfortunately, the recommendation fluctuated a lot, causing a confusing experience for the advertisers. My work was to improve the stability of the recommendation. I worked primarily on the backend to accomplish this. Once I had made the changes, I was able to verify the results using Python and SQL, where I found that I had improved the stability by over 20%! 
## Milestone 3 - Internal Eligibility Checker Tool
There were three metrics my team provided advertisers to determine how well their Ad Sets compare to other advertisers in terms of quality, conversions, and creativity. Not all Ad Sets were eligible for these metrics, but advertisers didn't know why that was the case. Originally, the operations team would contact my team to determine the reason, which would then be reported back to the advertisers. This process was manual and tedious. I was able to automate this process by creating an internal tool, so the operations team could check for an advertiser themselves, streamlining the customer service process.
Working Remotely
When I received word that I would have an opportunity to join Facebook this summer, I was inevitably excited to live in the Bay, go to the world-renowned Facebook campus in Menlo Park, and even see Mark Zuckerberg in person during his weekly Q&A's. Unfortunately, the pandemic of COVID-19 changed those plans. Facebook was incredibly resilient and was able to continue with a virtual internship. Their infrastructure and help were incredibly valuable. In the end, I learned a lot about software engineering at Facebook, which is the primary goal after all. 
`;

export const facebook: Project = {
  id: ProjectId.FACEBOOK,
  name: 'Facebook',
  startDate: dayjs('2021-06-01'),
  endDate: dayjs('2021-08-21'),
  content: content,
};
