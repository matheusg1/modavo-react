import { useState } from 'react';
import imgLogin from '../../img/img-login.png';
import {
    formataCelular,
    gerarNumeroAleatorio,
    Toast
} from '../../services';


export default function TwoFa() {

    const [celular, setCelular] = useState('');

    const handleChangeCelular = (e) => {
        const celular = e.target.value;
        const celularFormatado = formataCelular(celular);
        setCelular(celularFormatado);
    };

    const enviarSms = () => {

        const numero = gerarNumeroAleatorio();

        if (numero < 6) {
            setCelular('')
            Toast.fire({
                icon: 'success',
                title: 'Código enviado com sucesso'
            })
        }
        else {
            Toast.fire({
                icon: 'error',
                title: 'Falha ao enviar código'
            })
        }
    }

    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center flex-fill'>
                <img className="img-fluid col-10 col-sm-6 d-block d-md-none" src={imgLogin}></img>
                <div className='col-11 col-sm-11 col-md-5'>
                    <h2 className='fs-3 fw-bold text-primary-emphasis mb-md-2'>2FA - Autenticação em dois fatores</h2>
                    <div className='fs-6 fw-medium col-12 col-md-12'>
                        2FA é um método de segurança que exige duas etapas para verificar a identidade aumentando a segurança.</div>
                    <div class="input-group mb-3 mt-4">
                        <input type="text" class="form-control" placeholder="Digite seu número" aria-label="Digite seu número" aria-describedby="button-addon2"
                            maxLength={15}
                            value={celular}
                            onChange={handleChangeCelular}
                        />
                        <button class="btn btn-outline-primary" type="button" id="button-addon2"
                        onClick={enviarSms}>Enviar</button>
                    </div>
                </div>
                <img className="img-fluid col-1 col-md-4 col-lg-3 d-none d-md-block" src={imgLogin}></img>
            </div>
        </>
    )
}
