import { URL_API } from './base';

export function consultarFaturamento(callback){
    return fetch(`${URL_API}/faturamento`)
            .then(resultado => resultado.json().then(callback));
}