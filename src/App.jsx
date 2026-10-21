// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import KartuMenu from './components/KartuMenu'
import LabelHarga from './components/LabelHarga'
import panel from './components/panel'

const NAMA_PANGGILAN = 'Far'
const N = 32
const gayaJudul = {
  color:'#1f3a5f',
  fontSize:'28px',
  fontWeight: '700',
  latterSpacing:'0.5px'
} 

function App() {
  const jam = 9
  return (
    <>
    <h1 className='judul' style={gayaJudul}>Kantin {NAMA_PANGGILAN}</h1>
    <p>Saldo Awal kartu Kantin : RP{N * 1000}</p>
    <p >{jam < 12?'Selamat Pagi':'Selamat Siang'}</p>
    <button disabled>Bayar</button>
   
    
   </>
  )
}

export default App
