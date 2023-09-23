import CardServico from '../../components/CardServico/CardServico';

import imgCampanha from '../../img/img-campanha.png';
import imgSms from '../../img/img-sms.png';
import imgSearch from '../../img/img-search.png';
import imgCadeado from '../../img/img-cadeado.png';
import imgTextoAudio from '../../img/index/img-text-audio.png';
import imgRede from '../../img/index/img-rede.png';

export default function Index() {
    return (
        <>
            <div className='col-12'>
                <div className='d-flex flex-column flex-sm-row col-11 mx-auto my-5'>
                    <img src={imgRede} alt='Ilustração de um celular com representações de mídias sociais, SMS e estatísticas.' className='img-fluid d-block d-sm-none' />
                    <div className='d-flex flex-column justify-content-center'>
                        <h2 className='display-5 text-primary-emphasis fw-bold mb-2'>Integra</h2>
                        <div className='fs-5 fw-light col-9'>Comunique-se com confiança e alcance seus clientes de forma segura através do nosso CPaaS. Uma solução completa para integrar canais de comunicação, como SMS, autenticação de 2 fatores, Número Máscara e muito mais. </div>
                    </div>
                    <img src={imgRede} alt='Ilustração de um celular com representações de mídias sociais, SMS e estatísticas.' className='img-fluid d-none d-sm-block' />
                </div>

                <div className='min-vh-60 d-flex justify-content-center  py-5' id="main">
                    <div className='bg-body-tertiary d-flex flex-column flex-md-row justify-content-center align-items-center' style={{ "--bs-bg-opacity": ".5" }}>
                        <div className='fs-3 fw-light px-4 py-2 col-12 col-sm-9 col-md-4 my-3 my-md-0'>Na Integra, compreendemos o poder da comunicação eficaz. Temos uma gama abrangente de serviços de comunicação,</div>
                        <div className='fs-3 fw-light px-4 py-2 col-12 col-sm-9 col-md-4 my-3 my-md-0'>
                            Projetados para ajudar você a se conectar com seu público de maneira mais impactante e segura do que nunca.</div>
                        <div className='fs-3 fw-light px-4 py-2 col-12 col-sm-9 col-md-4 my-3 my-md-0'> Com nossa experiência e tecnologia de ponta, você pode elevar sua estratégia de comunicação a novos patamares.</div>
                    </div>
                </div>

                <div className='min-vh-100 pt-5' id="produtos">
                    <h3 className='display-4 text-center fw-normal'>Nossos produtos</h3>
                    <div className='d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center align-items-sm-stretch my-5'>
                        <CardServico
                            imagem={imgCadeado}
                            tamanhoImagem={"col-8 col-sm-9 col-md-8 col-xxl-6"}
                            titulo="Autenticação de Dois Fatores"
                            subtitulo="Fortaleça a estratégia de segurança de seu negócio."
                            link="/2fa"
                            descricaoImagem={"Ilustração de personagem mexendo no celular e sentado em cima de um cadeado."}
                            />
                        <CardServico
                            imagem={imgCampanha}
                            tamanhoImagem={"col-8 col-sm-11 col-md-10 col-xxl-7"}
                            titulo="Gerenciador de Campanhas"
                            subtitulo="Impulsione suas campanhas com nosso serviço de envio de SMS em massa."
                            link="/"
                            descricaoImagem={"Ilustração de personagem sentado enviando diversos bilhetes para o mundo."}
                            />
                        <CardServico
                            imagem={imgSearch}
                            tamanhoImagem={"col-5 col-sm-9 col-md-7 col-xxl-5"}
                            titulo="Consulta de Números"
                            subtitulo="Obtenha informações sobre um número de telefone celular de maneira fácil e rápida."
                            link="/"
                            descricaoImagem={"Ilustração de personagem segurando uma lupa apontada para um documento."}
                            />
                        <CardServico
                            imagem={imgSms}
                            tamanhoImagem={"col-5 col-sm-9 col-md-7 col-xxl-5"}
                            titulo="Envio de SMS"
                            subtitulo="Envie SMS avulso de forma fácil e rápida para se conectar com seus clientes."
                            link="/sms"
                            descricaoImagem={"Ilustração de dois personagens trocando mensagens de texto."}
                            />
                        <CardServico
                            imagem={imgTextoAudio}
                            tamanhoImagem={"col-5 col-xxl-4"}
                            titulo="Speech to Text"
                            subtitulo="Converta áudio em texto escrito, transcrevendo gravações de voz em documentos digitais com precisão."
                            link="/"
                            descricaoImagem={"Ilustração de uma caixa de texto com uma representação de áudio dentro."}
                            />
                        <CardServico
                            imagem={imgTextoAudio}
                            tamanhoImagem={"col-5 col-xxl-4"}
                            titulo="Text to Speech"
                            subtitulo="Transforma texto em áudio, proporcionando a reprodução de conteúdo escrito em voz sintetizada."
                            link="/"
                            descricaoImagem={"Ilustração de uma caixa de texto com uma representação de áudio dentro."}
                        />

                    </div>
                </div>
            </div>
        </>
    );
}