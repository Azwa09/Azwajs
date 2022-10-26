function login() {
    let password = document.getElementById('password').value;
    var UpperCase = password.match(/[A-Z]/);
    var LowerCase = password.match(/[a-z]/);
    var number = password.match(/[1-20]/);
    var symbol = password.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);

    if (password.length >= 12) {
        a = true;
    }
    else {
        alert('your password need to be atleast 6 character');
    }

    if (password.UpperCase) {
        b = true;
    }
    else {
        alert('Please use capital letter');
    }

    if (password.LowerCase) {
        c = true;
    }
    else {
        alert('please use small letter');
    }

    if (password.number) {
        d = true;
    }
    else {
        alert('please use number');
    }

    if (password.symbol) {
        e = true;
    }
    else {
        alert('sorry, your password doest have symbol');
    }

    if(a == true && b == true && c == true && d == true && e ==true){
        alert('Tahniah')
    }
    else if(a != true && b != true && c != true && d != true && e !=true){
        /*pass block*/
    }

}