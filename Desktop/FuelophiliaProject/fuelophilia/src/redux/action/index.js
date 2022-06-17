// add item to cart

export const addtocart = (cart) => {
    return {
        type: "ADDITEM",
        payload: cart
    }
}

/// remove to cart

export const deletetoCart = (cart) => {

    return {
        type: "DELETEITEM",
        payload: cart
    }
}

export const inc = (cart) => {
    return {
        type: "INC",
        payload: cart
    }
}

export const dec = (cart) => {
    return {
        type: "DEC",
        payload: cart
    }
}