// import React from 'react';
// import { CommandHistoryItem } from '../types';

// interface TerminalOutputProps {
//   history: CommandHistoryItem[];
// }

// const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
//   return (
//     <div className="mb-4 font-mono">
//       {history.map((item, index) => (
//         <div key={index} className="mb-2">
//           <div className="text-green-400 font-bold">
//             anshulkamboya@portfolio:~$ {item.command}
//           </div>
//           <div className="text-gray-300 ml-0 mt-1">
//             {item.output}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TerminalOutput;

import React from 'react';
import { CommandHistoryItem } from '../types';

interface TerminalOutputProps {
  history: CommandHistoryItem[];
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
  return (
    <div className="mb-4 font-mono text-sm sm:text-base leading-relaxed">
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <span className="text-terminal-green font-semibold">
              anshulkamboya@portfolio
            </span>
            <span className="text-terminal-gray-light mx-1">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-terminal-gray-light ml-1">$</span>
            <span className="ml-2 text-terminal-text">{item.command}</span>
          </div>
          <div className="text-terminal-text mt-2 whitespace-pre-wrap">
            {typeof item.output === 'string' ? (
              <pre className="whitespace-pre-wrap break-words">{item.output}</pre>
            ) : (
              item.output
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;
