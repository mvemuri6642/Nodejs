
function loadDoc(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;

    if(email=='manu' && pass=='manu'){
        document.getElementById('head').innerHTML='Welcome Manohar';
        
    }
    else {
        alert('Invalid Credentials');
    }
}