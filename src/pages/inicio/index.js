import CardServico from '../../components/CardServico/CardServico';
import imgLogin from '../../img/img-login.png';
import imgSms from '../../img/img-sms.png';
import imgSearch from '../../img/img-search.png';
import imgCadeado from '../../img/img-cadeado.png';

export default function Index() {
    return (
        <>
            <div className='col-12 d-flex flex-column flex-sm-row justify-content-around'>
                <CardServico
                    imagem={imgCadeado}
                    tamanhoImagem={"col-4"}
                    titulo="Autenticação de Dois Fatores"
                    subtitulo="Fortaleça a estratégia de segurança de seu negócio."
                />

                <CardServico
                    imagem={imgSms}
                    tamanhoImagem={"col-7"}
                    titulo="Gerenciador de Campanhas"
                    subtitulo="Impulsione suas campanhas com nosso serviço de envio de SMS em massa."
                />

                <CardServico
                    imagem={imgSearch}
                    tamanhoImagem={"col-5"}
                    titulo="Consulta de Números"
                    subtitulo="Obtenha informações sobre um número de telefone celular de maneira fácil e rápida."
                />

                <CardServico
                    imagem={imgSms}
                    tamanhoImagem={"col-5"}
                    titulo="Número Máscara"
                    subtitulo="Ofereça aos seus clientes a capacidade de fazer chamadas e enviar mensagens sem expor seus números de telefone pessoais."
                />
                <CardServico
                    imagem={imgSms}
                    tamanhoImagem={"col-5"}
                    titulo="Número Máscara"
                    subtitulo="Ofereça aos seus clientes a capacidade de fazer chamadas e enviar mensagens sem expor seus números de telefone pessoais."
                />
            </div>
        </>
    );
}
/*

<CardServico
                    imagem={imgSms}
                    titulo="Gerenciador de Campanhas"
                    subtitulo="Impulsione suas campanhas com nosso serviço de envio de SMS em massa."
                />   
                */