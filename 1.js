var carts = document.getElementsByClassName("add-to-cart btn btn-default");

let products = [
    {
        name: "Vsmart Joy4+",
        tag: 'joy4+',
        price: 3290000,
        inCart: 0
    },
    {
        name: 'Vsmart Star 3',
        tag: 'star3',
        price:1990000,
        inCart: 0
    },
    {
        name: "Vsmart Active 3",
        tag: 'active3',
        price:3390000,
        inCart: 0
    },
   
    
    {
        name: 'Vsmart Live',
        tag: 'live',
        price:3490000,
        inCart: 0
    },
    {
        name: 'Vsmart Joy 4',
        tag: 'joy4',
        price:2490000,
        inCart: 0
    },
];

for (let i=0; i <carts.length; i++) {
    carts [i].addEventListener('click', () => {
        console.log(products[i]);
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers () {
    let productsNumbers =localStorage.getItem('cartNumbers');
    if(productsNumbers){
        document.querySelector('.cart span').textContent = productsNumbers+1;
    }
}
function cartNumbers(product) {
    
    let productsNumbers = localStorage.getItem('cartNumbers');

    productsNumbers = parseInt(productsNumbers);
    
    if( productsNumbers) {
        localStorage.setItem('cartNumbers', productsNumbers +1)
        document.querySelector('.cart span').textContent = productsNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1; 
    }
    setItems(product);
    function setItems(product) {
        let cartItems= localStorage.getItem('productInCart');
        cartItems= JSON.parse(cartItems);
        console.log("my cartitems are", cartItems);
        if(cartItems !=null) {
            console.log(cartItems[product.tag]);
           if(cartItems[product.tag] == undefined) {
               cartItems = {
                   ...cartItems,
                   [product.tag]: product
               }
           }
           
           cartItems[product.tag].inCart += 1;
        } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
        
        localStorage.setItem("productInCart", JSON.stringify(cartItems)); 
    }
}
function totalCost(product) {
    let cartcost = localStorage.getItem("totalCost");
    
    if(cartcost !=null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalCost", cartcost + product.price);
    } else{
        localStorage.setItem("totalCost", product.price); 
    }

    alert("Add to cart successfully !!!")
}
  

onLoadCartNumbers();

