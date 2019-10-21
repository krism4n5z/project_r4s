import React, {useEffect, useState} from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SlideItem from './SlideItem';




const Slide = () => {
    const [id, setId] = useState(0);
    const [data, setData] = useState({currencies:[], isFetching:false});
    const [translateValue, setTranslateValue] = useState(0);
    
    const images = [
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ];

    const labels = [
        "Euro to Pound",
        "Dolar to Franc",
        "Dolar to Pound"
    ]
 
    useEffect(()=> {
        const getCurrentCurrency = async () => {
            try{
                setData({isFetching: true});
                const currencyArr = [];
                const response = await fetch(`https://api.exchangeratesapi.io/latest?base=GBP`);
                const responseData  = await response.json();
                const {EUR:euro ,CHF:franc, USD: dolar} = responseData.rates;
                currencyArr.push(euro,franc/dolar, 1/dolar);
                setData({currencies: currencyArr, isFetching: false});
            }
            catch (e) {
                setData({isFetching: false});
            }
        };
        getCurrentCurrency();
       
    }, [id]);

    const goToPrevSlide = () => {
        id === 0 ? setId(2) : setId(id-1);
        setTranslateValue(id * -(100));
    }
    
    const goToNextSlide = () =>{
       id === 2 ? setId(0) : setId(id+1);
       setTranslateValue(id * -(100));
    }

    return(
        <div className="slide">
            <div className="slide-wrapper"
                style={{
                    transform: `translate(${translateValue}%)`,
                  //  transition: 'transform ease-in-out 0.25s'
                  }}
            >
             {    
                  data.currencies && data.currencies.map((currency, i) => (
                       <SlideItem 
                            currency={currency} 
                            key={i} 
                            imageUrl={images[i]} 
                            label={labels[i]}
                            />
                      ))
            }
            </div>
            <LeftArrow 
	             goToPrevSlide={goToPrevSlide}
	        />
            <RightArrow 
	             goToNextSlide={goToNextSlide}    
            />  
        </div>
    );
}

export default Slide;