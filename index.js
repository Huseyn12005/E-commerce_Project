$(document).ready(function() {

    $('.titlediv').css({
        'display': 'flex',
        'justify-content': 'center',
        'width': '100%',
        'margin-top': '157px'
    });
    


    $('.title').css({
        'font-size': '1.5rem',
        'line-height': '2rem',
        'font-weight': '700',
        'color': '#000000',
        'margin-right': '95px',
        'margin-left': '102px'
    });
    
    if ($(window).width() >= 640) {
      $('.title').css({
        'font-size': '3rem',
        'line-height': '1'
      });
    }

    $('.subtitlediv').css({
      'display': 'flex',
      'justify-content': 'center',
      'width': '100%',
      'margin-bottom': '31px',
      'margin-top': '2px'
    });

    $('.subtitle').css({
        'margin-right': '104px',
        'margin-left': '107px',
        'color': '#010101',
        'font-size': '16px',
    });
    
    if ($(window).width() >= 640) {
        $('.subtitle').css({
        'font-size': '31px',
         'margin-top': '12px',
    });
    }

    $('.emaildiv').css({
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
    
      $('.emaildiv').focus(function() {
        $('.emaildiv').css({
          'box-shadow': '0 0 0 2px rgba(125, 81, 252, 0.5)',
        });
      });
    
      $('.emaildiv').blur(function() {
        $('.emaildiv').css({
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

    $('.email').css({
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

    $('.loginn').css({
        'width': '374px',
        'height': '48px',
        'background-color': '#5ECE7B',
        'margin-top': '49px',
        'color': 'white'
    });
    
    if ($(window).width() >= 640) {
    $('.loginn').css({
      'margin-top': '45px'
    });
    }

    $('.registerr').css({
        'margin-left': '50px',
        'margin-right': '50px',
        'margin-top': '12px',
        'color': '#0F6450',
        'font-size': '16px',
    });
    
      if ($(window).width() >= 640) {
        $('.registerr').css({
          'margin-top': '16px',
          'margin-bottom': '136px',
        });
      } else {
        $('.registerr').css({
          'margin-bottom': '312px',
        });
      }
});

const btn = document.getElementById("login");

async function checkLogin(postData) {
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
            window.location.href = "main.html";
        } else {
            alert("Login failed. Please check your credentials and try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while logging in.");
    }
}


btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    checkLogin({ email: email, password: password });
});
