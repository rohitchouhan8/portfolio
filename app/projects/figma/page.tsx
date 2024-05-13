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

const content = `
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
published

![Counter Widget](https://static.figma.com/uploads/a1de4b17f2223c038bce3d888fc4dbc9a65fe66c)

What's awesome is that these are multiplayer-compatible out of the box. The Widget API handles all of the complexities for the developer. 

## My contributions
I worked on this project for the greater part of a year, getting the project to launch. Specifically, I built the [<Input/> component](https://www.figma.com/widget-docs/api/component-Input/), an editable text field widget component. I also build Widget undo and redo logic, which was a bit trickier than Figma's standard undo and redo logic. 
`;

export default function Figma({ params }: Props) {
  return (
    <>
      <ScrollProgress />
      <H1>Figma.</H1>
      <ReactMarkdown content={content} />
    </>
  );
}
