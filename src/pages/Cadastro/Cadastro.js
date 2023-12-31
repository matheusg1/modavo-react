import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';
import axios from 'axios';
import {
    cpfEhValido,
    contemNumeroOuCaractereEspecial,
    formataCpf,
    formataCep,
    mostraMensagemToast,
} from '../../services'

export default function Cadastro() {

    const listaEstados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
        "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];

    const listaGeneros = [
        "Agênero",
        "Aingênero/Aeegênero",
        "Aliagênero/Aliusgênero",
        "Altegênero",
        "Ambonec",
        "Andrógine",
        "Apogênero",
        "Aporagênero",
        "Aueegênero/ Auingênero",
        "Bigênero",
        "Béstia/Beluagênero/ Belua",
        "Caelgênero",
        "Cancegênero/Agênero-fluido",
        "Casgênero",
        "Catgênero/Gênero-gate",
        "Centrigênero",
        "Ceterogênero",
        "Cristaline/Cristagênero",
        "Demigênero",
        "Demigênero-fluido/ Demifluide",
        "Dubgênero",
        "Duragênero",
        "Egogênero",
        "Escorigênero/ Scorigênero",
        "Estetigênero/ Videgênero",
        "Femache",
        "Femigênero",
        "Feminino",
        "Fisgênero",
        "Fluxofluide",
        "Genderqueer/Gênero queer",
        "Giaragênero",
        "Gênero neutro",
        "Gênero-alterumano",
        "Gênero-borrão",
        "Gênero-cinza",
        "Gênero-cor/Corgênero",
        "Gênero-estrela",
        "Gênero-estática",
        "Gênero-fluido",
        "Gênero-fluxo",
        "Gênero-fofo",
        "Gênero-inconformista/ Gênero-dissidente",
        "Gênero-nulo",
        "Gênero-orientação",
        "Gênero-poção",
        "Gênero-praia",
        "Gênero-vago",
        "Gênero-vácuo",
        "Hemigênero",
        "Homem não-binárie",
        "Horogênero",
        "Ideegênero/Idingênero",
        "Ilyagênero",
        "Inavire/Nonpuerella/ Nonvirmina",
        "Intergênero/Integênero",
        "Juxera",
        "Kingênero",
        "Laique/Lykh",
        "Libragênero/[Gênero] agênero/Gênero-Libra",
        "Livre de gênero/ Gênero-livre",
        "Magigênero",
        "Mascugênero/ Mascgênero",
        "Masculino",
        "Maverique",
        "Mosaigênero/ Portiogênero",
        "Mulher não-binárie",
        "Multitransicional/ Multitrans",
        "Nanogênero",
        "Neurogênero",
        "Neutrois",
        "Neutroix",
        "Nonangi",
        "Nonpuella/Nonera",
        "Nonpuer/Nonvir",
        "Não-binárie/Não binárie/Nãobinárie",
        "Nímise",
        "Obligênero",
        "Ogligênero",
        "Pangênero",
        "Pixelgênero",
        "Poligênero",
        "Poligênero-fluxo",
        "Pomogênero",
        "Proxvir",
        "Ptilogênero",
        "Qufa/Qupha",
        "Quivergênero",
        "Quoigênero",
        "Schrodigênero/ Schrodingênero",
        "Sem gênero",
        "Solverigênero/ Emigênero",
        "Transandrógine/ Transdrógine",
        "Transfeminine",
        "Transmasculine",
        "Transneutre",
        "Transouterine",
        "Transxenine",
        "Trigênero",
        "Verangênero",
        "Xenogênero",
        "Zomem/Zenino",
        "Zulher/Zenina"
    ]
    const [dadosPessoais, setDadosPessoais] = useState({
        nome: '',
        nascimento: '',
        cpf: '',
        nomeMaterno: '',
        genero: '',
        celular: '',
        telefone: '',
        cep: '',
        logradouro: '',
        estado: '',
        cidade: '',
        bairro: '',
        numero: '',
        complemento: '',
        login: '',
        senha: '',
        confirmaSenha: '',
    })

    const [validacoes, setValidacoes] = useState({
        nome: '',
        nascimento: '',
        cpf: '',
        nomeMaterno: '',
        genero: '',
        celular: '',
        telefone: '',
        cep: '',
        logradouro: '',
        estado: '',
        cidade: '',
        bairro: '',
        numero: '',
        complemento: '',
        login: '',
        senha: '',
        confirmaSenha: '',
    })

    const [cadastrarDisabled, setcadastrarDisabled] = useState(true);

    const mensagemCampoObrigatorio = "Preencha o campo";

    useEffect(() => {
        // Verifique o estado de inputValue e defina o estado de outputValue com base nele.

        for (let validacao in validacoes) {
            if (validacoes[validacao]) {
                setcadastrarDisabled(true);
            }
            else {

                setcadastrarDisabled(false);
            }
        }
    }, [validacoes]);



    const handleChangeNascimento = (e) => {
        setDadosPessoais({ ...dadosPessoais, nascimento: e.target.value });
    }

    const handleChangeNome = (e) => {
        setDadosPessoais({ ...dadosPessoais, nome: e.target.value });
    }

    const handleChangeCpf = (e) => {
        const cpf = e.target.value;
        const cpfFormatado = formataCpf(cpf);
        setDadosPessoais({ ...dadosPessoais, cpf: cpfFormatado });
    };

    const handleChangeCelular = (e) => {
        const celular = e.target.value;        
        setDadosPessoais({ ...dadosPessoais, celular: celular });
    };

    const handleChangeTelefone = (e) => {
        const telefone = e.target.value;        
        setDadosPessoais({ ...dadosPessoais, telefone: telefone });
    };

    const handleChangeNomeMaterno = (e) => {
        setDadosPessoais({ ...dadosPessoais, nomeMaterno: e.target.value });
    }

    const handleChangeCep = (e) => {
        const cep = e.target.value;
        const cepFormatado = formataCep(cep);
        setDadosPessoais({ ...dadosPessoais, cep: cepFormatado });
    }

    function buscaEndereco(cep) {
        if (!dadosPessoais.cep) {
            setValidacoes({ ...validacoes, cep: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, cep: '' });
        }
        if (cep.length < 9) return;
        const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;

        axios.get(viaCepUrl)
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;

                    setDadosPessoais({
                        ...dadosPessoais,
                        cep: data.cep,
                        logradouro: data.logradouro,
                        cidade: data.localidade,
                        estado: data.uf,
                        bairro: data.bairro,

                    });
                    return;
                } else {
                    return;
                }
            })
            .catch(error => {
                return;
            });
    }
    const handleChangeNumero = (e) => {
        setDadosPessoais({ ...dadosPessoais, numero: e.target.value });
    }

    const handleChangeComplemento = (e) => {
        setDadosPessoais({ ...dadosPessoais, complemento: e.target.value });
    }

    const handleChangeLogradouro = (e) => {
        setDadosPessoais({ ...dadosPessoais, logradouro: e.target.value });
    }

    const handleChangeBairro = (e) => {
        setDadosPessoais({ ...dadosPessoais, bairro: e.target.value });
    }

    const handleChangeCidade = (e) => {
        setDadosPessoais({ ...dadosPessoais, cidade: e.target.value });
    }

    const handleChangeEstado = (e) => {
        setDadosPessoais({ ...dadosPessoais, estado: e.target.value });
    }

    const handleChangeGenero = (e) => {
        setDadosPessoais({ ...dadosPessoais, genero: e.target.value });
    }

    const handleChangeLogin = (e) => {

        setDadosPessoais({ ...dadosPessoais, login: e.target.value });
    }

    const handleChangeSenha = (e) => {
        setDadosPessoais({ ...dadosPessoais, senha: e.target.value });
    }

    const handleChangeConfirmaSenha = (e) => {
        setDadosPessoais({ ...dadosPessoais, confirmaSenha: e.target.value });
    }

    const validaNome = () => {
        if (dadosPessoais.nome.length < 14 || dadosPessoais.nome.length > 59) {
            setValidacoes({ ...validacoes, nome: 'Nome deve conter de 15 a 60 letras.' });
        } else if (contemNumeroOuCaractereEspecial(dadosPessoais.nome)) {
            setValidacoes({ ...validacoes, nome: 'Nome deve conter apenas letras.' });
        } else {
            setValidacoes({ ...validacoes, nome: '' });
        }
    };

    const validaNomeMaterno = () => {
        if (!dadosPessoais.nomeMaterno) {
            setValidacoes({ ...validacoes, nomeMaterno: mensagemCampoObrigatorio });
        }
        else if (contemNumeroOuCaractereEspecial(dadosPessoais.nomeMaterno)) {
            setValidacoes({ ...validacoes, nomeMaterno: 'O nome deve conter apenas letras.' });
        } else {
            setValidacoes({ ...validacoes, nomeMaterno: '' });
        }
    };

    const validaCpf = () => {
        if ((dadosPessoais.cpf == "")) {
            setValidacoes({ ...validacoes, cpf: mensagemCampoObrigatorio });
        }
        else if (!cpfEhValido(dadosPessoais.cpf)) {
            setValidacoes({ ...validacoes, cpf: 'CPF inválido' });
        }
        else {
            setValidacoes({ ...validacoes, cpf: '' });
        }
    }

    const validaLogin = () => {
        if (!dadosPessoais.login) {
            setValidacoes({ ...validacoes, login: mensagemCampoObrigatorio });
        }
        else if (contemNumeroOuCaractereEspecial(dadosPessoais.login)) {
            setValidacoes({ ...validacoes, login: 'Login deve ter apenas letras' });
        }
        else if (dadosPessoais.login.length != 6) {
            setValidacoes({ ...validacoes, login: 'Login deve ter 6 letras' });
        }
        else {
            setValidacoes({ ...validacoes, login: '' });
        }
    }

    const validaNascimento = () => {
        if (!dadosPessoais.nascimento) {
            setValidacoes({ ...validacoes, nascimento: mensagemCampoObrigatorio });
        }
        else {
            setValidacoes({ ...validacoes, nascimento: '' });
        }
    }

    const validaTelefone = () => {

        if (dadosPessoais.telefone.includes('_')) {
            setValidacoes({ ...validacoes, telefone: 'Preencha o campo' });
        } else {
            setValidacoes({ ...validacoes, telefone: '' });
        }
    }

    const validaCelular = () => {
        if (dadosPessoais.celular.includes('_')) {
            setValidacoes({ ...validacoes, celular: 'Preencha o campo' });
        }
        else {
            setValidacoes({ ...validacoes, celular: '' });
        }
    }

    const validaEstado = () => {
        if (!dadosPessoais.estado) {
            setValidacoes({ ...validacoes, estado: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, estado: '' });
        }
    }

    const validaGenero = () => {
        if (!dadosPessoais.genero) {
            setValidacoes({ ...validacoes, genero: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, genero: '' });
        }
    }

    const validaCidade = () => {
        if (!dadosPessoais.cidade) {
            setValidacoes({ ...validacoes, cidade: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, cidade: '' });
        }
    }

    const validaLogradouro = () => {
        if (!dadosPessoais.logradouro) {
            setValidacoes({ ...validacoes, logradouro: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, logradouro: '' });
        }
    }

    const validaNumero = () => {
        if (!dadosPessoais.numero) {
            setValidacoes({ ...validacoes, numero: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, numero: '' });
        }
    }

    const validaComplemento = () => {
        if (!dadosPessoais.complemento) {
            setValidacoes({ ...validacoes, complemento: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, complemento: '' });
        }
    }

    const validaBairro = () => {
        if (!dadosPessoais.bairro) {
            setValidacoes({ ...validacoes, bairro: mensagemCampoObrigatorio });
        } else {
            setValidacoes({ ...validacoes, bairro: '' });
        }
    }

    const validaSenha = () => {
        if (!dadosPessoais.senha) {
            setValidacoes({ ...validacoes, senha: mensagemCampoObrigatorio });
        }
        else if (contemNumeroOuCaractereEspecial(dadosPessoais.senha)) {
            setValidacoes({ ...validacoes, senha: 'Senha deve ter apenas letras' });
        }
        else if (dadosPessoais.senha.length != 8) {
            setValidacoes({ ...validacoes, senha: 'Senha deve ter 8 caracteres' });
        }
        else {
            setValidacoes({ ...validacoes, senha: '' });
        }
    }

    const validaConfirmaSenha = () => {
        if (!dadosPessoais.confirmaSenha) {
            setValidacoes({ ...validacoes, confirmaSenha: mensagemCampoObrigatorio });
        }
        else if (dadosPessoais.senha != dadosPessoais.confirmaSenha) {
            setValidacoes({ ...validacoes, confirmaSenha: 'Senhas diferentes.' });
        }
        else {
            setValidacoes({ ...validacoes, confirmaSenha: '' });
        }
    }

    const usuarioExistente = (u) => {
        const users = JSON.parse(localStorage.getItem('usuarios'));
        return u in users;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let novaValidacao = {
            nome: '',
            celular: '',
            telefone: '',
            cpf: '',
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            login: '',
            senha: '',
            confirmaSenha: '',
        }

        let userValido;

        for (const propriedade in dadosPessoais) {
            if (!dadosPessoais[propriedade] || dadosPessoais[propriedade].length == 0) {
                novaValidacao = { ...novaValidacao, [propriedade]: 'Campo obrigatório' };
            }
            else {
                novaValidacao = { ...novaValidacao, [propriedade]: validacoes[propriedade] };
            }
        }

        setValidacoes(novaValidacao);

        for (let validacao in validacoes) {
            if (validacoes[validacao] != '') {
                userValido = false;
                mostraMensagemToast('warning', 'Revise os campos');
                return;
            }
            else {
                userValido = true;
            }
        }

        for (let chave in dadosPessoais) {
            if (dadosPessoais.hasOwnProperty(chave)) {
                const valor = dadosPessoais[chave];
                if (valor == '') {
                    mostraMensagemToast('warning', 'Preencha os campos');
                    return;
                }
            }
        }

        const usuariosArmazenados = localStorage.getItem('usuarios');
        if (usuariosArmazenados) {
            if (userValido && !usuarioExistente(dadosPessoais.login)) {
                const usuarios = JSON.parse(usuariosArmazenados);
                usuarios[dadosPessoais.login] = dadosPessoais
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                mostraMensagemToast('success', 'Usuário criado com sucesso')
            }
            else {
                mostraMensagemToast('error', 'Usuário já existente')
                return;
            }
        }
        else {
            let usuarios = {}
            usuarios[dadosPessoais.login] = dadosPessoais
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            mostraMensagemToast('success', 'Usuário criado com sucesso')
        }
    }

    return (
        <>
            <form className="d-flex flex-column flex-fill align-items-center justify-content-xxl-center pt-3 pb-5"
                onSubmit={handleSubmit}>
                <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-10 col-xxl-11">
                    <h2 className='fs-1 mt-3 mb-4 d-none d-sm-block'>Criar nova conta</h2>
                    <h2 className='fs-1 mt-3 text-center d-block d-sm-none'>Criar nova conta</h2>
                    <div className="input-group">
                        <div className="mb-sm-3 col-12 col-sm-5 col-xl-3 px-3">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control " id="inputNome"
                                name="nome"
                                onChange={handleChangeNome}
                                onBlur={() => validaNome()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.nome}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-3 col-xl-3 px-3">
                            <label htmlFor="inputNascimento" className="form-label">Nascimento</label>
                            <input type="date" className="form-control" id="inputNascimento"
                                name="nascimento"
                                onChange={handleChangeNascimento}
                                onBlur={validaNascimento}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.nascimento}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4 col-xl-2 px-3">
                            <label for="inputCpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="inputCpf"
                                name="cpf"
                                value={dadosPessoais.cpf}
                                onChange={handleChangeCpf}
                                onBlur={() => validaCpf()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.cpf}
                            </div>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-5 col-xl-3 px-3">
                            <label htmlFor="inputNomeMaterno" className="form-label">Nome materno</label>
                            <input type="text" className="form-control" id="inputNomeMaterno"
                                name="nomeMaterno"
                                tabIndex={0}
                                onChange={handleChangeNomeMaterno}
                                onBlur={() => validaNomeMaterno()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.nomeMaterno}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6 col-xl-4 px-3">
                            <label for="inputGenero" className="form-label">Gênero</label>
                            <select type="select" className="form-control" id="inputGenero"
                                name="genero"
                                onChange={handleChangeGenero}
                                onBlur={() => validaGenero()}
                            >
                                <option disabled value="" selected>Selecione</option>
                                {listaGeneros.map((genero, index) => (
                                    <option key={index} value={genero.toLowerCase()}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.genero}
                            </div>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-3 col-xl-2 px-3">
                            <label for="inputCelular" className="form-label">Celular</label>
                            <InputMask
                                id="inputCelular"
                                className="form-control"
                                mask="(+55)99-999999999"
                                name="celular"
                                maskChar="_"
                                value={dadosPessoais.celular}
                                onChange={handleChangeCelular}
                                placeholder="(+55)XX-XXXXXXXXX"
                                onBlur={() => validaCelular()}
                            />                        
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.celular}
                            </div>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-3 col-xl-2 px-3">
                            <label for="inputTelefone" className="form-label">Telefone</label>
                            <InputMask
                                id="inputTelefone"
                                className="form-control"
                                mask="(+55)99-99999999"
                                name="telefone"
                                maskChar="_"
                                value={dadosPessoais.telefone}
                                onChange={handleChangeTelefone}
                                placeholder="(+55)XX-XXXXXXXX"
                                onBlur={() => validaTelefone()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.telefone}
                            </div>
                        </div>


                        <div className="mb-sm-3 col-12 col-sm-2 col-xl-2 px-3">
                            <label htmlFor="inputCep" className="form-label">CEP</label>
                            <input type="text" className="form-control" id="inputCep"
                                maxLength={9}
                                name="cep"
                                value={dadosPessoais.cep}
                                onChange={handleChangeCep}
                                onBlur={() => buscaEndereco(dadosPessoais.cep)}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.cep}
                            </div>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4 col-xl-3 px-3">
                            <label htmlFor="inputCidade" className="form-label">Cidade</label>
                            <input type="text" className="form-control" id="inputCidade" name="cidade"
                                value={dadosPessoais.cidade}
                                onChange={handleChangeCidade}
                                onBlur={() => validaCidade()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.cidade}
                            </div>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4 col-xl-2 px-3">
                            <label htmlFor="inputEstado" className="form-label">Estado</label>
                            <select className="form-select form-control" name="estado"
                                value={dadosPessoais.estado}
                                onChange={handleChangeEstado}
                                onBlur={() => validaEstado()}
                            >
                                <option disabled value="" selected>Selecione</option>
                                {listaEstados.map((estado, index) => (
                                    <option key={index} value={estado}>
                                        {estado}
                                    </option>
                                ))}
                            </select>
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.estado}
                            </div>
                        </div>


                        <div className="mb-sm-3 col-12 col-sm-8 col-xl-6 px-3">
                            <label htmlFor="inputLogradouro" className="form-label">Logradouro</label>
                            <input type="text" className="form-control" id="inputLogradouro"
                                name="logradouro"
                                value={dadosPessoais.logradouro}
                                onChange={handleChangeLogradouro}
                                onBlur={() => validaLogradouro()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.logradouro}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-2 col-xl-2 px-3">
                            <label htmlFor="inputNumero" className="form-label">Número</label>
                            <input type="text" className="form-control" id="inputNumero"
                                name="numero"
                                value={dadosPessoais.numero}
                                onChange={handleChangeNumero}
                                onBlur={() => validaNumero()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.numero}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-3 col-xl-3 px-3">
                            <label htmlFor="inputComplemento" className="form-label">Complemento</label>
                            <input type="text" className="form-control" id="inputComplemento"
                                name="complemento"
                                value={dadosPessoais.complemento}
                                onChange={handleChangeComplemento}
                                onBlur={() => validaComplemento()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.complemento}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6 col-xl-3 px-3">
                            <label htmlFor="inputBairro" className="form-label">Bairro</label>
                            <input type="text" className="form-control" id="inputBairro" name="bairro"
                                value={dadosPessoais.bairro}
                                onChange={handleChangeBairro}
                                onBlur={() => validaBairro()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.bairro}
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="mb-sm-3 col-12 col-sm-4 col-xl-3 px-3">
                            <label for="inputLogin" className="form-label">Login</label>
                            <input type="text" className="form-control" id="inputLogin"
                                name="login"
                                onChange={handleChangeLogin}
                                onBlur={() => validaLogin()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.login}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4 col-xl-3 px-3">
                            <label for="inputSenha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputSenha"
                                name="password"
                                onChange={handleChangeSenha}
                                onBlur={() => validaSenha()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.senha}
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-4 col-xl-3 px-3">
                            <label for="inputConfirmaSenha" className="form-label">Confirmar senha</label>
                            <input type="password" className="form-control" id="inputConfirmaSenha"
                                name="repassword"
                                onChange={handleChangeConfirmaSenha}
                                onBlur={() => validaConfirmaSenha()}
                            />
                            <div className="texto-validacao pb-2 pb-sm-0">
                                {validacoes.confirmaSenha}
                            </div>
                        </div>
                    </div>
                    <div className='text-center  px-3'>
                        <button type="submit" className="btn btn-outline-primary w-100 align-self-center mt-xxl-4" >Cadastrar</button>
                    </div>
                </div>
            </form >
        </>
    )
}