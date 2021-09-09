import React from 'react'
import { About } from './about'
import { Footer } from './footer'
import { Header } from './header'
import { Navbar } from './navbar'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
      <About />
    </>
  )
}
