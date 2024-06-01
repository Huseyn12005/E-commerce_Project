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

      $('.product').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'flex-direction': 'column',
      });
    
      if ($(window).width() >= 640) {
        $('.product').css({
          'display': 'flex',
          'flex-direction': 'row',
          'margin-top': '100px',
          'justify-content': 'center',
          'align-items': 'center',
          'margin-left': '100px',
        });
      }

      $('.pimg').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-top': '32px',
        'margin-left': '30px',
        'margin-right': '30px',
      });
    
      if ($(window).width() >= 640) {
        $('.pimg').css({
          'flex-direction': 'column',
          'margin-right': '40px',
        });
      }

      $('.image').css({
        'width': '350px',
        'object-fit': 'contain',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-left': '30px',
        'margin-right': '30px',
      });
    
      if ($(window).width() >= 640) {
        $('.image').css({
          'width': '400px',
          'object-fit': 'contain',
        });
      }

      $('.details').css({
        'display': 'flex',
        'flex-direction': 'column',
      });
    
      if ($(window).width() >= 640) {
        $('.details').css({
          'margin-left': '100px',
        });
      }

      $('.h2').css({
        'margin-bottom': '16px',
        'font-weight': '700',
        'margin-top': '39px',
      });

      $('.size').css({
        'display': 'flex',
        'align-items': 'center',
        'gap': '14px',
        'margin-bottom': '32px',
        'justify-items': 'center',
      });

      $('.color').css({
        'display': 'flex',
        'justify-items': 'center',
        'gap': '2px',
        'margin-bottom': '28px',
      });

      $('.cost').css({
        'margin-bottom': '20px',
        'margin-top': '10px',
      });

      $('.addtocart').css({
        'background-color': '#5ECE7B',
        'padding-top': '16px',
        'padding-bottom': '16px',
        'padding-left': '32px',
        'padding-right': '32px',
        'width': '350px',
        'margin-bottom': '30px',
      });

});


document.addEventListener("DOMContentLoaded", () => {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct) {
        const selectedImage = document.getElementById('selectedImage');
        selectedImage.setAttribute("src", selectedProduct.gallery[0]);
        const title=document.getElementById("title");
        const description=document.getElementById("description");
        const price=document.getElementById("price");
        const detail=document.getElementById("detail");

        
        title.innerText=selectedProduct.title;
        description.innerText=selectedProduct.description;
        price.innerText=selectedProduct.price+"$";

        const imagesDiv=document.getElementById("productImages");
        const colorsDiv=document.getElementById("colors");
        const sizesDiv=document.getElementById("sizes");
        setProductImages(imagesDiv,selectedProduct);
        setColors(colorsDiv,selectedProduct);
        setSizes(sizesDiv,selectedProduct);
    }
})


function setProductImages(imagesDiv, product) {
    let length = product.gallery.length-1;

    while (length >= 0) {

        const img = document.createElement("img");
        img.src= product.gallery[length];
        img.className ="w-[79px] object-container";
        imagesDiv.appendChild(img);
        length--;
    }
}

function setSizes(sizesDiv, product) {
    let length = product.size.length-1;

    while (length >= 0) {

        const div = document.createElement("div");
        div.innerText=product.size[length];
        console.log(product.size[length]);
        div.className ="flex flex-col items-center text-[16px]  py-[13px]  justify-items-center";
        div.style.border="1px solid black";
        div.style.height="55px";
        div.style.width="100px";
        div.style.fontSize='16px';
        sizesDiv.appendChild(div);
        length--;
    }
}

function setColors(colorsDiv, product) {
    let length = product.colors.length-1;

    while (length >= 0) {

        const divS = document.createElement("div");
        divS.style.backgroundColor=product.colors[length];
        divS.style.height="36px";
        divS.style.width="36px";
        colorsDiv.appendChild(divS);
        length--;
    }
}

