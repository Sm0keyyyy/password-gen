let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveBtn = document.getElementById('saveBtn')


const generatePass =(len) =>{
const lowAlpha = 'abcdefghijlmnopqrstuvwxyz'
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numeric = "0123456789"
const symbols = "~!@#$%^&*()-_+={}:;<>?/.,`"

const data = lowAlpha + upperAlpha + numeric + symbols;
let generate = '';

for(let i =0; i<len; i++){
    generate += data[~~(Math.random() * data.length)]
}
return generate
}

const getPass = () => {
    if(passwordLength.value <=3){
        alert('password harus lebih dari 3 kata')
    }else{
        
            const newPass = generatePass(passwordLength.value)
            password.value = newPass

    }
}

const save = () =>{
    const myPass = password.value
    saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodeURIComponent(`password saya : ${myPass}`))
    saveBtn.setAttribute('download','myPasswordLOG.txt')
}