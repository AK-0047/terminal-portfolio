// import React, { useState, useEffect, useRef } from 'react';
// import { Command, Project, Skill, SocialLink } from '../types';
// import { about, projects, skills, socialLinks, asciiArt } from '../data/portfolio';
// import { Copy, ExternalLink, Terminal as TerminalIcon, Gamepad2, Brain, Sparkles, Code2 } from 'lucide-react';
// import { TypeAnimation } from 'react-type-animation';
// import Confetti from 'react-confetti';

// const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
//   <div className="mb-8 p-4 border-l-2 border-terminal-green rounded-lg bg-terminal-gray-dark/50 hover:bg-terminal-gray-dark/70 transition-colors">
//     <div className="flex flex-col md:flex-row gap-4">
//       <div className="flex-1">
//         <div className="text-terminal-yellow font-bold text-xl mb-2">{project.name}</div>
//         <div className="text-terminal-text mb-3">{project.description}</div>
//         <div className="text-terminal-blue mb-3">
//           Technologies: {project.technologies.join(', ')}
//         </div>
//         <div className="space-x-4">
//           {project.github && (
//             <a href={project.github} target="_blank" rel="noopener noreferrer" 
//                className="text-terminal-purple hover:text-terminal-cyan transition-colors">
//               GitHub Repository ↗
//             </a>
//           )}
//           {project.link && (
//             <a href={project.link} target="_blank" rel="noopener noreferrer"
//                className="text-terminal-cyan hover:text-terminal-blue transition-colors">
//               Live Demo ↗
//             </a>
//           )}
//         </div>
//       </div>
//       <div className="w-full md:w-1/3">
//         <img 
//           src={project.image} 
//           alt={project.name}
//           className="rounded-lg shadow-lg w-full h-48 object-cover"
//         />
//       </div>
//     </div>
//   </div>
// );

// const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {skills.map((category, index) => (
//       <div key={index} className="p-4 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-colors">
//         <div className="text-terminal-yellow font-bold text-lg mb-3 flex items-center gap-2">
//           <span>{category.icon}</span>
//           <span>{category.category}</span>
//         </div>
//         <ul className="grid grid-cols-2 gap-2">
//           {category.items.map((skill, idx) => (
//             <li key={idx} className="text-terminal-text flex items-center gap-2">
//               <span className="w-2 h-2 bg-terminal-green rounded-full"></span>
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// );

// const ContactCard: React.FC<{ link: SocialLink }> = ({ link }) => {
//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text);
//   };

//   const username = link.url.split('/').pop() || '';
//   const isEmail = link.platform === 'Email';
//   const displayText = isEmail ? link.url.replace('mailto:', '') : username;

//   return (
//     <div className="group p-4 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-all duration-300 transform hover:-translate-y-1">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex items-center gap-3">
//           <span className="text-2xl">{link.icon}</span>
//           <span className="text-terminal-yellow font-bold">{link.platform}</span>
//         </div>
//         <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//           <button
//             onClick={() => handleCopy(link.url)}
//             className="p-1.5 rounded-md hover:bg-terminal-gray-light/20 text-terminal-cyan"
//             aria-label="Copy link"
//           >
//             <Copy size={16} />
//           </button>
//           <a
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-1.5 rounded-md hover:bg-terminal-gray-light/20 text-terminal-blue"
//             aria-label="Open link"
//           >
//             <ExternalLink size={16} />
//           </a>
//         </div>
//       </div>
//       <div className="text-terminal-text font-mono">{displayText}</div>
//     </div>
//   );
// };

// const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//     {links.map((link, index) => (
//       <ContactCard key={index} link={link} />
//     ))}
//   </div>
// );

// const RandomFact: React.FC = () => {
//   const facts = [
//     "I write code while listening to lo-fi music 🎵",
//     "I contribute to open source projects in my free time 🌟",
//     "I love solving algorithmic puzzles 🧩",
//     "I'm passionate about UI/UX design 🎨",
//     "I enjoy teaching others about programming 👨‍🏫",
//     "I built my first website when I was 12 💻",
//     "I speak multiple programming languages fluently 🗣️",
//     "I'm always learning new technologies 📚"
//   ];

//   const [fact] = useState(() => facts[Math.floor(Math.random() * facts.length)]);

