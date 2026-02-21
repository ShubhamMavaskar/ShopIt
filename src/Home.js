import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' 
            src='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/690609b7-d1b6-4770-b18e-5918f3f44a90.png' alt=''/>

            <div className='home_row'>
                <Product  
                id={1}
                title='Premium Cashews Whole, crunchy cashew nuts packed for freshness.' 
                price={99.99} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9c9af0a1-f04e-4ed8-9f96-d198392d1625.png'
                rating={3} 
                />

                <Product 
                id={2}
                title='Fresh Farm Bananas (1 kg)	Naturally sweet yellow bananas.' 
                price={55} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/da8fbfdc-d0fa-4f0c-b7c3-9e905abacd60.png'
                rating={4} 
                />
            </div>

            <div className='home_row'>
                <Product
                id={3}
                title='Premium Basmati Rice (5 kg).' 
                price={549} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/10c18257-4d1a-4239-91fa-cb6954c68a4e.png'
                rating={4}  
                />

                <Product 
                id={4}
                title='Classic White Bread Loaf (400 g).' 
                price={49} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/12df0399-983f-4ec5-9786-8c12fe879b09.png'
                rating={4} 
                />

                <Product 
                id={5}
                title='Farm Fresh Eggs (12 pcs).' 
                price={78} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6ab83c4b-9de6-443e-8870-e50c7dd3b095.png'
                rating={4} 
                />
            </div>

            <div className='home_row'>
                <Product 
                id={6}
                title='Organic Carrots (500 g).' 
                price={54} 
                image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1b95c64d-b52d-4132-a712-c22cb8faddb1.png'
                rating={4} 
                />
            </div>

        </div>
    </div>
  )
}

export default Home
