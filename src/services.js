import react from 'react';



//Criado por chatGPT
export function cpfEhValido(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit1 = 11 - (sum % 11);
    if (digit1 === 10 || digit1 === 11) digit1 = 0;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digit2 = 11 - (sum % 11);
    if (digit2 === 10 || digit2 === 11) digit2 = 0;

    // Verifica se os dígitos calculados coincidem com os dígitos informados
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

export const contemNumeroOuCaractereEspecial = (str) => {
    const regex = /[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
    return regex.test(str);
};