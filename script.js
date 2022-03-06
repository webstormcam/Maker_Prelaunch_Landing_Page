function validateForm(){
    let x=document.getElementById('email').value;
    let xStyle = document.getElementById('email')
    let text;
    if (x ===''){
        text=' Oops! Please add your email'
        xStyle.style ='border: 1px solid red;'
    } else if (x.includes('@')==false){
        text='Oops! Please check your email'
        xStyle.style ='border: 1px solid red;'
    }else if (x.length<5 && x.includes('@')===true){
        text='Oops! Please check your email'
        xStyle.style ='border: 1px solid red;'
    } else if (x.length>=6 && x.includes('@')===true){
        text=''
        document.getElementById("myForm").submit();
     }
    document.getElementById('error').innerHTML=text;
}