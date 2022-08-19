import React from 'react'

function Header() {
    return (
        <header className="p-2">
            <div className="flex justify-center p-12">
                <img
                    src="https://neal.fun/spend/billgates.jpg"
                    alt="Bill Gates"
                    className="shadow rounded-full max-w-md h-32 align-middle border-none"
                />
            </div>

            <h1 className="text-gray-800 text-4xl text-center font-bold pb-10">
                Spend Bill Gates' Money
            </h1>
        </header>
    )
}

export default Header