//   return (
//     <div className="p-4 bg-terminal-gray-dark/50 rounded-lg border-l-2 border-terminal-purple">
//       <div className="flex items-center gap-2 mb-2">
//         <Sparkles className="text-terminal-yellow" size={20} />
//         <span className="text-terminal-yellow font-bold">Random Fact</span>
//       </div>
//       <TypeAnimation
//         sequence={[fact]}
//         wrapper="p"
//         cursor={true}
//         className="text-terminal-text"
//       />
//     </div>
//   );
// };

// const NumberGame: React.FC = () => {
//   const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
//   const [guess, setGuess] = useState('');
//   const [attempts, setAttempts] = useState<number[]>([]);
//   const [message, setMessage] = useState('');
//   const [gameWon, setGameWon] = useState(false);

//   const handleGuess = () => {
//     const num = parseInt(guess);
//     if (isNaN(num) || num < 1 || num > 100) {
//       setMessage('Please enter a valid number between 1 and 100');
//       return;
//     }

//     const newAttempts = [...attempts, num];
//     setAttempts(newAttempts);
//     setGuess('');

//     if (num === target) {
//       setMessage(`🎉 Congratulations! You found the number in ${newAttempts.length} attempts!`);
//       setGameWon(true);
//     } else if (num < target) {
//       setMessage('Higher! ⬆️');
//     } else {
//       setMessage('Lower! ⬇️');
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {gameWon && <Confetti numberOfPieces={200} recycle={false} />}
//       <div className="flex items-center gap-2 mb-4">
//         <Gamepad2 className="text-terminal-yellow" size={20} />
//         <h2 className="text-terminal-yellow font-bold text-xl">Number Guessing Game</h2>
//       </div>
//       <div className="p-4 bg-terminal-gray-dark/50 rounded-lg">
//         <p className="text-terminal-text mb-4">
//           I'm thinking of a number between 1 and 100. Can you guess it?
//         </p>
//         {!gameWon && (
//           <div className="flex gap-2 mb-4">
//             <input
//               type="number"
//               value={guess}
//               onChange={(e) => setGuess(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleGuess()}
//               className="bg-terminal-gray-dark px-3 py-1 rounded border border-terminal-gray text-terminal-text w-24"
//               min="1"
//               max="100"
//             />
//             <button
//               onClick={handleGuess}
//               className="px-4 py-1 bg-terminal-green/20 text-terminal-green rounded hover:bg-terminal-green/30 transition-colors"
//             >
//               Guess
//             </button>
//           </div>
//         )}
//         {message && (
//           <p className={`text-lg ${gameWon ? 'text-terminal-green' : 'text-terminal-yellow'}`}>
//             {message}
//           </p>
//         )}
//         {attempts.length > 0 && (
//           <div className="mt-4">
//             <p className="text-terminal-gray-light">
//               Previous guesses: {attempts.join(', ')}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const MatrixRain: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [isRunning, setIsRunning] = useState(true);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const context = canvas.getContext('2d');
//     if (!context) return;

//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
//     const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const nums = '0123456789';
//     const alphabet = katakana + latin + nums;

//     const fontSize = 16;
//     const columns = canvas.width / fontSize;

//     const rainDrops: number[] = Array(Math.floor(columns)).fill(1);

//     const draw = () => {
//       context.fillStyle = 'rgba(0, 0, 0, 0.05)';
//       context.fillRect(0, 0, canvas.width, canvas.height);

//       context.fillStyle = '#0F0';
//       context.font = fontSize + 'px monospace';

//       for (let i = 0; i < rainDrops.length; i++) {
//         const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//         context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

//         if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           rainDrops[i] = 0;
//         }
//         rainDrops[i]++;
//       }
//     };

//     let animationFrameId: number;
//     const animate = () => {
//       if (isRunning) {
//         draw();
//         animationFrameId = requestAnimationFrame(animate);
//       }
//     };
//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isRunning]);

//   return (
//     <div className="relative">
//       <canvas
//         ref={canvasRef}
//         className="w-full h-64 rounded-lg bg-black"
//         style={{ imageRendering: 'pixelated' }}
//       />
//       <button
//         onClick={() => setIsRunning(prev => !prev)}
//         className="absolute top-2 right-2 px-3 py-1 bg-terminal-green/20 text-terminal-green rounded hover:bg-terminal-green/30 transition-colors"
//       >
//         {isRunning ? 'Pause' : 'Resume'}
//       </button>
//     </div>
//   );
// };

