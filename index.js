function submitInfo() {
    var firstName='';
    var lastName ='';
    var mail ='';
    var Password='';
    
    firstName = document.getElementById('firstName').value; 
    lastName =document.getElementById('lastName').value;
    mail=document.getElementById('email').value;
    Password=document.getElementById('Password').value;
    console.log(firstName);
    console.log(lastName);
    console.log(mail);
    console.log(Password);


    
    if (firstName =='' || lastName =='' || mail =='' || Password =='') {
        alert('please you must fill all field');
    } else {
        alert('Form has been sumitted');
    }
    
}








// function signUp(){
//     confirm('Are you sure you want to submit the form');
//     let user ={};
//     user.name
// }

// function submitInfo() {
//     this.signUp();
//     alert('Form has been submitted')
// }