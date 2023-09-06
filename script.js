
  function loginValidation(){
    // event.preventDefault();

    const form = document.getElementById('form');
    const email = document.getElementById('email').value;   
    const text = document.getElementById('text');
   
    // const button = document.getElementById('button');

    // const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if(email.match(regx)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Valid Email";
        text.style.color = "green";
        wrapper.style.display = 'none';
        wrapper1.style.display = 'block';
        form.focus();
        return false;
       
     
    }
    else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Valid Email Address Required.";
        text.style.color = "red";
        // wrapper.style.display = 'none';
        // wrapper1.style.display = 'block';
        wrapper1.style.display = 'none';
        
        form.focus();
        return false;
        // wrapper.style.display = 'none';
        // wrapper1.style.display = 'block';
    }

    


    // if(email === "") {
    //     form.classList.add('valid');
    //     form.classList.remove('invalid');
    //     text.innerHTML = "";
    //     text.style.color = "red";
    // }

    // let inputValue = form.value
    //     wrapper1.innerHTML = inputValue

        // const wrapper = document.getElementById('wrapper');
        
        // const wrapper1 = document.getElementById('wrapper1');
        // const button = document.getElementById('button');
    
        // wrapper.style.display = 'none';
        // wrapper1.style.display = 'block';

       
}
button.addEventListener('click',loginValidation);




const wrapper =document.getElementById('wrapper');
const wrapper1 =document.getElementById('wrapper1');
const button1 = document.getElementById('button1');

function saveinput(){
    wrapper.style.display = 'block';
    wrapper1.style.display = 'none';
}


button1.addEventListener('click',saveinput);