import React, { useState, useRef, useEffect, useCallback } from "react";

interface EditableTextProps {
  value: string;
  copyKey: string;
  onSave: (copyKey: string, content: string) => void;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "span" | "p";
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  copyKey,
  onSave,
  className,
  style,
  as: Tag = "span",
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const ref = useRef<HTMLElement>(null);
  const saveTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleSave = useCallback(
    (newText: string) => {
      const trimmed = newText.trim();
      if (trimmed && trimmed !== value) {
        onSave(copyKey, trimmed);
      }
    },
    [copyKey, value, onSave]
  );

  const handleBlur = () => {
    setEditing(false);
    const current = ref.current?.innerText || text;
    handleSave(current);
  };

  const handleInput = () => {
    const current = ref.current?.innerText || "";
    setText(current);
    clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      handleSave(current);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current?.blur();
    }
    if (e.key === "Escape") {
      if (ref.current) ref.current.innerText = value;
      setText(value);
      setEditing(false);
    }
  };

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        ...style,
        cursor: "text",
        outline: editing ? "2px solid rgba(59,130,246,0.5)" : "none",
        outlineOffset: 4,
        borderRadius: 4,
        transition: "outline 0.15s ease",
        minWidth: 20,
      }}
      contentEditable
      suppressContentEditableWarning
      onFocus={() => setEditing(true)}
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      spellCheck={false}
    >
      {value}
    </Tag>
  );
};

export default EditableText;
