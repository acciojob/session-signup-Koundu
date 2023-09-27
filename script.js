//your JS code here. If required.
const name = document.querySelector('#name').value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	console.log(e);
	console.log(name);
})