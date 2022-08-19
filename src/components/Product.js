import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateReceipt } from '../redux/productsSlice'
import Dinero from 'dinero.js'

function Product({ product }) {
    const dispatch = useDispatch()
    const money = useSelector((state) => state.products.money)
    const [count, setCount] = useState(product.qtd)

    useEffect(() => {
        dispatch(
            updateReceipt({
                id: product.id,
                qtd: count,
                price: Number(product.price),
            })
        )
    }, [dispatch, count, product.id, product.price])

    const handleChange = (value) => {
        const max = Math.floor(money / product.price) + count
        if (value && value > 0) {
            if (value > max && money >= 0) {
                setCount(max)
            } else {
                setCount(value)
            }
        } else {
            setCount(0)
        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-sm bg-white">
            <img
                className="object-contain h-32 w-full pt-10"
                src={product.img}
                alt={product.name}
            />
            <div className="px-6 py-4">
                <div className="text-gray-700 font-bold text-2xl mb-1">
                    {product.name}
                </div>
                <p className="text-xl text-emerald-400 ">
                    {Dinero({ amount: parseInt(product.price * 100) }).toFormat(
                        '$0,0'
                    )}
                </p>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2 px-4 pt-2 pb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button
                        className={`${
                            product.qtd === 0
                                ? 'bg-slate-100 text-slate-800'
                                : 'bg-red-600 text-white'
                        } appearance-none block rounded w-full font-bold  py-2 px-4 leading-tight focus:outline-none`}
                        disabled={count === 0}
                        onClick={() => setCount(Number(count - 1))}
                    >
                        Sell
                    </button>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <input
                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-2 text-center"
                        type="text"
                        value={count}
                        onChange={(e) => handleChange(Number(e.target.value))}
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button
                        className={`${
                            money < product.price
                                ? 'bg-slate-100 text-slate-800'
                                : 'from-emerald-400 to-green-400'
                        } appearance-none block rounded w-full bg-gradient-to-t py-2 px-4 leading-tight text-white font-bold`}
                        onClick={() => setCount(Number(count + 1))}
                        disabled={money < product.price}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
