import { useState, useEffect } from "react";
function useCurrencyinfo(currency){
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/{currency}')
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        .console.log(data)
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyinfo