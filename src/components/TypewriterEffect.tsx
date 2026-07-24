import { useState, useEffect } from 'react';

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length === currentWord.length) {
          // Finished typing word, pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2 seconds before deleting
        } else {
          setTypingSpeed(100); // Normal typing speed
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
          setTypingSpeed(500); // Wait half a second before typing new word
        } else {
          setTypingSpeed(40); // Fast deleting speed
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, typingSpeed, words]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
