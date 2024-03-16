import { useState } from 'react'
import Link from  './components/Link';
import LinkList from './components/LinkList';
import LinkList from './components/LinkList';
import'./App.css';


function App() {
  
return (
  <LinkList>
    <Link label="Quero aprender a programar"/>
    <Link label="Quero aprender data analytics"/>
    <Link />
  </LinkList>

  );
}

export default App
