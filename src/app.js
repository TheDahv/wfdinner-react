import React from 'react';
import WfdApp from './components/wfd-app';

if (typeof window !== 'undefined') {
  React.render(
    <WfdApp />,
    document.getElementById('wfdapp')
  );
}
