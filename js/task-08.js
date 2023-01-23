

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
  
  const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('All fields are required to be completed!')
    }
  const formData = new FormData(event.currentTarget);
    let userData = [];
    formData.forEach((value, name) => {
        userData.push({ name, value });
    }) 
    
    console.log(userData)
     
    event.currentTarget.reset()
}
