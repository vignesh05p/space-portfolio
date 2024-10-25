import React from 'react';
import Scene from './components/Scene';

function App() {
  return (
    <div className="w-full h-screen">
      <Scene />
      <div className="absolute top-0 left-0 w-full p-8 text-white">
        <h1 className="text-6xl font-bold">Vignesh Prabhu</h1>
        <p className="text-2xl mt-2">Full Stack Developer & AI Enthusiast</p>
        <div className="mt-4 space-x-4">
          <a href="mailto:dev.vigneshprabhu@gmail.com" className="text-blue-300 hover:text-blue-400">Email</a>
          <a href="tel:+918217254854" className="text-blue-300 hover:text-blue-400">+91 8217254854</a>
        </div>
      </div>
    </div>
  );
}

export default App;