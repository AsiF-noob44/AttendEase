import { useState, useEffect, useMemo } from "react";

const TypingPlaceholderInput = ({ value, onChange }) => {
  const placeholders = useMemo(
    () => ["Enter Student Name...", "Enter Student ID..."],
    []
  );

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) return;

    const currentText = placeholders[index];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDelete = 1500;

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % placeholders.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, placeholders, isFocused]);

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={isFocused ? "" : placeholder}
      className="border p-2 rounded w-full"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default TypingPlaceholderInput;
