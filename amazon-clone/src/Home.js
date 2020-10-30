import React from 'react'
import './Home.css'
import Product from './Product'

function Home(){
    return(
        <div className = 'home'>
            <img className = 'home__banner'
            src = 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Unrec_PC_Hero_1x._CB417682744_.jpg'
            alt = '' />

            <div class = 'product__row'>
                <Product id = "1"
                title = 'OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)'
                price = {42000}
                image = 'https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {5}
                />

                <Product id = "2"
                title = 'Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)'
                price = {2249}
                image = 'https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {4}
                />
            </div>

            <div class = 'product__row'>
                <Product id = "3"
                title = 'ZOTAC Gaming GeForce RTX 2080 Ti ArcticStorm 11GB GDDR6 Graphics Card'
                price = {134500}
                image = 'https://m.media-amazon.com/images/I/81dsGFdYbZL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {5}
                />

                <Product id = "4"
                title = 'Lenovo Legion 5i 10th Gen Intel Core i5 15.6 inch Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg), 82AU00B5IN'
                price = {72990}
                image = 'https://m.media-amazon.com/images/I/61p3lA4N3uL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {5}
                />

                <Product id = "5"
                title = 'AMD Ryzen 7 2700 Desktop Processor 8 Cores up to 4.1GHz 20MB Cache AM4 Socket'
                price = {17599}
                image = 'https://m.media-amazon.com/images/I/51XoylGq9iL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {5}
                />
            </div>

            <div class = 'product__row'>
                <Product id = "12345"
                title = 'MSI Optix G27C4 27" Full HD 1920 x 1080 1ms (MPRT) 165 Hz HDMI, DisplayPort AMD FreeSync Curved Gaming Monitor'
                price = {22999}
                image = 'https://m.media-amazon.com/images/I/61pRgm0+bbL._AC_UY327_FMwebp_QL65_.jpg'
                rating = {5}
                />
            </div>

        </div>
    )
}

export default Home