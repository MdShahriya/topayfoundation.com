import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  words = [], 
  delay = 100, 
  infinite = true 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      // If deleting, remove a character, otherwise add a character
      setCurrentText(prev => 
        isDeleting 
          ? prev.substring(0, prev.length - 1) 
          : word.substring(0, prev.length + 1)
      );

      // If we've completed typing the word
      if (!isDeleting && currentText === word) {
        // Wait a bit before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // If we've deleted the word
      else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        // Move to the next word (or loop back to the first)
        setCurrentWordIndex((prev) => 
          infinite 
            ? (prev + 1) % words.length 
            : Math.min(prev + 1, words.length - 1)
        );
      }
    }, isDeleting ? delay / 4 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, infinite]);

  return <span className="typewriter-text">{currentText}</span>;
};

export default TypeWriter;