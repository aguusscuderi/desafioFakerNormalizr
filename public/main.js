
let chat_container = document.getElementById("app_chat")
let mensaje = document.getElementById("inputtext")
let email =  document.getElementById("email_user")
let name =  document.getElementById("name_user")
let surname =  document.getElementById("surname_user")
let edad =  document.getElementById("edad_user")
let alias =  document.getElementById("alias_user")
let btn = document.getElementById("mibtn")
let p = document.getElementById("contenedor")
const form_data_user = document.getElementById('form_data_user')
let compression = document.getElementById('compression')


form_data_user.addEventListener('submit', e =>{
    console.log('clicked')
    e.preventDefault()
    saveMessage(name.value, email.value, mensaje.value, surname.value, edad.value, alias.value)
})