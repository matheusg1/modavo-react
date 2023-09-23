import { useState } from 'react';
import imgLogin from '../../img/img-login.png';
import {
    formataCelular,
    gerarNumeroAleatorio,
    mostraMensagemToast,
} from '../../services';
import img1 from '../../img/2fa/img-2fa-1.png'
import img2 from '../../img/2fa/img-2fa-2.png'
import img3 from '../../img/2fa/img-2fa-3.png'
import imgArrow from '../../img/2fa/img-2fa-arrow.png'
import Card2fa from '../../components/Card2fa/Card2fa';



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
            mostraMensagemToast('success', 'Código enviado com sucesso')
        }
        else {
            mostraMensagemToast('error', 'Falha ao enviar código')
        }
    }

    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center mt-lg-5'>
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
                <img className="img-fluid col-1 col-md-4 col-lg-3 col-xxl-2 d-none d-md-block" src={imgLogin}></img>
            </div>


            <h2 className='fs-2 text-center py-5'>Como funciona?</h2>
            <div className='d-flex flex-wrap flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch pt-3 pb-5'>
                <Card2fa
                    imagem={img1}
                    tamanhoImagem={"col-8 col-sm-11 col-md-10 col-xxl-7"}
                    titulo="Passo 1"
                    subtitulo="O usuário configura a 2FA em sua conta online, adicionando uma camada extra de segurança."
                />
                <div className='col-1 d-none d-lg-block my-auto'>
                    <img src={imgArrow} className='img-fluid' />
                </div>
                <Card2fa
                    imagem={img2}
                    tamanhoImagem={"col-8 col-sm-11 col-md-10 col-xxl-7"}
                    titulo="Passo 2"
                    subtitulo="Ao tentar fazer login, o usuário insere suas credenciais e recebe um código de verificação via SMS."
                />
                <div className='col-1 d-none d-lg-block my-auto'>
                    <img src={imgArrow} className='img-fluid' />
                </div>
                <Card2fa
                    imagem={img3}
                    tamanhoImagem={"col-8 col-sm-11 col-md-10 col-xxl-7"}
                    titulo="Passo 3"
                    subtitulo="O usuário insere esse código no notebook e conclui o login com segurança."
                />
            </div>

        </>
    )
}
