import React, { useEffect } from 'react';
import Terminal from './components/Terminal';

function App() {
  useEffect(() => {
    document.title = "Terminal Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)]">
      <Terminal />
    </div>
  );
}

export default App;