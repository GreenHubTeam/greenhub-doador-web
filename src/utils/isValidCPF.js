import { validateBr } from 'js-brasil';

export function isValidCPF(cpf) {
    return validateBr.cpf(cpf);
}