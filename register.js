$(document).ready(function() {
    $('body').css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'padding-left': '4px',
        'padding-right': '4px', 
    });

    $('.titlediv').css({
      'display': 'flex',
      'justify-content': 'center',
      'width': '100%',
      'margin-top': '187px',
    });

    if ($(window).width() >= 640) {
      $('.titlediv').css({
        'margin-top': '136px',
      });
    }
    $('.title').css({
      'font-size': '1.5rem',
      'font-weight': '700',
      'color': '#000000',
      'margin-right': '95px',
      'margin-left': '102px',
    });

    if ($(window).width() >= 640) {
      $('.title').css({
        'font-size': '3rem',
      });
    }
    $('.subtitlediv').css({
      'display': 'flex',
      'justify-content': 'center',
      'margin-bottom': '31px',
      'margin-top': '2px',
      'width': '100%',
    });
    $('.subtitle').css({
      'font-size': '0.875rem',
      'color': '#010101',
      'margin-right': '104px',
      'margin-left': '107px',
    });

    if ($(window).width() >= 640) {
      $('.subtitle').css({
        'font-size': '31px',
        'margin-top': '12px',
      });
    }
    // $('.formm').css({
    //   'display': 'flex',
    //   'flex-direction': 'column',
    //   'align-items': 'center',
    //   'margin-right': '30px',
    //   'margin-left': '32px',
    //   'padding-left': '6px', 
    //   'padding-right': '6px', 
    // });

    // if ($(window).width() >= 640) {
    //   $('.formm').css({
    //     'display': 'grid',
    //     'grid-template-columns': 'repeat(2, minmax(0, 1fr))',
    //   });
    // }
    $('.namediv').css({
      'position': 'relative',
      'margin-bottom': '13px',
      'margin-right': '25px',
      'margin-left': '32px',
      'width': '100%',
      'max-width': '374px',
      'border-width': '1px',
      'border-color': '#EEEEEE',
      'border-radius': '30px',
      'outline': 'none',
    });

    $('.namediv').focus(function() {
      $('.namediv').css({
        'box-shadow': '0 0 0 2px rgba(125, 81, 252, 0.5)',
      });
    });

    $('.namediv').blur(function() {
      $('.namediv').css({
        'box-shadow': 'none',
      });
    });

    $('.icondiv').css({
      'position': 'absolute',
      'top': '0',
      'bottom': '0',
      'left': '0',
      'display': 'flex',
      'align-items': 'center',
      'padding-left': '0.75rem',
      'margin-left': '10px',
    });

    $('.icon').css({
        'height': '1.25rem',
        'width': '1.25rem',
        'color': '#A5A5A5',
    });

    $('.name').css({
        'padding-left': '3rem',
        'padding-right': '1rem',
        'border-radius': '30px',
        'width': '340px',
        'margin-left': '30px',
        'height': '45px',
        'border-width': '0',
        'border-color': '#EEEEEE',
        'outline': 'none',
        'color': '#A5A5A5',
        'placeholder-color': '#A5A5A5',
    });

    $('.registerr').css({
      'width': '374px',
      'height': '48px',
      'background-color': '#5ECE7B',
      'margin-top': '49px',
      'color': 'white',
    });

    if ($(window).width() >= 640) {
        $('.registerr').css({
        'margin-top': '45px',
      });
    }

    $('.loginn').css({
        'margin-left': '50px',
        'margin-right': '50px',
        'margin-top': '12px',
        'color': '#0F6450',
        'font-size': '16px',
    });

    if ($(window).width() >= 640) {
        $('.loginn').css({
        'margin-top': '16px',
        'margin-bottom': '136px',
      });
    } else {
        $('.loginn').css({
        'margin-bottom': '312px',
      });
    }

});


const btn = document.getElementById("register");
const names = document.getElementById("names").value;
const surname = document.getElementById("surname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

async function createPost(postData) {
    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await response.json();
        console.log(data);

        alert("successful")
    } catch (error) {
        alert("error");
    }
}

btn.addEventListener("click", () => {
    createPost({ name: names, surname: surname, email: email, password: password });
});