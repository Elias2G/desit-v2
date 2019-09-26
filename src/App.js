import React from 'react';
import { Main } from './router';
import Navigation from './router/navigation';
import Footer from './router/footer';

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Footer />
    </>
  );
}

export default App;
