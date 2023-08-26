/* Desenvolva sua lógica aqui ... */
import { products } from "./productsData.js";
import { categories } from "./productsData.js";

function createCard(products) {
    const card = document.createElement("li");
    const img = document.createElement("img");
    const pBandName = document.createElement("p");
    const h2AlbumTitle = document.createElement("h2");
    const span = document.createElement("span");
    const pProductPrice = document.createElement("p");
    const buttonBuy = document.createElement("button");

    card.classList.add("card");
    pBandName.classList.add("album_info");
    h2AlbumTitle.classList.add("album_title");
    span.classList.add("price_buy__container");
    pProductPrice.classList.add("price");
    buttonBuy.classList.add("buy__button");

    img.src = products.img;

    pBandName.innerText = `${products.band} ${products.year}`;
    h2AlbumTitle.innerText = products.title;
    pProductPrice.innerText = `R$ ${products.price},00`;
    buttonBuy.innerText = "Comprar";

    card.append(img, pBandName, h2AlbumTitle, span);
    span.append(pProductPrice, buttonBuy);

    return card;
}
createCard(products);

function renderButtons(categories) {
    const buttonsGenre = document.querySelector(".buttons__genre");

    const createButtons = categories.forEach((category) => {
        const li =  document.createElement("li");
        const button = document.createElement("button");

        button.classList.add("button");
        button.innerText = category;

        li.appendChild(button);
        buttonsGenre.appendChild(li);
        
    });
    return createButtons;
}
renderButtons(categories);

function renderCards(products) {
    const albumsCards = document.querySelector(".albums__cards");
    albumsCards.innerHTML = "";

    const createCards = products.forEach(album => {
        const structuringCard = createCard(album);
        albumsCards.appendChild(structuringCard);
    });

    return createCards;
};
renderCards(products);

function createFilters(products, categories) {
    const genreButtons = document.querySelectorAll(".button");
    const inputRange = document.getElementById("price__bar");
    const textPrice  = document.querySelector(".text");

    inputRange.value = "100"
    textPrice.innerText = `Até R$ ${inputRange.value}`;

    let filteredArray = products;
    let categoryIndex = 0;
    let inputValue = inputRange.value;

    genreButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryIndex = categories.indexOf(button.innerText);

            if(categoryIndex === 0) {
                filteredArray = products.filter(product => product.price <= inputValue)
                
                renderCards(filteredArray);
            } else {
                filteredArray = products.filter(product => product.category === categoryIndex && product.price <= inputValue)
            
                renderCards(filteredArray);
            }
        });
    });

    inputRange.addEventListener("input", () => {
        inputValue = +inputRange.value;

        textPrice.innerText = `Até R$ ${inputValue}`;

        if(categoryIndex === 0) {
            filteredArray = products.filter(product => product.price <= inputValue)
            
            renderCards(filteredArray);
        } else {
            filteredArray = products.filter(product => product.category === categoryIndex && product.price <= inputValue)
        
            renderCards(filteredArray);
        }
    });

}
createFilters(products, categories);
