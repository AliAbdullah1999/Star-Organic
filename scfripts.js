document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for category slider
    const swiper = new Swiper('.category-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
        },
    });

    // Basic cart functionality (placeholder)
    let cartCount = 0;
    const cartButton = document.querySelector('#cart');
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            cartCount++;
            cartButton.textContent = `Cart (${cartCount})`;
            alert('Item added to cart!');
        });
    });
});