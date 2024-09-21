import { useState } from 'react'

import './index.css'

import Header from './components/layouts/header'
import Main from './components/layouts/main'
import Footer from './components/layouts/footer'

function App() {

  return (
    <>
<div className="wrapper">
  <Header/>
  <Main/>
  <Footer/>
</div>
    </>
  )
}

export default App
