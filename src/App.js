import React from 'react';
import Layout from './Containers/Layout/Layout';
import './App.css';
import Pill from './Components/Pill/Pill';

function App() {
  return (
    <div className='App'>
     <Layout>
       <Pill />
     </Layout>
    </div>
  );
}

export default App;
