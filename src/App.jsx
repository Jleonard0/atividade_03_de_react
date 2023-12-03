import { useState, useEffect } from 'react'
import Head from './components/Head'
import Task from './components/Task'

function App() {
  return (
    <>
      <Head />
      <main className='vh-100 container text-center'>
        <Task></Task>
      </main>
    </>
  )
}

export default App
