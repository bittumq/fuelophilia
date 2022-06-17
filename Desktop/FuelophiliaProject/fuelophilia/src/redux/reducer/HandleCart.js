
function getLocal() {
    let getLoc = JSON.parse(localStorage.getItem("cart")) || []
    return getLoc;
}

const cart = {
    cartdata: getLocal(), alldata: [
        {
            id: 1,
            qty: 1,
            title: "Petrol",
            price: "120",
            per: "/liter",
            image: "",
            btnText: "Order"
        },
        {
            id: 2, qty: 1,
            title: "Desiel",
            price: "100",
            per: "/liter",
            image: "",
            btnText: "Order"
        },
        {
            id: 3, qty: 1,
            title: "CNG",
            price: "80",
            per: "/KG",
            image: "",
            btnText: "Order"
        }

    ]
}

const HandleCart = (state = cart, action) => {
    //const {cart, setCart} = useContext(Cart);
    // console.log(action, "stttttttttttttttttttttt------");
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            console.log(getLocal());
            //HECK IF PRODUCT IS ALREADY EXIST
            return { ...state, cartdata: [...state.cartdata, action.payload] }
        case "DELETEITEM":
            //console.log('delete');
            let demo = state.cartdata.filter((e) => {
                return e.id !== action.payload
            })
            //console.log(demo);
            return { ...state, cartdata: demo }



        // const exist1 = state.find((x) => x.id === product.id);
        // if (exist1.qty === 1) {
        //     return state.filter((x) => x.id !== exist1.id);
        // }
        // else {
        //     return state.map((x) =>
        //         x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
        // }
        // ;

        case "INC":
            let data = state?.cartdata?.map((ee) => {
                if (ee.id === action.payload) {
                    return { ...ee, qty: Number(ee.qty + 1) }
                }
                return ee
            })
            return { ...state, cartdata: data };
        case "DEC":
            let data1 = state?.cartdata?.map((ee) => {
                if (ee.id === action.payload) {
                    return { ...ee, qty: Number(ee.qty - 1) }
                }
                return ee
            })
            return { ...state, cartdata: data1 };

        default:
            return state;

    }
}
export default HandleCart;