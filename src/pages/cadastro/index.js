import React, { useState, useEffect } from 'react'
import {
    cpfEhValido,
    contemNumeroOuCaractereEspecial,
    formataCpf,
    formataCelular,
    formataTelefone
} from '../../services'

export default function Cadastro() {

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
        celular: '',
        telefone: '',
        cpf: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        login: '',
        senha: '',
        confirmaSenha: '',
    })

    const [validacoes, setValidacoes] = useState({
        nome: '',
        celular: '',
        telefone: '',
        cpf: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        login: '',
        senha: '',
        confirmaSenha: '',
    })

    const mensagemCampoObrigatorio = "Preencha o campo";

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
        const celularFormatado = formataCelular(celular);
        setDadosPessoais({ ...dadosPessoais, celular: celularFormatado });
    };

    const handleChangeTelefone = (e) => {
        const telefone = e.target.value;
        const telefoneFormatado = formataTelefone(telefone);
        setDadosPessoais({ ...dadosPessoais, telefone: telefoneFormatado });
    };

    const handleChangeNomeMaterno = (e) => {
        setDadosPessoais({ ...dadosPessoais, nomeMaterno: e.target.value });
    }

    const handleChangeLogin = (e) => {
        setDadosPessoais({ ...dadosPessoais, login: e.target.value });
    }

    const handleChangeSenha = (e) => {
        setDadosPessoais({ ...dadosPessoais, senha: e.target.value });
    }

    const handleConfirmaSenha = (e) => {
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

    const validaSenha = () => {
        if (!dadosPessoais.senha) {
            setValidacoes({ ...validacoes, senha: mensagemCampoObrigatorio });
        }
        else if (contemNumeroOuCaractereEspecial(dadosPessoais.senha)) {
            setValidacoes({ ...validacoes, senha: 'Senha deve ter apenas letras' });
        }
        else if (dadosPessoais.senha.length != 8) {
            console.log(dadosPessoais.senha.length)
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <form className="d-flex justify-content-center align-items-center flex-fill"
                onSubmit={handleSubmit}>
                <div className="my-auto p-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 rounded-1">
                    <h2 className='fs-1 mt-2 mb-4 d-none d-sm-block'>Criar nova conta</h2>
                    <h2 className='fs-1 mt-3 text-center d-block d-sm-none'>Criar nova conta</h2>
                    <div className="row g-2">
                        <div className="mb-sm-3 col-12 col-sm-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control " id="inputNome"
                                name="nome"
                                onChange={handleChangeNome}
                                onBlur={() => validaNome()}
                            />
                            <div class="texto-validacao">
                                {validacoes.nome}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-3">
                            <label htmlFor="inputNascimento" className="form-label">Nascimento</label>
                            <input type="date" className="form-control" id="inputNascimento"
                                name="nascimento"
                                onChange={handleChangeNascimento}
                            />
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4 ">
                            <label for="inputCpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="inputCpf"
                                name="cpf"
                                value={dadosPessoais.cpf}
                                onChange={handleChangeCpf}
                                onBlur={() => validaCpf()}
                            />
                            <div class="texto-validacao">
                                {validacoes.cpf}
                            </div>
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-5">
                            <label htmlFor="inputNomeMaterno" className="form-label">Nome materno</label>
                            <input type="text" className="form-control" id="inputNomeMaterno"
                                name="nomeMaterno"
                                tabIndex={0}
                                onChange={handleChangeNomeMaterno}
                                onBlur={() => validaNomeMaterno()}
                            />
                            <div class="texto-validacao">
                                {validacoes.nomeMaterno}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6 col-xl-7">
                            <label for="inputGenero" className="form-label">Gênero</label>
                            <select type="select" className="form-control" id="inputGenero"
                                name="genero"
                            >
                                <option disabled value="" selected>Selecione</option>
                                {listaGeneros.map((genero, index) => (
                                    <option key={index} value={genero.toLowerCase()}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-3">
                            <label for="inputCelular" className="form-label">Celular</label>
                            <input type="text" className="form-control " id="inputCelular"
                                name="celular"
                                maxLength={15}
                                value={dadosPessoais.celular}
                                onChange={handleChangeCelular}
                            />
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-3 ">
                            <label for="inputTelefone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="inputTelefone"
                                name="telefone"
                                value={dadosPessoais.telefone}
                                onChange={handleChangeTelefone}

                            />
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <label htmlFor="inputCep" className="form-label">CEP</label>
                            <input type="text" className="form-control" id="inputCep"
                                maxlength={9}
                                name="cep"
                            />
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6">
                            <label htmlFor="inputLogradouro" className="form-label">Logradouro</label>
                            <input type="text" className="form-control" id="inputLogradouro"
                                name="logradouro"
                            />
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <label htmlFor="inputNumero" className="form-label">Número</label>
                            <input type="text" className="form-control" id="inputNumero"
                                name="numero"
                            />
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <label htmlFor="inputComplemento" className="form-label">Complemento</label>
                            <input type="text" className="form-control" id="inputComplemento"
                                name="complemento"
                            />
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label htmlFor="inputBairro" className="form-label">Bairro</label>
                            <input type="text" className="form-control" id="inputBairro" name="bairro" />
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label htmlFor="inputCidade" className="form-label">Cidade</label>
                            <input type="text" className="form-control" id="inputCidade" name="cidade" />
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label htmlFor="inputEstado" className="form-label">Estado</label>
                            <input type="text" className="form-control" id="inputEstado" name="estado" />
                        </div>

                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label for="inputLogin" className="form-label">Login</label>
                            <input type="text" className="form-control" id="inputLogin"
                                name="login"
                                onChange={handleChangeLogin}
                                onBlur={() => validaLogin()}
                            />
                            <div class="texto-validacao">
                                {validacoes.login}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label for="inputSenha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputSenha"
                                name="password"
                                onChange={handleChangeSenha}
                                onBlur={() => validaSenha()}
                            />
                            <div class="texto-validacao">
                                {validacoes.senha}
                            </div>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <label for="inputConfirmaSenha" className="form-label">Confirmar senha</label>
                            <input type="password" className="form-control" id="inputConfirmaSenha"
                                name="repassword"
                                onChange={handleConfirmaSenha}
                                onBlur={() => validaConfirmaSenha()}
                            />
                            <div class="texto-validacao">
                                {validacoes.confirmaSenha}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-2 w-100">Cadastrar</button>
                </div>
            </form>
        </>
    )
}