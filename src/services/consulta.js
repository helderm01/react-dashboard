import { URL_API } from './base';

export function listarConsulta(callback){
    return fetch(`${URL_API}/consulta`)
            .then(resultado => resultado.json().then(callback));
}