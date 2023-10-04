import react from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export function buscaEndereco(cep) {
    if (cep.length < 9) return;
    const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(viaCepUrl)
        .then(response => {
            if (response.status === 200) {
                const data = response.data;

                console.log(`Bairro: ${data.bairro}`);

                return data.json();
            } else {
                console.log('Não foi possível encontrar as informações para este CEP.');
                return;
            }
        })
        .catch(error => {
            console.log('Retornou null');
            return null;
        });
}

//Criado por chatGPT
export function cpfEhValido(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit1 = 11 - (sum % 11);
    if (digit1 === 10 || digit1 === 11) digit1 = 0;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digit2 = 11 - (sum % 11);
    if (digit2 === 10 || digit2 === 11) digit2 = 0;

    if (parseInt(cpf.charAt(9)) === digit1 && parseInt(cpf.charAt(10)) === digit2) {
        return true;
    } else {
        return false;
    }
}

export const formataCpf = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    let formattedInput = '';

    if (cleanedInput.length <= 3) {
        formattedInput = cleanedInput;
    } else if (cleanedInput.length <= 6) {
        formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3)}`;
    } else if (cleanedInput.length <= 9) {
        formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3, 6)}.${cleanedInput.slice(6)}`;
    } else {
        formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3, 6)}.${cleanedInput.slice(6, 9)}-${cleanedInput.slice(9, 11)}`;
    }
    return formattedInput;
};

export const formataCelular = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    let formattedInput = '';

    if (cleanedInput.length <= 2) {
        formattedInput = cleanedInput;
    } else if (cleanedInput.length <= 7) {
        formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2)}`;
    } else {
        formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2, 7)}-${cleanedInput.slice(7, 11)}`;
    }
    return formattedInput;
};

export const formataTelefone = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    let formattedInput = '';

    if (cleanedInput.length <= 2) {
        formattedInput = cleanedInput;
    } else if (cleanedInput.length <= 6) {
        formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2)}`;
    } else {
        formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2, 6)}-${cleanedInput.slice(6, 10)}`;
    }

    return formattedInput;
};

export const formataCep = (input) => {
    const cleanedInput = input.replace(/\D/g, '');

    if (cleanedInput.length > 5) {
        return `${cleanedInput.slice(0, 5)}-${cleanedInput.slice(5)}`;
    };

    return cleanedInput;
};

export const contemNumeroOuCaractereEspecial = (str) => {
    const regex = /[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
    return regex.test(str);
};

export const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const mostraMensagemToast = (icon, mensagem) =>{
    Toast.fire({
        icon: icon,
        title: mensagem
    })
}