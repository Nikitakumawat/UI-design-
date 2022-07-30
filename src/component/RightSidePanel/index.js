import React from 'react';
import './rightSidePanel.css';

function RightSidePanel() {
  return (
    <div className='right__side__panel'>
      <div className='right__side__panel__heading'>Submenu</div>
      <ul className='right__panel__list'>
        <li>Home</li>
        <li>Examples</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default RightSidePanel;
