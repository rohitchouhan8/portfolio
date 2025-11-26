import { MarkdownWriting, Writing } from '../types';

export const evolutionOfLLMDevelopment: MarkdownWriting = {
  id: 'evolution-of-llm-development',
  title: 'Evolution of LLM Development',
  content: {
    type: 'markdown',
    content: `Three years ago, GPT-3 came out, and developing with LLMs began. Our understanding of LLMs has evolved significantly since then. There have been three distinct stages of development. Each has built on the last as our understanding of LLM capabilities evolved. I hope this gives us perspective on where we are now and where things are heading.

1. **Chatbots (the past)**: System prompt engineering
2. **Tools and agents (today)**: Taking actions with humans in the loop
3. **Coding agents (frontier)**: Providing the right tools to accomplish anything

## Chatbots: System prompt is everything

When OpenAI introduced ChatGPT, it was our "aha" moment, showing how powerful LLMs really were. For the first time, a program produced a perfectly custom and natural response. If you asked it a question, it would answer you and only you. If you gave it instructions, it helped you even better. If you provided even more details, it took them into account.

Thus, the system prompt and context window were the most important challenges. The better you could design your instructions and use the available space effectively, the better your assistant performed.

This is why modeling companies first focused on building larger and larger models. GPT-3 only had a 2,048-token context window. Now, Anthropic and OpenAI have released 1-million-token models, and Meta has released a 10-million-token model.

In their quest to support more and more tokens, they seem to have hit a limit. The system prompt could only take the token predictor so far. It could not reason or execute, only advise and answer.

## Tools, Workflows, Agents: Code in the loop

Acknowledging this limitation, OpenAI released tool calling. Agents could execute external methods, take those results, and reason about them. They could actually accomplish tasks for us. As tool calling became more reliable and stable, people built the first workflows. Given an input, create a response in the right format and feed that into the next step of the LLM's reasoning. At each step, you could intervene and transform, providing the most control.

In the chatbot era, humans just came up with one system prompt. Now, we had to build one per step. Why do we have to do this reasoning? These LLMs are supposed to be the smart ones, not us.

Out came the first agents. Instead of giving one tool and constraining the inputs and outputs, give the LLM many tools and let it decide how to best accomplish the task.

For the first time, the context window seemed less important. Agents did not need to keep everything inside their figurative heads. They could use search tools to learn on the fly. The most intelligent agents were the ones that had the best tools to learn. The race now is to build these tools in such a way that the agent can combine the most.

This is where MCPs were born. If your LLM could access the most tools and resources, it could do the most. We want to add more and more tools so the agent can accomplish more. Even now, the efficacy of MCPs are still up in the air. When you inundate agents with so many tools, it struggles to learn how to use each unique tool.

If you think about it, tools are pretty odd in the pursuit of general intelligence. They took the responsibility out of the LLM's hands and gave some of it back to us. Aka, we control the tool execution. This approach left the LLM in the dark. Once it makes that tool call, it only knows what comes back in the result. It has no understanding of how that tool was executed. The more complex your tool, the less the agent understands.

## Coding Agents: Give It the Most Powerful Tools

Claude Code has become a defining example of what makes coding agents so powerful: they don’t just use tools, they become the tools. Its most potent capability comes from the simplest possible interface: the Bash tool. On the surface, this tool just forwards a command to the operating system and returns the output. In practice, its power is immense. It can read code (cat), write code (echo), search code (grep), browse the web (curl), and even execute other programs (npm run). More importantly, it can combine these actions freely, looping, branching, and chaining commands in endlessly creative ways.

This is where coding agents fundamentally outclass traditional tool-based systems. Tool calling, as implemented in most LLM frameworks, is linear. The model can only call one tool at a time in sequence. It cannot reason dynamically about loops, conditionals, or parallel processes. In contrast, arbitrary code execution gives the model full access to the expressive power of programming languages. The agent can write a script, modify it, rerun it, and iterate until it achieves its goal.

When you give a model a top-level tool, you hand it a single endpoint. When you give it a programmable environment such as a function or a command-line interface, it gains the full flexibility of a computer. This is the philosophy behind efforts like Anthropic’s Code Execution with MCP and Claude Skills. These systems do not just expose APIs; they expose the means to script, reason, and self-improve through code.

Many people still assume this capability is limited to developer workflows, but code can represent almost anything. There is no need to build a bespoke Gmail API tool when the model can simply send an email with a curl command. There is no need to hardcode a CSV parser when the model can write and run one on demand. Almost any task can be reframed as a coding problem, and the LLM, acting as an agent, becomes both the author and the executor of that code.

In this example, Claude writes and executes Python scripts to aggregate CSV attachments. Without coding tool primitives, we would need at least a \`read_csv\` and \`create_csv\` tool. Each would have to hardcode specific steps for reading, parsing, and writing data, instead of letting the model generate and manipulate entries dynamically through code. This approach adds unnecessary burden to both agent developers and the agent itself, since such predefined tools are far less expressive than simply running a Bash command or script.

![Claude example](https://c5deqaojsbq1ptkt.public.blob.vercel-storage.com/Stages%20of%20LLM%20Development.png)

This is the new frontier of LLM development. As long as you provide the environment for the model to succeed, such as an operating system to run commands, it can accomplish the rest. If you need something bespoke, you can provide that code to the model directly. Unlike traditional tools, the agent can see it, modify it, and adapt it for its purpose. Actions are no longer a black box because the agent is in full control.`,
  },
  publishDate: '2025-11-25',
};
