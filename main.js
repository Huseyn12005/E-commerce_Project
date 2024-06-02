$(document).ready(function() {
    $('.navbar').css({
        'padding': '20px',
        'display': 'flex',
        'justify-content': 'space-between',
    });

    if ($(window).width() >= 640) {
      $('.navbar').css({
        'display': 'flex',
        'justify-content': 'space-between',
      });
    }
    $('.menu').css({
      'margin': '0px',
      'width': '2rem', 
      'height': '2rem', 
    });

    if ($(window).width() >= 640) {
        $('.menu').css({
        'display': 'none',
      });
    }
    
      if ($(window).width() >= 640) {
        $('.menuDivv').css({
          'display': 'none',
        });
      }

      $('.labell').css({
        'gap': '16px',
        'display': 'none',
      });
    
      if ($(window).width() >= 640) {
        $('.labell').css({
          'display': 'flex',
          'font-size': '1rem',
          'margin-left': '117px',
          'margin-top': '28px',
          'margin-bottom': '32px',
          'height': '52px',
        });
      }

      $('.imgdiv').css({
        'display': 'flex',
        'gap': '22px',
      });
    
      if ($(window).width() >= 640) {
        $('.imgdiv').css({
          'margin-right': '101px',
          'margin-top': '32px',
          'margin-bottom': '32px',
        });
      }

      $('.category').css({
        'font-weight': '400',
        'margin-top': '50px',
        'margin-left': '20px',
      });
    
      if ($(window).width() >= 640) {
        $('.category').css({
          'margin-top': '80px',
          'margin-left': '101px',
        });
      }

      $('.carddiv').css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
      });

      $('.card').css({
        'position': 'relative',
      });

      $('.product').css({
        'margin-bottom': '10px',
        'height': '330px',
        'width': '354px',
        'object-fit': 'contain',
      });


});

const menuDiv = document.getElementById('menuDiv');
const categoryTags = document.getElementsByClassName("category")
const categoryName = document.getElementById("categoryName")
const tagsArray = Array.from(categoryTags);
let products;


tagsArray.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        tagsArray.forEach(el => {
            el.style.color = "black"
            el.style.borderBottom = "none";
        });
        element.style.color = "green";
        element.style.borderBottom = "2px solid green";
        categoryName.innerText = element.innerText;
    })

});



document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        products = responseData.product;

        const container = document.getElementById('product-card-container');
        console.log(products);

        if (Array.isArray(products)) {
            products.forEach(product => {
                createProductCard(container, product);
            });
        } else {
            throw new Error('Error');
        }
    } catch (error) {
        console.error('Error:', error);
        const container = document.getElementById('product-card-container');
        if (container) {
            container.innerHTML = '<p class="text-red-500">Failed to load products.</p>';
        }
    }
});

function createProductCard(container, product) {

    const productCard = document.createElement('div');
    productCard.className = 'max-w-sm rounded overflow-hidden shadow-lg m-4 sm:h-[444px] sm:w-[386px] p-[16px]';
    productCard.setAttribute("id", product.id);
    productCard.innerHTML = `
    <div class="card">
    <img class="mb-[10px] h-[330px] w-[354px] object-contain" src="${product.gallery[0]}" alt="${product.title}">
    </div>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${product.title}</div>
        <p class="text-gray-900 font-bold text-xl">$${product.price}</p>
    </div>`;
    
    productCard.addEventListener('click', () => {

        products.forEach(p => {
            if (p.id == productCard.id) {
                localStorage.setItem('selectedProduct', JSON.stringify(p));
                window.location.href = "product.html";
            }
        });
    });

    
    container.appendChild(productCard);
}
