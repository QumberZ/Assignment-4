

function subm(){
    let headline = document.querySelector('.headline')
    let password = document.getElementById("exampleInputPassword1")
    if(password.value == "12345678") 
    {
        document.getElementById('error').innerHTML = 'CORRECT'
        headline.innerText = "The information entered is CORRECT!"
    }
    else
    {
        document.getElementById('error').innerHTML= 'INCORRECT, TRY AGAIN BUDDY😆😆🤡'
            alert("Password is incorrect")
    }
    
   }

   

   