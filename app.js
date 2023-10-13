// To fetch 90 dummy products
fetch('https://dummyjson.com/products?limit=36')
    .then(res => res.json())
    .then(json => {
        arrangeGrid(json.products)
    })

// Generate grid item for each product
const arrangeGrid = (products) => {
    const carousel = document.getElementById("carousel");
    const numberOfColumns = Math.ceil(products.length / 3)
    carousel.style.gridTemplateColumns = `repeat(${numberOfColumns}, 200px)`
    for (product of products) {
        const div = document.createElement("div");
        div.className = "carousel-item";
        div.innerHTML = `
        <img class="carousel-item-img" src="${product.thumbnail}" alt="${product.title}">
        <div class="carousel-item-props"> 
            <div class="carousel-item-title">${product.title}</div>
            <div class="carousel-item-price">$ ${product.price}</div>
        </div>
        `;
        carousel.appendChild(div);
    }
}

// To move grid on click of arrow buttons
let currentTranslateX = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("right-arrow").addEventListener('click', () => {
        if (currentTranslateX > -100) {
            const carousel = document.getElementById("carousel");
            currentTranslateX -= 50; // Increase or decrease the value as needed
            carousel.style.transform = `translateX(${currentTranslateX}%)`;
        }
    });
    document.getElementById("left-arrow").addEventListener('click', () => {
        if (currentTranslateX < 0) {
            const carousel = document.getElementById("carousel");
            currentTranslateX += 50; // Increase or decrease the value as needed
            carousel.style.transform = `translateX(${currentTranslateX}%)`;
        }
    });
});