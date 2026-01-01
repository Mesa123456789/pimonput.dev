import { useState, useEffect } from "react";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export default function TypingText({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  delayBetweenWords = 1500,
  className = "",
}: TypingTextProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const current = loopIndex % words.length;
    const fullText = words[current];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={`whitespace-pre ${className}`}>
      {text}
      <span className="border-r-2 border-gray-700 ml-[1px] animate-caret"></span>
    </span>
  );
}
