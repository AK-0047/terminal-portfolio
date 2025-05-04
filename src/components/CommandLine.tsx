// import React, { useState, useRef, useEffect } from 'react';
// import Cursor from './Cursor';

// interface CommandLineProps {
//   onCommand: (command: string) => void;
//   commandHistory: string[];
//   availableCommands: string[];
// }

// const CommandLine: React.FC<CommandLineProps> = ({
//   onCommand,
//   commandHistory,
//   availableCommands,
// }) => {
//   const [input, setInput] = useState('');
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     inputRef.current?.focus();

//     const handleClick = () => {
//       inputRef.current?.focus();
//     };

//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, []);

//   useEffect(() => {
//     setHistoryIndex(-1);
//   }, [commandHistory]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && input.trim()) {
//       onCommand(input.trim());
//       setInput('');
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (commandHistory.length > 0) {
//         const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     } else if (e.key === 'Tab') {
//       e.preventDefault();

//       const matchingCommands = availableCommands.filter(cmd =>
//         cmd.startsWith(input.split(' ')[0])
//       );

//       if (matchingCommands.length === 1) {
//         setInput(matchingCommands[0]);
//       }
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex items-center font-mono text-terminal-text"
//       onClick={() => inputRef.current?.focus()}
//     >
//       <span className="font-bold mr-2 text-terminal-text">anshulkamboya@portfolio:~$</span>

//       <div className="relative flex-grow">
//         {/* Hidden input for capturing keyboard input */}
//         <input
//           ref={inputRef}
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
//           autoFocus
//           spellCheck="false"
//           autoComplete="off"
//           aria-label="terminal input"
//         />

//         {/* Simulated terminal text + blinking cursor */}
//         <span className="whitespace-pre">
//           {input}
//           <Cursor />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default CommandLine;

import React, { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';

interface CommandLineProps {
  onCommand: (command: string) => void;
  commandHistory: string[];
  availableCommands: string[];
}

const CommandLine: React.FC<CommandLineProps> = ({
  onCommand,
  commandHistory,
  availableCommands,
}) => {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    setHistoryIndex(-1);
  }, [commandHistory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onCommand(input.trim());
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();

      const matchingCommands = availableCommands.filter(cmd =>
        cmd.startsWith(input.split(' ')[0])
      );

      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center font-mono text-[var(--terminal-text)] bg-transparent"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="font-bold mr-2 text-[var(--terminal-green)]">
        anshulkamboya@portfolio:~$
      </span>

      <div className="relative flex-grow">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
          autoFocus
          spellCheck="false"
          autoComplete="off"
          aria-label="terminal input"
        />
        <span className="whitespace-pre text-[var(--terminal-text)]">
          {input}
          <Cursor />
        </span>
      </div>
    </div>
  );
};

export default CommandLine;
