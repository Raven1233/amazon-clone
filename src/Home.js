import React, { useRef, useState } from 'react';
import Product  from './Product';
import './Home.css';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={611.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React. Js, Book by Robin Wieruch"
                        price={739.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51SAYwSIHlS.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="HUAWEI Band 6 Fitness Tracker Smartwatch for Men Women, 1.47''AMOLED Color Screen, SpO2,24H Heart Rate Monitor,14 Days Battery Life,Female Cycle Tracker, 5ATM Waterproof, Global Version,Black"
                        price={20199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={8998.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={55598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={221094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                    <Product
                        id="82933267"
                        title="Acer Predator X35 1800R Curved 35 Inch UltraWide QHD Gaming Monitor I G-SYNC Ultimate I Quantum Dot I 200Hz I VESA Display HDR 1000 I Adjustable Stand I Display Port, HDMI Port & USB 3.0 HUB"
                        price={184868.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61PG4UvgJxS._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="908245364"
                        title="Victus by HP Ryzen 7 5800H 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/6GB RTX 3060 Graphics/Flicker Free Display/144Hz/Win 10/MS Office/Mica Silver/2.48 Kg), 16-e0360AX"
                        price={109990.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/713aQxv9KHS._SL1324_.jpg"
                    />
                    <Product
                        id="908876884"
                        title="ASUS ROG Zephyrus G14 (2021), 14-inch (35.56 cms) FHD 60Hz, AMD Ryzen 7 5800HS, GeForce GTX 1650 4GB Graphics, Gaming Laptop(8GB/512GB SSD/Office 2019/Windows 10/Gray/1.6 Kg), GA401QH-BM072TS"
                        price={89990.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81rOuSWZtvL._SL1500_.jpg"
                    />
                    <Product
                        id="908987655"
                        title="ASUS ROG Strix G17 (2021), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 5800H, GeForce RTX 3050 4GB Graphics, Gaming Laptop (8GB/1TB SSD/Windows 10/Original Black/2.4 Kg), G713QC-HX052T"
                        price={97990.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fkB1F3cVL._SL1500_.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product
                        id="245364732"
                        title="Samsung Galaxy Note 10 (Aura Red, 8GB RAM, 256GB Storage)"
                        price={73600.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/710H5rWYI0L._SL1500_.jpg"
                    />
                    <Product
                        id="768844321"
                        title="OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)"
                        price={38999.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71CuwgwCQdL._SL1500_.jpg"
                    />
                    <Product
                        id="765598761"
                        title="New Apple iPhone 11 (64GB) - Black"
                        price={50999.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product
                        id="53647321"
                        title="Razer Viper 8KHz Ambidextrous Esports Wired Gaming Mouse with 8000Hz Polling Rate | 20,000 DPI Optical Sensor - Chroma RGB Lighting - RZ01-03580100-R3M1"
                        price={7081.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61BOpunqVvL._SL1500_.jpg"
                    />
                    <Product
                        id="688443217"
                        title="Glorious Model O Wireless Gaming Mouse - Matte Black"
                        price={10199.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Dfz4HIvoS._SL1500_.jpg"
                    />
                    <Product
                        id="765598761"
                        title="Cooler Master MM711 RGB-LED Lightweight 60g Wired Gaming Mouse - 16000 DPI Optical Sensor, 20 Million Click Omron Switches, Smooth Glide PTFE Feet, and Ambidextrous Honeycomb Shell"
                        price={3690.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61dkEpmakfL._SL1200_.jpg"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
