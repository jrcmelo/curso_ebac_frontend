const form = document.getElementById('form-validar');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
let formEValido = false;

function validaCampo(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const mensagemSucesso = `Formulário válido! <b>${valorB}</b> é maior que <b>${valorA}</b>.`;
    
    formEValido = validaCampo(valorA, valorB);
    //formEValido = valorB > valorA;
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoA.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    formEValido = validaCampo(event.target.value, campoB);

    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});