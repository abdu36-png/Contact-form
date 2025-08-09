const btn = document.getElementById('btn');
const fieldSet = document.getElementById ('fieldset');
const firstName = document.getElementById ('first-name');
const lastName = document.getElementById ('last-name');
const email = document.getElementById ('email');
const check1 = document.getElementById ('check1');
const check2 = document.getElementById ('check2');
const message = document.getElementById ('message');
const checkbox = document.getElementById ('checkbox');




const error = document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
const bodyy = document.body;
bodyy.style.height = 100 + 'vh';
btn.addEventListener('click', (e) => {
    let hasError = false;

    // Clear previous messages
    

    // firstname validation
    if (firstName.value.trim() === '') {
      bodyy.style.height = 119 + 'vh';
      document.getElementById('one').textContent = 'This field is required';
      firstName.style.borderColor = 'red';
      hasError = true;
    }

    // lastname validation
    if (lastName.value.trim() === '') {
      bodyy.style.height = 119 + 'vh';
      document.getElementById('two').textContent = 'This field is required';
      lastName.style.borderColor = 'red';
      hasError = true;
    }

    // email validation
    if (email.value.trim() === '') {
       bodyy.style.height = 119 + 'vh';
      document.getElementById('three').textContent = 'Please enter a valid email address';
      email.style.borderColor = 'red';
      hasError = true;
    }

    // query validation

    if (!check1.checked && !check2.checked) {
       bodyy.style.height = 119 + 'vh';
      document.getElementById('four').textContent = 'Please select a query type';        
    }

    // textarea validation

    if (message.value.trim() === '') {
       bodyy.style.height = 119 + 'vh';
      document.getElementById('five').textContent = 'This field is required';
      message.style.borderColor = 'red';
      hasError = true;
    }

    // checkbox validation
    if (!checkbox.checked) {
       bodyy.style.height = 119 + 'vh';
      document.getElementById('six').textContent = 'To submit this form, please consent to being contacted';
      hasError = true;
    }


    //prevent form submission if any error exists

    if (hasError) {
        e.preventDefault();
    } else if (!hasError) {
      setInterval( () => {
        document.getElementById('fi-one').style.display = 'flex';
      }, 1000);

      clearInterval()
    }
})


