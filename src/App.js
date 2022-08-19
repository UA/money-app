import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Receipt from './components/Receipt'

function App() {
    return (
        <div className="App">
            <section className="text-gray-600 bg-slate-100 body-font relative">
                <Navbar />
                <figure className="bg-white mx-60 mt-4 ">
                    <Header />
                    <Banner />
                    <Products />
                </figure>
                <Receipt />
                <Footer />
            </section>
        </div>
    )
}

export default App
