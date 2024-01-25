// codigo para con el click abrir y cerrar cosas en el menu
let menuEmail = document.querySelector(".navbar-email") 
let desktopMenu = document.querySelector(".desktop-menu") 
let menuHamburguesa = document.querySelector(".menu") 
let mobileMenu = document.querySelector(".mobile-menu") 
let carrito = document.querySelector(".navbar-shopping-cart") 
let cartDitail = document.querySelector(".product-detail") 


let toogleShoppingCart =()=> {
    cartDitail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
carrito.addEventListener('click', toogleShoppingCart);

let toogleMobileMenu =()=> {
    mobileMenu.classList.toggle('inactive')
    cartDitail.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
menuHamburguesa.addEventListener('click', toogleMobileMenu);

let toggleDesktopMenu =()=>{ 
    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
    cartDitail.classList.add('inactive')
}
menuEmail.addEventListener('click',toggleDesktopMenu);


//codigo para 
const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 


//se puso el for dentro de una funcion para poder reutilizarlo si es que se quiere en otro lado
const renderProducts = (arr)=>{for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productFigure = document.createElement('figure');
    const productImgIcon = document.createElement('img');
    productImgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    // una vez hecho la maquetacion del producto de html en js se tiene que poner una adentro de la otra, aca arriba solo se creo un dic, una img,otro div ,ect
    productFigure.appendChild(productImgIcon); // de esta manera se metio la img dentro de el figure
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // como vamos a tener q meter el div de productCard dentro del div en html tenemos que traernos ese div
    const cardsContainer = document.querySelector('.cards-container');
    //ahora si lo metemos en div
    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);