const form = document.getElementById('form-validar');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
let formEValido = false;

function validaCampo(valorA, valorB) {
    return valorB > valorA;
}

function validaFormulario() {
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    formEValido = validaCampo(valorA, valorB);

    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const mensagemSucesso = `Formulário válido! <b>${valorB}</b> é maior que <b>${valorA}</b>.`;
    
    formEValido = validaCampo(valorA, valorB);
    
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoA.addEventListener('keyup', validaFormulario);
campoB.addEventListener('keyup', validaFormulario);