// const commandsList: Command[] = [
//   {
//     name: 'help',
//     description: 'Display available commands',
//     execute: () => {
//       return (
//         <div className="space-y-4">
//           <p className="text-terminal-yellow font-bold text-lg mb-4">Available Commands:</p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {commandsList.map((cmd) => (
//               <div key={cmd.name} className="p-3 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-colors">
//                 <div className="text-terminal-green font-bold">{cmd.name}</div>
//                 {cmd.usage && <div className="text-terminal-gray-light text-sm">{cmd.usage}</div>}
//                 <div className="text-terminal-text mt-1">{cmd.description}</div>
//                 {cmd.aliases && cmd.aliases.length > 0 && (
//                   <div className="text-terminal-blue text-sm mt-1">
//                     aliases: {cmd.aliases.join(', ')}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <p className="text-terminal-gray-light mt-6 p-4 bg-terminal-gray-dark/30 rounded-lg">
//             💡 Tips:
//             <br />• Use UP/DOWN arrows to navigate command history
//             <br />• Press TAB for command completion
//             <br />• Type 'clear' to reset the terminal
//           </p>
//         </div>
//       );
//     },
//   },
//   {
//     name: 'about',
//     aliases: ['whoami'],
//     description: 'Display information about me',
//     execute: () => {
//       return (
//         <div className="space-y-6">
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-terminal-yellow mb-4">{about.title}</h2>
//               <div className="text-terminal-text whitespace-pre-line leading-relaxed">
//                 {about.content}
//               </div>
//             </div>
//             <div className="w-full md:w-1/3">
//               <img 
//                 src={about.image} 
//                 alt="Profile"
//                 className="rounded-lg shadow-lg w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//           <SocialLinks links={socialLinks} />
//         </div>
//       );
//     },
//   },
//   {
//     name: 'projects',
//     description: 'Display my projects',
//     usage: '[project_id]',
//     execute: (args) => {
//       if (args && args.length > 0) {
//         const projectId = args[0];
//         const project = projects.find(p => p.id === projectId);
        
//         if (project) {
//           return <ProjectItem project={project} />;
//         } else {
//           return (
//             <div className="space-y-2">
//               <div className="text-terminal-red">Project not found: {projectId}</div>
//               <div className="text-terminal-text">
//                 Available project IDs: {projects.map(p => p.id).join(', ')}
//               </div>
//             </div>
//           );
//         }
//       }
      
//       return (
//         <div className="space-y-6">
//           <div className="text-terminal-yellow font-bold text-2xl mb-6">My Projects</div>
//           {projects.map((project, index) => (
//             <ProjectItem key={index} project={project} />
//           ))}
//           <div className="text-terminal-gray-light mt-4 p-4 bg-terminal-gray-dark/30 rounded-lg">
//             💡 Tip: Use 'projects [project_id]' to see details about a specific project
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     name: 'skills',
//     description: 'Display my technical skills',
//     execute: () => {
//       return (
//         <div className="space-y-6">
//           <div className="text-terminal-yellow font-bold text-2xl mb-6">Technical Skills</div>
//           <SkillsSection skills={skills} />
//         </div>
//       );
//     },
//   },
//   {
//     name: 'contact',
//     description: 'Display my contact information',
//     execute: () => {
//       return (
//         <div className="space-y-6">
//           <div className="text-terminal-yellow font-bold text-2xl mb-6">Let's Connect! 🚀</div>
//           <div className="bg-terminal-gray-dark/30 p-4 rounded-lg mb-6">
//             <p className="text-terminal-text mb-2">
//               I'm always excited to collaborate on interesting projects and discuss new opportunities!
//             </p>
//             <p className="text-terminal-cyan">
//               Choose any platform below to get in touch. Hover over the cards for quick actions.
//             </p>
//           </div>
//           <SocialLinks links={socialLinks} />
//           <div className="mt-6 p-4 bg-terminal-gray-dark/30 rounded-lg border-l-2 border-terminal-purple">
//             <p className="text-terminal-purple font-bold mb-2">Pro tip! 💡</p>
//             <p className="text-terminal-text">
//               Hover over the contact cards and use the quick actions to copy contact details or open links directly.
//             </p>
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     name: 'clear',
//     aliases: ['cls'],
//     description: 'Clear the terminal',
//     execute: () => null,
//   },
//   {
//     name: 'banner',
//     description: 'Display the welcome banner',
//     execute: () => {
//       return (
//         <pre className="text-terminal-cyan font-mono text-xs sm:text-sm whitespace-pre overflow-x-auto">
//           {asciiArt}
//         </pre>
//       );
//     },
//   },
//   {
//     name: 'game',
//     description: 'Play a number guessing game',
//     execute: () => <NumberGame />,
//   },
//   {
//     name: 'fact',
//     description: 'Display a random fact about me',
//     execute: () => <RandomFact />,
//   },
//   {
//     name: 'matrix',
//     description: 'Display the Matrix digital rain effect',
//     execute: () => {
//       return (
//         <div className="space-y-4">
//           <div className="flex items-center gap-2 mb-4">
//             <Code2 className="text-terminal-green" size={20} />
//             <h2 className="text-terminal-green font-bold text-xl">Matrix Digital Rain</h2>
//           </div>
//           <MatrixRain />
//           <p className="text-terminal-gray-light mt-4">
//             💡 Click the Pause/Resume button to control the animation
//           </p>
//         </div>
//       );
//     },
//   },
// ];

