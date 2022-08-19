import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const res = await axios(
            `${process.env.REACT_APP_API_BASE_ENDPOINT}/products`
        )
        return res.data
    }
)

export const initialMoney = 100000000000

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        receiptItems: [],
        money: initialMoney,
    },
    reducers: {
        updateReceipt: (state, action) => {
            const { id, qtd } = action.payload
            const item = state.items.find((tmp) => tmp.id === id)
            item.qtd = qtd
            let price = 0

            state.items.map(
                (tmp) => (price += Number(tmp.qtd) * Number(tmp.price))
            )

            state.money = Number(initialMoney) - Number(price)
        },
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload
        },
    },
})

export const { updateReceipt } = productsSlice.actions

export default productsSlice.reducer
