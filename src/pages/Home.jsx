import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heders from '../components/Headers'
import Banner from '../components/Banner'
import Categorys from '../components/Categorys'
import FeatureProducts from '../components/products/FeatureProducts'
import Products from '../components/products/Products'
import Footer from '../components/Footer'
import { get_category, get_products } from '../store/reducers/homeReducer'
const Home = () => {
    const dispatch = useDispatch()
    const {products, latest_product, topRated_product, discount_product } = useSelector(state => state.home)
    useEffect(() => {
        dispatch(get_products())
    }, [])
    return (
        <div className='w-full'>
            <Heders />
            <Banner />
            <div className='my-4'>
                <Categorys />
            </div>
            <div className='py-[45px]'>
                <FeatureProducts products={products} />
            </div>
            <div className='py-10'>
                <div className='w-[85%] flex flex-wrap mx-auto'>
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                        <div className='overflow-hidden'>
                            <Products title='Último producto' products={latest_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Producto mejor valorado' products={topRated_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Producto con descuento' products={discount_product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home