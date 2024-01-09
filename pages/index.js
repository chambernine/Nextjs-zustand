"use client"
import Head from 'next/head'
import Image from 'next/image'
import useStore, { useCounterStore, useThemeStore } from '../zustand/store'
import Counter from '@/components/Counter'
import ThemeControl from '@/components/ThemeControl'
import React, { useEffect, useState } from 'react'


export default function Home() {
  const counts = useStore((state) => state.count)
  const setCount = useStore((state) => state.setCount)

  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)


  const color = useThemeStore((state) => state.color)
  const bgColor = useThemeStore((state) => state.backgroundColor)

  const [colorState, setColorState] = useState({ color: '#000' })
  const [bgColorState, setBgColorState] = useState({ backgroundColor: '#f000' })

  useEffect(() => {
    setColorState(color)
  }, [color]);
  
  useEffect(() => {
    setBgColorState(bgColor)
  }, [bgColor]);

  console.log(`App:render`)
  return (
    <div style={{
      backgroundColor: bgColorState,
      color: colorState
    }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        {counts}
        <button onClick={(e) => setCount()} >counts ++</button>
        <div>
          <Counter />
          <button type="button" onClick={increment}>
            Increment
          </button>
          <button type="button" onClick={decrement}>
            Decrement
          </button>
          <ThemeControl />
        </div>
      </main>
    </div>
  )
}
