function validation(){
    var email = document.getElementById('email-input').value;

    var patEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if(patEmail.test(email)){
        document.getElementById('invalid-msg').innerHTML=''
        document.getElementById('email-input').style.borderColor = 'hsl(223, 100%, 88%)';
        return true
    }else{
        document.getElementById('invalid-msg').innerHTML='Please provide a valid email address';
        document.getElementById('email-input').style.borderColor = 'hsl(354, 100%, 66%)';
        return false;
    }
}