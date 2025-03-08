import { useState, useEffect, useMemo } from "react";

const TypingPlaceholderInput = ({ value, onChange }) => {
  const placeholders = useMemo(
    () => [
      "Enter your Name...",
      "Enter your Roll Number...",
      "Enter your Student ID...",
    ],
    []
  );

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = placeholders[index];

    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const delayBeforeDelete = 1500; // Pause before deleting

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      // Move to next placeholder
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % placeholders.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, placeholders]);

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border p-2 rounded w-full"
    />
  );
};

export default TypingPlaceholderInput;
