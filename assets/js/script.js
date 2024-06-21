// Validações dos campos do formulário de cadastro da página ConstantSourceNode.html

/*
    Como acessar o DOM:
    -Por tag: getElementByTagName()
    -Por Id: getElementById()
    -Por Nome: getElementsByName()
    -Por Classe: getElementsByClassName()
    -Por Seletor CSS: querySelector()
*/

// Criando Variaveis que acessem o DOM
let nome = window.document.getElementById('nome')
let company = window.document.getElementById('company')
let email = window.document.getElementById('email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let companyOk = false
let mapa = document.querySelector('#mapa')

// deixando a caixa de texto grande
nome.style.width = '100%'
company.style.width = '100%'
email.style.width = '100%'
number.style.width = '100%'
mensagem.style.width = '100%'

//Validando campos do forms

function validaNome(){

    let txt = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txt.innerHTML = "Nome Inválido"
        txt.style.color ='red'
    }else{
        txt.innerHTML ="Nome Válido"
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaCompany(){

    let txt = document.querySelector('#txtCompany')

    if(nome.value.length < 2){
        txt.innerHTML = "Nome Inválido"
        txt.style.color ='red'
    }else{
        txt.innerHTML ="Nome Válido"
        txt.style.color = 'green'
        companyOk = true
    }
}


function validaEmail(){
   let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML ="Email Válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }

}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color ='red'
        txtAssunto.style.display ='block'
        
    } else{
        txtAssunto.style.display ='none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true &&companyOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha todos os campos corretamente!')
    }
}


function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'
}

function mapaNormal(){
    mapa.style.width='600px'
    mapa.style.height='450px'

}




