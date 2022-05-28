import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface PropSchema {
  children: React.ReactNode
}

export const Layout = ({ children }: PropSchema) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
