type BaseWriting = {
  id: string;
  title: string;
  publishDate: string;
};
export type MarkdownWriting = BaseWriting & {
  content: {
    type: 'markdown';
    content: string;
  };
};
export type ExternalWriting = BaseWriting & {
  content: {
    type: 'external';
    url: string;
  };
};
export type Writing = MarkdownWriting | ExternalWriting;
