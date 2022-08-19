import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/productsSlice'
import Product from './Product'

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.items)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className="h-fit bg-slate-100 pt-8">
            <div className="text-center">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
