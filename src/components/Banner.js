import React from 'react'
import CountUp from 'react-countup'
import { useSelector } from 'react-redux'
import { initialMoney } from '../redux/productsSlice'

function Banner() {
    const money = useSelector((state) => state.products.money)
    return (
        <nav className="sticky top-0 p-5 drop-shadow bg-gradient-to-t from-emerald-400 to-green-400">
            <h1 className="text-white text-4xl text-center font-bold">
                <CountUp
                    start={initialMoney}
                    end={money}
                    preserveValue={true}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix="$"
                />
            </h1>
        </nav>
    )
}

export default Banner
