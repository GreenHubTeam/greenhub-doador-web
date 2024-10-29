import { maskBr } from 'js-brasil';

export function formatCNPJ(cnpj) {
    return maskBr.cnpj(cnpj);
}
