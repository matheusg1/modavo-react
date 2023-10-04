import { useState } from 'react';
import imgSms from '../../img/img-sms.png';
import {
    formataCelular,
    gerarNumeroAleatorio,
    mostraMensagemToast
} from '../../services';

export default function Sms() {
    const [celular, setCelular] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleChangeCelular = (e) => {
        const celular = e.target.value;
        const celularFormatado = formataCelular(celular);
        setCelular(celularFormatado);
    };

    const enviarSms = () => {

        const numero = gerarNumeroAleatorio();

        if (!celular.length) {
            mostraMensagemToast('warning', 'Preencha o campo')
            return;
        }

        if (numero < 6) {
            setCelular('')
            setMensagem('')
            mostraMensagemToast('success', 'SMS enviado com sucesso')
        }
        else {
            mostraMensagemToast('error', 'Falha ao enviar SMS')
        }
    }

    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center flex-fill'>
                <img className="img-fluid col-10 col-sm-6 d-block d-md-none" src={imgSms}></img>
                <div className='col-11 col-sm-11 col-md-5'>
                    <h2 className='fs-3 fw-bold text-primary-emphasis mb-md-2'>SMS</h2>
                    <div className='fs-6 fw-medium col-12 col-md-12'>
                        Envie SMS avulso de forma fácil e rápida para se conectar com seus clientes. Controle total em suas mensagens.</div>
                    <div class="input-group">
                        <textarea class="form-control mt-4 mb-3" aria-label="Texto" placeholder="Digite a mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Digite seu número" aria-label="Digite seu número" aria-describedby="button-addon2"
                            maxLength={15}
                            value={celular}
                            onChange={handleChangeCelular}
                        />
                        <button class="btn btn-outline-primary" type="button" id="button-addon2"
                            onClick={enviarSms}>Enviar</button>
                    </div>
                </div>
                <img className="img-fluid col-1 col-md-4 col-lg-3 col-xxl-2 ms-4 d-none d-md-block"
                    src={imgSms}
                    alt='Ilustração de dois personagens trocando mensagens de texto.' />
            </div>
            <div className='container'>
                <div className='d-flex'>
                    <img className="img-fluid col-1 col-md-4 col-lg-3 col-xxl-2 ms-4 d-none d-md-block"
                        src={imgSms} />
                    <p>
                        Com as poderosas APIs da Modavo, a gestão de campanhas SMS atinge um novo nível de eficiência. Através dessa plataforma inovadora, qualquer empresa pode enviar mensagens de texto ou voz personalizadas para seus clientes, prospects ou fornecedores de forma fácil e eficaz.

                        Aproveite a segurança, velocidade e confiabilidade dessa solução para impulsionar o crescimento dos seus negócios e fortalecer o relacionamento com seus clientes.

                        Não perca tempo, experimente agora mesmo e eleve suas comunicações empresariais a um novo patamar.
                    </p>
                </div>
            </div>
        </>
    )
}