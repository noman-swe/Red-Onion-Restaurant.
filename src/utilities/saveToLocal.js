const addToDb = id => {
    const cartObj = getStoredCart();

    const qunatity = cartObj[id];
    if (qunatity) {
        const newQuantity = qunatity + 1;
        cartObj[id] = newQuantity;
    }
    else {
        cartObj[id] = 1;
        localStorage.setItem('red-onion', JSON.stringify(cartObj));
    }

}

const getStoredCart = () => {
    let cartObj = {};
    const storedCart = localStorage.getItem('red-onion');
    if (storedCart) {
        cartObj = JSON.parse(cartObj);
    } else {
        cartObj = {}
    }
    return cartObj;
}

export {
    addToDb,
    getStoredCart
}