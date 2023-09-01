import React, { useState } from 'react'
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
    const [celular, setCelular] = useState('');
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')

    const handleCelularChange = (event) => {
        const input = event.target.value;
        const formattedInput = formatCelular(input);
        setCelular(formattedInput);
    };

    const handleTelefoneChange = (event) => {
        const input = event.target.value;
        const formattedInput = formatTelefone(input);
        setTelefone(formattedInput);
    };

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

    const handleCpfChange = (event) => {
        const input = event.target.value;
        const formattedInput = formatCpf(input);
        setCpf(formattedInput);
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
    /*
        function cleanNumero(numero) {
            return numero.replace(/[\(\)-]/g, '');
        }
    */
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log('teclka')
        console.log(telefone)
        console.log(celular)
    }

    return (
        <>
            <form className="d-flex justify-content-center align-items-center flex-fill"
                onSubmit={handleSubmit}>
                <div className="my-auto p-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 rounded-1">
                    <h1>Criar nova conta</h1>
                    <div className="row g-2">
                        <div className="mb-sm-3 col-12 col-sm-5">
                            <input type="text" className="form-control" id="InputNome"
                                name="nome"
                            />
                            <label htmlFor="InputNome" className="form-label">Nome</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-3">
                            <input type="date" className="form-control" id="InputNascimento"
                                name="nascimento"
                            />
                            <label htmlFor="InputNascimento" className="form-label">Data de nascimento</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4 ">
                            <input type="text" className="form-control" id="InputCpf"
                                name="telefone"
                                value={cpf}
                                onChange={handleCpfChange}
                            />
                            <label for="InputCpf" className="form-label">CPF</label>
                        </div>

                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-5">
                            <input type="text" className="form-control" id="InputNomeMaterno"
                                name="nomeMaterno"
                            />
                            <label htmlFor="InputNomeMaterno" className="form-label">Nome materno</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6">
                            <select type="select" className="form-control" id="InputGenero"
                                name="genero"
                            >
                                <option disabled value="" selected>Gênero</option>
                                {listaGeneros.map((genero, index) => (
                                    <option key={index} value={genero.toLowerCase()}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                            <label for="InputGenero" className="form-label">Gênero</label>
                        </div>
                    </div>

                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-3">
                            <input type="text" className="form-control " id="InputCelular"
                                name="celular"
                                maxLength={15}
                                value={celular}
                                onChange={handleCelularChange}

                            />
                            <label for="InputCelular" className="form-label">Celular</label>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-3 ">
                            <input type="text" className="form-control" id="InputTelefone"
                                name="telefone"
                                value={telefone}
                                onChange={handleTelefoneChange}

                            />
                            <label for="InputTelefone" className="form-label">Telefone</label>
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <input type="text" className="form-control" id="InputCep"
                                name="cep"
                            />
                            <label htmlFor="InputCep" className="form-label">CEP</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-6">
                            <input type="text" className="form-control" id="InputLogradouro"
                                name="logradouro"
                            />
                            <label htmlFor="InputLogradouro" className="form-label">Logradouro</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <input type="text" className="form-control" id="InputNumero"
                                name="numero"
                            />
                            <label htmlFor="InputNumero" className="form-label">Número</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-2">
                            <input type="text" className="form-control" id="InputComplemento"
                                name="complemento"
                            />
                            <label htmlFor="InputComplemento" className="form-label">Complemento</label>
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="text" className="form-control" id="InputBairro" name="bairro" />
                            <label htmlFor="InputBairro" className="form-label">Bairro</label>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="text" className="form-control" id="InputCidade" name="cidade" />
                            <label htmlFor="InputCidade" className="form-label">Cidade</label>
                        </div>

                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="text" className="form-control" id="InputEstado" name="estado" />
                            <label htmlFor="InputEstado" className="form-label">Estado</label>
                        </div>

                    </div>
                    <div className='row g-2'>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="text" className="form-control" id="InputLogin"
                                name="login"
                            />
                        <label for="InputLogin" className="form-label">Login</label>
                        </div>
         
                 
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="password" className="form-control" id="InputSenha"
                                name="password"
                            />
                            <label for="InputSenha" className="form-label">Senha</label>
                        </div>
                        <div className="mb-sm-3 col-12 col-sm-4">
                            <input type="password" className="form-control" id="InputConfirmaSenha"
                                name="password"

                            />
                            <label for="InputConfirmaSenha" className="form-label">Confirmar senha</label>

                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-2 w-100">Cadastrar</button>
                </div>
            </form>
        </>
    )
}