import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
import Footer from './components/Footer/Footer';
export const DataContext = createContext([]);

function App() {
  const Data = useLoaderData();
  return (
    <div className="App font-mono">
      <Header></Header>
      <DataContext.Provider value={Data.jobs}>
        <Outlet></Outlet>
      </DataContext.Provider>
      <Footer></Footer>
    </div>
  )
}

export default App
