import React from 'react'
import { useId } from 'react'
function InputBox(
  label,
  Amount,
  onAmountChange,
  onCurrencyChange,
  currencyoptions=[],
  selectedCurrency='USD',
  Amountdisable=false,
  currencysdisable=false,
  className = "",
) {
  const amoountinputid = useId();
  return (
  <div className='flex flex-col justify-center items-center align-center'>
        <div className={'bg-amber-50 p-4 rounded-md shadow-md w-1/2 flex flex-col justify-center items-center align-center  ${className}'}>
        <div className='w-1/2'> 
        <label htmlFor={amoountinputid} className='flex'>{label}</label>
        <input id={amoountinputid} type="number" placeholder='Amount' value={Amount} disabled={Amountdisable} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} className='bg-green-500 flex py-1.5 w-1/2' />
        </div>
        <br />
        <div className='w-1/2 text-center'>
        <label className='flex'>Currency type</label>
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencysdisable} className='bg-green-500 flex py-1.5 w-1/2 '>
            {currencyoptions.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        </div>
    </div> 
    </div>
   
  )
}

export default InputBox