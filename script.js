let currentUser = document.getElementById("currentUser");
let loginBtn = document.getElementById("loginBtn");
let userPassword = document.getElementById("userPassword");
let messageLogin = document.getElementById("messageLogin");

fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
        printUsers(data);
});

function printUsers(users) {
    //console.log(users);
    // kolla så att värdet vi skriver in, finns i vår array
    loginBtn.addEventListener('click', () => {
        let checkUser = currentUser.value + userPassword.value;
        const checkUserName = obj => obj.userName + obj.password === checkUser;
           // console.log(users.some(checkUserName)) // visar true eller false

            messageLogin.innerHTML = "";
        
        if(users.some(checkUserName) == true) {
            let p = document.createElement("p")
            p.innerText = "Login Success!";
            messageLogin.appendChild(p);
        } else {
            let p = document.createElement("p")
            p.innerText = "Login Failure!";
            messageLogin.appendChild(p);
        }
    })
}


