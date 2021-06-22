import React from 'react';
import './App.css';
import timeline from './components/data/timeline';
import Timeline from './components/Timeline';


function App() {
  console.log('The value of timelineData is', timeline);
  console.log('We should use timelineData in our project somehow...');

  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">{timeline.person}'s social media feed</h1>
    </header>
    <main className="App-main">
      <Timeline events={timeline.events} />
    </main>
  </div>
  )
};

export default App;
