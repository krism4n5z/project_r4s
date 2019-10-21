import React from 'react';

const SlideItem = ({imageUrl, key, currency, label}) => {
    
    const styles= {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        zIndex: '300',
        textAlign: 'center',
        textShadow: `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`,
        fontSize: '30'
}
      
    return (<div className="slide-item" key={key} style={styles}>
        <h1 className="label">{label}</h1>
        current Currency: {currency}
    </div>)
}

export default SlideItem;