// export const getAvailableCommands = (): string[] => {
//   return commandsList.map(cmd => cmd.name);
// };

// export const findCommand = (name: string): Command | undefined => {
//   const lowerName = name.toLowerCase();
//   return commandsList.find(
//     (cmd) => cmd.name === lowerName || (cmd.aliases && cmd.aliases.includes(lowerName))
//   );
// };

// export const parseCommand = (input: string): { command: string; args: string[] } => {
//   const parts = input.trim().split(' ');
//   const command = parts[0].toLowerCase();
//   const args = parts.slice(1);
//   return { command, args };
// };

// export const executeCommand = (input: string): JSX.Element | string | null => {
//   const { command, args } = parseCommand(input);
  
//   const cmd = findCommand(command);
//   if (cmd) {
//     return cmd.execute(args);
//   }
  
//   return `Command not found: ${command}. Type 'help' to see available commands.`;
// };

import React, { useState, useEffect, useRef } from 'react';
import { Command, Project, Skill, SocialLink } from '../types';
import { about, projects, skills, socialLinks, asciiArt } from '../data/portfolio';
import { Copy, ExternalLink, Terminal as TerminalIcon, Gamepad2, Brain, Sparkles, Code2, Github, Globe, ChevronRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Confetti from 'react-confetti';

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group overflow-hidden rounded-xl bg-terminal-gray-dark/30 transition-all duration-500 hover:bg-terminal-gray-dark/50 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-bg/80 to-terminal-bg opacity-60"/>
      
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-terminal-yellow mb-2 group-hover:text-terminal-green transition-colors">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-terminal-gray-dark/50 text-terminal-cyan border border-terminal-gray-light/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <img 
            src={project.image} 
            alt={project.name}
            className="w-24 h-24 rounded-lg object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <p className="text-terminal-text mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-purple hover:text-terminal-green transition-colors"
            >
              <Github size={18} />
              <span>Repository</span>
              <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              <Globe size={18} />
              <span>Live Demo</span>
              <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          )}
        </div>

        <div 
          className={`absolute inset-0 bg-gradient-to-r from-terminal-purple/10 to-terminal-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
          style={{
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {skills.map((category, index) => (
      <div key={index} className="p-4 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-colors">
        <div className="text-terminal-yellow font-bold text-lg mb-3 flex items-center gap-2">
          <span>{category.icon}</span>
          <span>{category.category}</span>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {category.items.map((skill, idx) => (
            <li key={idx} className="text-terminal-text flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-green rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ContactCard: React.FC<{ link: SocialLink }> = ({ link }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const username = link.url.split('/').pop() || '';
  const isEmail = link.platform === 'Email';
  const displayText = isEmail ? link.url.replace('mailto:', '') : username;

  return (
    <div className="group p-4 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{link.icon}</span>
          <span className="text-terminal-yellow font-bold">{link.platform}</span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleCopy(link.url)}
            className="p-1.5 rounded-md hover:bg-terminal-gray-light/20 text-terminal-cyan"
            aria-label="Copy link"
          >
            <Copy size={16} />
          </button>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-terminal-gray-light/20 text-terminal-blue"
            aria-label="Open link"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="text-terminal-text font-mono">{displayText}</div>
    </div>
  );
};

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {links.map((link, index) => (
      <ContactCard key={index} link={link} />
    ))}
  </div>
);

const RandomFact: React.FC = () => {
  const facts = [
    "I write code while listening to lo-fi music 🎵",
    "I contribute to open source projects in my free time 🌟",
    "I love solving algorithmic puzzles 🧩",
    "I'm passionate about UI/UX design 🎨",
    "I enjoy teaching others about programming 👨‍🏫",
    "I built my first website when I was 12 💻",
    "I speak multiple programming languages fluently 🗣️",
    "I'm always learning new technologies 📚"
  ];

  const [fact] = useState(() => facts[Math.floor(Math.random() * facts.length)]);

  return (
    <div className="p-4 bg-terminal-gray-dark/50 rounded-lg border-l-2 border-terminal-purple">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="text-terminal-yellow" size={20} />
        <span className="text-terminal-yellow font-bold">Random Fact</span>
      </div>
      <TypeAnimation
        sequence={[fact]}
        wrapper="p"
        cursor={true}
        className="text-terminal-text"
      />
    </div>
  );
};

const NumberGame: React.FC = () => {
  const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const [gameWon, setGameWon] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    const newAttempts = [...attempts, num];
    setAttempts(newAttempts);
    setGuess('');

    if (num === target) {
      setMessage(`🎉 Congratulations! You found the number in ${newAttempts.length} attempts!`);
      setGameWon(true);
    } else if (num < target) {
      setMessage('Higher! ⬆️');
    } else {
      setMessage('Lower! ⬇️');
    }
  };

  return (
    <div className="space-y-4">
      {gameWon && <Confetti numberOfPieces={200} recycle={false} />}
      <div className="flex items-center gap-2 mb-4">
        <Gamepad2 className="text-terminal-yellow" size={20} />
        <h2 className="text-terminal-yellow font-bold text-xl">Number Guessing Game</h2>
      </div>
      <div className="p-4 bg-terminal-gray-dark/50 rounded-lg">
        <p className="text-terminal-text mb-4">
          I'm thinking of a number between 1 and 100. Can you guess it?
        </p>
        {!gameWon && (
          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="bg-terminal-gray-dark px-3 py-1 rounded border border-terminal-gray text-terminal-text w-24"
              min="1"
              max="100"
              placeholder="1-100"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-terminal-green/20 text-terminal-green rounded hover:bg-terminal-green/30 transition-colors"
            >
              Guess
            </button>
          </form>
        )}
        {message && (
          <p className={`text-lg ${gameWon ? 'text-terminal-green' : 'text-terminal-yellow'}`}>
            {message}
          </p>
        )}
        {attempts.length > 0 && (
          <div className="mt-4">
            <p className="text-terminal-gray-light">
              Previous guesses: {attempts.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    let animationFrameId: number;
    const animate = () => {
      if (isRunning) {
        draw();
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-64 rounded-lg bg-black"
        style={{ imageRendering: 'pixelated' }}
      />
      <button
        onClick={() => setIsRunning(prev => !prev)}
        className="absolute top-2 right-2 px-3 py-1 bg-terminal-green/20 text-terminal-green rounded hover:bg-terminal-green/30 transition-colors"
      >
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};

const commandsList: Command[] = [
  {
    name: 'help',
    description: 'Display available commands',
    execute: () => {
      return (
        <div className="space-y-4">
          <p className="text-terminal-yellow font-bold text-lg mb-4">Available Commands:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commandsList.map((cmd) => (
              <div key={cmd.name} className="p-3 bg-terminal-gray-dark/50 rounded-lg hover:bg-terminal-gray-dark/70 transition-colors">
                <div className="text-terminal-green font-bold">{cmd.name}</div>
                {cmd.usage && <div className="text-terminal-gray-light text-sm">{cmd.usage}</div>}
                <div className="text-terminal-text mt-1">{cmd.description}</div>
                {cmd.aliases && cmd.aliases.length > 0 && (
                  <div className="text-terminal-blue text-sm mt-1">
                    aliases: {cmd.aliases.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-terminal-gray-light mt-6 p-4 bg-terminal-gray-dark/30 rounded-lg">
            💡 Tips:
            <br />• Use UP/DOWN arrows to navigate command history
            <br />• Press TAB for command completion
            <br />• Type 'clear' to reset the terminal
          </p>
        </div>
      );
    },
  },
  {
    name: 'about',
    aliases: ['whoami'],
    description: 'Display information about me',
    execute: () => {
      return (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-terminal-yellow mb-4">{about.title}</h2>
              <div className="text-terminal-text whitespace-pre-line leading-relaxed">
                {about.content}
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src={about.image} 
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          <SocialLinks links={socialLinks} />
        </div>
      );
    },
  },
  {
    name: 'projects',
    description: 'Display my projects',
    usage: '[project_id]',
    execute: (args) => {
      if (args && args.length > 0) {
        const projectId = args[0];
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
          return <ProjectItem project={project} />;
        } else {
          return (
            <div className="space-y-2">
              <div className="text-terminal-red">Project not found: {projectId}</div>
              <div className="text-terminal-text">
                Available project IDs: {projects.map(p => p.id).join(', ')}
              </div>
            </div>
          );
        }
      }
      
      return (
        <div className="space-y-6">
          <div className="text-terminal-yellow font-bold text-2xl mb-6">My Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
          <div className="text-terminal-gray-light mt-4 p-4 bg-terminal-gray-dark/30 rounded-lg">
            💡 Tip: Use 'projects [project_id]' to see details about a specific project
          </div>
        </div>
      );
    },
  },
  {
    name: 'skills',
    description: 'Display my technical skills',
    execute: () => {
      return (
        <div className="space-y-6">
          <div className="text-terminal-yellow font-bold text-2xl mb-6">Technical Skills</div>
          <SkillsSection skills={skills} />
        </div>
      );
    },
  },
  {
    name: 'contact',
    description: 'Display my contact information',
    execute: () => {
      return (
        <div className="space-y-6">
          <div className="text-terminal-yellow font-bold text-2xl mb-6">Let's Connect! 🚀</div>
          <div className="bg-terminal-gray-dark/30 p-4 rounded-lg mb-6">
            <p className="text-terminal-text mb-2">
              I'm always excited to collaborate on interesting projects and discuss new opportunities!
            </p>
            <p className="text-terminal-cyan">
              Choose any platform below to get in touch. Hover over the cards for quick actions.
            </p>
          </div>
          <SocialLinks links={socialLinks} />
          <div className="mt-6 p-4 bg-terminal-gray-dark/30 rounded-lg border-l-2 border-terminal-purple">
            <p className="text-terminal-purple font-bold mb-2">Pro tip! 💡</p>
            <p className="text-terminal-text">
              Hover over the contact cards and use the quick actions to copy contact details or open links directly.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    name: 'clear',
    aliases: ['cls'],
    description: 'Clear the terminal',
    execute: () => null,
  },
  {
    name: 'banner',
    description: 'Display the welcome banner',
    execute: () => {
      return (
        <pre className="text-terminal-cyan font-mono text-xs sm:text-sm whitespace-pre overflow-x-auto">
          {asciiArt}
        </pre>
      );
    },
  },
  {
    name: 'game',
    description: 'Play a number guessing game',
    execute: () => <NumberGame />,
  },
  {
    name: 'fact',
    description: 'Display a random fact about me',
    execute: () => <RandomFact />,
  },
  {
    name: 'matrix',
    description: 'Display the Matrix digital rain effect',
    execute: () => {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="text-terminal-green" size={20} />
            <h2 className="text-terminal-green font-bold text-xl">Matrix Digital Rain</h2>
          </div>
          <MatrixRain />
          <p className="text-terminal-gray-light mt-4">
            💡 Click the Pause/Resume button to control the animation
          </p>
        </div>
      );
    },
  },
];

export const getAvailableCommands = (): string[] => {
  return commandsList.map(cmd => cmd.name);
};

export const findCommand = (name: string): Command | undefined => {
  const lowerName = name.toLowerCase();
  return commandsList.find(
    (cmd) => cmd.name === lowerName || (cmd.aliases && cmd.aliases.includes(lowerName))
  );
};

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const parts = input.trim().split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  return { command, args };
};

export const executeCommand = (input: string): JSX.Element | string | null => {
  const { command, args } = parseCommand(input);
  
  const cmd = findCommand(command);
  if (cmd) {
    return cmd.execute(args);
  }
  
  return `Command not found: ${command}. Type 'help' to see available commands.`;
};