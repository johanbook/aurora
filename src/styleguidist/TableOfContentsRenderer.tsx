import React from "react";
import TextField from "../components/TextField";

interface TableOfContentsRendererProps {
  children?: React.ReactNode;
  searchTerm: string;
  onSearchTermChange(term: string): void;
}

export default function TableOfContentsRenderer({
  children,
  searchTerm,
  onSearchTermChange,
}: TableOfContentsRendererProps) {
  return (
    <nav>
      <div style={{ margin: 10 }}>
        <TextField
          value={searchTerm}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </div>
      {children}
    </nav>
  );
}
