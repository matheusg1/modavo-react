import React, { useState, useEffect } from 'react'
import EnderecoInputs from '../../components/Endereco';
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
        login : '',
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


    const campoObrigatorio = "Preencha o campo";

    const handleChangeNascimento = (event) => {
        console.log(event.target.value);
        //Validações p/ datas futuras
    }

    const formatCelular = (input) => {
        const cleanedInput = input.replace(/\D/g, '');
        let formattedInput = '';

        if (cleanedInput.length <= 2) {
            formattedInput = cleanedInput;
        } else if (cleanedInput.length <= 7) {
            formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2)}`;
        } else {
            formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2, 7)}-${cleanedInput.slice(7, 11)}`;
        }
        return formattedInput;
    };

    const handleChangeNome = (e) => {

        setDadosPessoais({ ...dadosPessoais, nome: e.target.value });
    }

    const handleChangeCpf = (e) => {
        const input = e.target.value;
        const formattedInput = formatCpf(input);
        setDadosPessoais({ ...dadosPessoais, cpf: formattedInput });
    };

    const handleChangeCelular = (e) => {
        const input = e.target.value;
        const formattedInput = formatCelular(input);
        setDadosPessoais({ ...dadosPessoais, celular: formattedInput });
    };

    const handleChangeTelefone = (e) => {
        const input = e.target.value;
        const formattedInput = formatTelefone(input);
        setDadosPessoais({ ...dadosPessoais, telefone: formattedInput });
    };

    const formatCpf = (input) => {
        const cleanedInput = input.replace(/\D/g, '');
        let formattedInput = '';

        if (cleanedInput.length <= 3) {
            formattedInput = cleanedInput;
        } else if (cleanedInput.length <= 6) {
            formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3)}`;
        } else if (cleanedInput.length <= 9) {
            formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3, 6)}.${cleanedInput.slice(6)}`;
        } else {
            formattedInput = `${cleanedInput.slice(0, 3)}.${cleanedInput.slice(3, 6)}.${cleanedInput.slice(6, 9)}-${cleanedInput.slice(9, 11)}`;
        }
        return formattedInput;
    };

    const formatTelefone = (input) => {
        const cleanedInput = input.replace(/\D/g, '');
        let formattedInput = '';

        if (cleanedInput.length <= 2) {
            formattedInput = cleanedInput;
        } else if (cleanedInput.length <= 6) {
            formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2)}`;
        } else {
            formattedInput = `(${cleanedInput.slice(0, 2)}) ${cleanedInput.slice(2, 6)}-${cleanedInput.slice(6, 10)}`;
        }

        return formattedInput;
    };


    const handleChangeNomeMaterno = (e) => {
        setDadosPessoais({ ...dadosPessoais, nomeMaterno: e.target.value });
    }

    const handleChangeLogin = (e) => {
        setDadosPessoais({ ...dadosPessoais, login: e.target.value });
        console.log(dadosPessoais.login)
    }

    const handleChangeSenha = (e) => {
        setDadosPessoais({ ...dadosPessoais, senha: e.target.value });
    }

    const handleConfirmaSenha = (e) => {
        setDadosPessoais({ ...dadosPessoais, confirmaSenha: e.target.value });
    }
    
    const validaSenha = () => {
        if (contemNumeroOuCaractereEspecial(dadosPessoais.senha)) {            
            setValidacoes({ ...validacoes, senha: 'Senha deve ter apenas letras' });
        }
        else if(dadosPessoais.senha.length != 8){
            console.log(dadosPessoais.senha.length)
            setValidacoes({ ...validacoes, senha: 'Senha deve ter 8 caracteres' });            
        }
        else{
            setValidacoes({ ...validacoes, senha: '' });
        }
    }

    const validaConfirmaSenha = () => {
        if(dadosPessoais.senha != dadosPessoais.confirmaSenha){    
            setValidacoes({ ...validacoes, confirmaSenha: 'Senhas diferentes.' });            
        }
        else{
            setValidacoes({ ...validacoes, confirmaSenha: '' });            
        }    
    }
    
    const validaLogin = () => {
        if(contemNumeroOuCaractereEspecial(dadosPessoais.login)){
            setValidacoes({ ...validacoes, login: 'Login deve ter apenas letras' });             
        }
        else if(dadosPessoais.login.length != 6){
            setValidacoes({ ...validacoes, login: 'Login deve ter 6 letras' });             
        }
        else{
            setValidacoes({ ...validacoes, login: '' }); 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const contemNumeroOuCaractereEspecial = (str) => {
        const regex = /[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
        return regex.test(str);
    };

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
        if (contemNumeroOuCaractereEspecial(dadosPessoais.nomeMaterno)) {
            setValidacoes({ ...validacoes, nomeMaterno: 'O nome deve conter apenas letras.' });
        } else {
            setValidacoes({ ...validacoes, nomeMaterno: '' });
        }
    };


    return (
        <>
            <form className="d-flex justify-content-center align-items-center flex-fill"
                onSubmit={handleSubmit}>
                <div className="my-auto p-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 rounded-1">
                    <h2 className='my-4'>Criar nova conta</h2>
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