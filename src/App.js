import React from 'react';
import Layout from './Containers/Layout/Layout';
import './App.css';
import Pill from './Components/Pill/Pill';
import Button from './Components/UI/Button/Button';

function App() {
  return (
    <div className='App'>
     <Layout>
       <Pill />
       <Button>Open Pill</Button>
       <Button>Close Pill</Button>
     </Layout>
    </div>
  );
}

export default App;
