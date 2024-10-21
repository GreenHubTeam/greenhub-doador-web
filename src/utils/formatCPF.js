import { maskBr } from 'js-brasil';

export function formatCPF(cpf) {
    return maskBr.cpf(cpf);
}