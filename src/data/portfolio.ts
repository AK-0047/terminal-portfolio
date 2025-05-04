import { Project, Skill, SocialLink } from '../types';
import myPhoto from '../assets/Anshul.jpeg';

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: 'Terminal Portfolio',
    description: 'An interactive terminal-style portfolio website built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/terminal-portfolio',
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    description: 'A fully-featured e-commerce platform with shopping cart, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://example-ecommerce.com',
    github: 'https://github.com/yourusername/ecommerce-platform',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant App',
    description: 'A natural language processing assistant that helps users with daily tasks and information retrieval.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    link: 'https://ai-assistant-demo.com',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS'],
    icon: '🎨'
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL'],
    icon: '⚙️'
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    icon: '🗄️'
  },
  {
    category: 'DevOps',
    items: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    icon: '🚀'
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/AK-0047',
    icon: '📦'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/anshulkamboya',
    icon: '💼'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: '🐦'
  },
  {
    platform: 'Email',
    url: 'mailto:kamboya.anshul@gmailcom',
    icon: '📧'
  }
];

export const about = {
  title: "Hi, I'm a Full-Stack Developer 👋",
  content: `I'm passionate about creating elegant solutions to complex problems.

With expertise in both frontend and backend technologies, I build responsive, user-friendly
applications that deliver exceptional experiences. I'm experienced in modern JavaScript frameworks,
API development, and cloud infrastructure.

When I'm not coding, you can find me:
🌱 Exploring new technologies
🤝 Contributing to open-source projects
🏃‍♂️ Enjoying outdoor activities
📚 Learning something new

I believe in continuous learning and pushing the boundaries of what's possible with code.`,
  image: myPhoto
};

export const asciiArt = `
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                                  
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗  
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗ 
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║ 
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║ 
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝  
`;

export const welcomeMessage = `Welcome to my Portfolio! 🚀
Type 'help' to see available commands.

Quick start:
  about    - Learn about me
  projects - View my work
  skills   - See my expertise
  contact  - Get in touch
`;