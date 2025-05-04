import React, { useState, useEffect, useRef } from 'react';
import CommandLine from './CommandLine';
import TerminalOutput from './TerminalOutput';
import { CommandHistoryItem } from '../types';
import { executeCommand, getAvailableCommands } from '../utils/commands';
import TypingEffect from './TypingEffect';
import { welcomeMessage, asciiArt } from '../data/portfolio';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (terminalRef.current) {
  //     terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  //   }
  // }, [history]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timeout);
  }, [history]);
  
  const handleCommand = (command: string) => {
    const output = executeCommand(command);
    
    if (command.toLowerCase() === 'clear' || command.toLowerCase() === 'cls') {
      setHistory([{ command: 'banner', output: executeCommand('banner') }]);
    } else {
      setHistory(prev => [...prev, { command, output }]);
    }
    
    setCommandHistory(prev => [...prev, command]);
  };

  const handleInitialTypingComplete = () => {
    setShowPrompt(true);
  };

  useEffect(() => {
    if (showWelcome) {
      setHistory([
        { 
          command: 'banner', 
          output: (
            <pre className="text-terminal-cyan font-mono text-xs sm:text-sm whitespace-pre overflow-x-auto">
              {asciiArt}
            </pre>
          )
        }
      ]);
      setShowWelcome(false);
    }
  }, [showWelcome]);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text p-2 sm:p-4 flex flex-col">
      <div className="terminal-window bg-terminal-gray-dark/80 rounded-lg border border-terminal-gray shadow-terminal overflow-hidden flex flex-col flex-grow max-w-4xl w-full mx-auto">
        <div className="bg-terminal-bg px-4 py-2 border-b border-terminal-gray flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-orange"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <div className="text-center flex-grow font-mono text-sm text-terminal-gray-light">anshulkamboya@portfolio:~</div>
        </div>
        
        <div 
          ref={terminalRef}
          className="flex-grow p-4 overflow-y-auto font-mono bg-terminal-bg/95 text-sm sm:text-base"
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        >
          <TerminalOutput history={history} />
          
          {!showPrompt && (
            <div className="text-terminal-green mb-4">
              <TypingEffect 
                text={welcomeMessage} 
                speed={30} 
                onComplete={handleInitialTypingComplete} 
              />
            </div>
          )}
          
          {showPrompt && (
            <CommandLine 
              onCommand={handleCommand} 
              commandHistory={commandHistory}
              availableCommands={getAvailableCommands()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;