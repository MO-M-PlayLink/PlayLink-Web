export function parseMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${key++}`}>{listItems}</ul>);
      listItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      flushList();
      return;
    }

    // H3 (###) - check longest first
    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={`h3-${key++}`}>{trimmed.slice(4)}</h3>);
      return;
    }

    // H2 (##)
    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={`h2-${key++}`}>{trimmed.slice(3)}</h2>);
      return;
    }

    // H1 (#)
    if (trimmed.startsWith("# ")) {
      flushList();
      elements.push(<h1 key={`h1-${key++}`}>{trimmed.slice(2)}</h1>);
      return;
    }

    // List item (-)
    if (trimmed.startsWith("- ")) {
      listItems.push(<li key={`li-${key++}`}>{trimmed.slice(2)}</li>);
      return;
    }

    // Regular paragraph
    flushList();
    elements.push(<p key={`p-${key++}`}>{trimmed}</p>);
  });

  // Flush remaining list items
  flushList();

  return elements;
}
