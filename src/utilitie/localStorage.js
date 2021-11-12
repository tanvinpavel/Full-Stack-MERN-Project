const addToDb = (id) => {
    const exists = getDB();
    let product_cart = {};

    if(!exists){
        product_cart[id] = 1;
    }else{
        product_cart = JSON.parse(exists);
        if(product_cart[id]){
            const newValue = product_cart[id] + 1;
            product_cart[id] = newValue;
        }else{
            product_cart[id] = 1;
        }
    }
    updateDB(product_cart);
}

const getDB = () => localStorage.getItem("product_cart");

const updateDB = item => localStorage.setItem("product_cart",JSON.stringify(item));

const deleteCartItem = id => {
    const exists = getDB();
    if(!exists){

    }else{
        const product_cart = JSON.parse(exists);
        delete product_cart[id];
        updateDB(product_cart);
    }
}

const getStoreCart = () => {
    const exists = getDB();
    return exists ? JSON.parse(exists) : {};
}

const deleteCart = () => {
    localStorage.removeItem('product_cart');
}

export { addToDb, deleteCart, deleteCartItem, getStoreCart }