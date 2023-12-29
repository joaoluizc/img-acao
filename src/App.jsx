import { useState } from 'react';
import data from './assets/data';
import Card from './Card';
import Dice from './Dice';

function App() {
  return (
    <>
      <h1>Imagem & Ação</h1>
      <Dice />
      <Card />
    </>
  )
}

export default App
