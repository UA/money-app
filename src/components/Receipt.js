import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import millify from 'millify'
import Dinero from 'dinero.js'

function Receipt() {
    const products = useSelector((state) => state.products.items)

    const filtered = products.filter((item) => item.qtd > 0)
    let spendMoney = 0
    filtered.map((item) => (spendMoney += item.price * item.qtd))

    if (filtered.length === 0) {
        return null
    }

    return (
        <div className="bg-white mx-60 mt-4 pb-4 flex justify-center text-center">
            <div className="container mt-3 mb-3 text-center w-80 ">
                <div className="text-center font-bold text-3xl pt-5 pb-5 text-black">
                    Your Receipt
                </div>
                {filtered.map((item) => {
                    return (
                        <div
                            className="grid grid-cols-[170px_45px_75px] max-w-[290px] gap-0.5 mx-auto text-center"
                            key={nanoid()}
                        >
                            <span className="text-left text-1xl text-black">
                                {item.name}
                            </span>
                            <span className="text-left">
                                x{millify(item.qtd)}
                            </span>
                            <span className="text-right text-emerald-400 font-bold text-1xl">
                                ${millify(item.price * item.qtd)}
                            </span>
                        </div>
                    )
                })}
                <hr className="w-full h-0.5 bg-black my-2" />
                <div className="flex flex-wrap justify-between">
                    <div>
                        <span className="uppercase font-bold text-black">
                            Total
                        </span>
                    </div>
                    <div className="text-emerald-400 font-bold text-1xl">
                        {Dinero({
                            amount: parseInt(spendMoney * 100),
                        }).toFormat('$0,0')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receipt
