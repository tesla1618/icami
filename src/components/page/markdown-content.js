import ReactMarkdown from "react-markdown";

const components = {
  a: ({ children, ...props }) => (
    <a className="icami-inline-link" {...props}>
      {children}
    </a>
  ),
};

export function MarkdownContent({ children }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
