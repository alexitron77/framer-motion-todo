// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import localFont from 'next/font/local'
import { TodoProvider } from '../contexts/todoContext'
import './styles.css'

const myFont = localFont({ src: '../fonts/Arvo-Regular.ttf' })

export default function MyApp({ Component, pageProps }) {

  return (
    <main className={myFont.className}>
      <ChakraProvider>
        <TodoProvider>
          <Component {...pageProps} />
        </TodoProvider>
      </ChakraProvider>
    </main>)
}