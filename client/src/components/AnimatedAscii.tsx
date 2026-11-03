'use client';
import { useState, useEffect } from 'react';

const chars = '.:*+=#%@';
const revealSpeed = 30;
const scrambleCycles = 3;

interface AnimatedAsciiProps {
  finalAscii: string;
}

const AnimatedAscii: React.FC<AnimatedAsciiProps> = ({ finalAscii }) => {
  const [displayedAscii, setDisplayedAscii] = useState('');

  useEffect(() => {
    const targetLines = finalAscii.trim().split('\n');
    const targetLength = targetLines.reduce((len, line) => len + line.length, 0);
    const lineLengths = targetLines.map(line => line.length);
    
    let initialDisplay = '';
    for (const len of lineLengths) {
      for (let i = 0; i < len; i++) {
        initialDisplay += chars[Math.floor(Math.random() * chars.length)];
      }
      initialDisplay += '\n';
    }
    setDisplayedAscii(initialDisplay);

    let revealProgress = 0;
    const interval = setInterval(() => {
      let newDisplayedAscii = '';
      let currentPos = 0;

      for (const line of targetLines) {
        for (let i = 0; i < line.length; i++) {
          const targetChar = line[i];
          if (currentPos > revealProgress) {
            if (revealProgress % (scrambleCycles + 1) < scrambleCycles) {
              newDisplayedAscii += chars[Math.floor(Math.random() * chars.length)];
            } else {
              newDisplayedAscii += ' ';
            }
          } else {
            newDisplayedAscii += targetChar;
          }
          currentPos++;
        }
        newDisplayedAscii += '\n';
      }

      setDisplayedAscii(newDisplayedAscii);
      revealProgress += targetLength / (1000 / revealSpeed);

      if (revealProgress >= targetLength) {
        clearInterval(interval);
        setDisplayedAscii(finalAscii.trim() + '\n');
      }
    }, revealSpeed);

    return () => clearInterval(interval);
  }, [finalAscii]);

  return (
    <pre style={{ color: '#FFFFFF', textAlign: 'center' }}>
      {displayedAscii}
    </pre>
  );
};

// Make sure this line is at the bottom of your file
export default AnimatedAscii;