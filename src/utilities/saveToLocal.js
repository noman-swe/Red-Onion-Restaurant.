const addToDb = id => {
    const shoppingCart = getStoredCart();

    const qunatity = shoppingCart[id];
    if (qunatity) {
        const newQuantity = qunatity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('red-onion', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getStoredCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('red-onion', JSON.stringify(shoppingCart));
    }
}

const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('red-onion');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {}
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('red-onion');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}