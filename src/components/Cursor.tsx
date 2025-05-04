// import { useEffect, useState } from 'react';

// const Cursor: React.FC = () => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisible((prev) => !prev);
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <span className={`text-terminal-text font-bold ${visible ? 'opacity-100' : 'opacity-0'}`}>
//       █
//     </span>
//   );
// };

// export default Cursor;

import { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-[var(--terminal-text)] font-bold ${visible ? 'opacity-100' : 'opacity-0'}`}>
      █
    </span>
  );
};

export default Cursor;
