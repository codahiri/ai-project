import React from 'react'
import { About } from './about'
import { Blog } from './blog'
import { Car } from './carousel'
import { Footer } from './footer'
import { Header } from './header'
import { Navbar } from './navbar'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Car/>
      <Blog />
      <Footer />
    </>
  )
}
