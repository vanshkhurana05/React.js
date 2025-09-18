import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setamount] = useState(0)
  const [to, setto] = useState('USD')
  const [from, setfrom] = useState('INR')
  const [convertedamount, setconvertedamount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setamount(convertedamount)
    setconvertedamount(amount)
  }
  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }
  return (
    <>
    <InputBox/>
    </>
  )
}

export default App
