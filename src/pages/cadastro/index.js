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
                <div className="my-auto p-4 col-12 col-sm-8 col-md-6 col-lg-5 col-xl-8 card rounded-1">
                    <div className="row g-2">
                        <div className="form-floating mb-3 col-6">
                            <input type="email" className="form-control" id="InputNome"
                                name="email"
                                placeholder='Email'
                            />
                            <label for="InputNome" className="form-label">Nome</label>
                        </div>
                        <div className="form-floating mb-3 col-4">
                            <input type="date" className="form-control" id="InputNascimento"
                                name="password"
                                placeholder='Senha'
                            />
                            <label for="InputNascimento" className="form-label">Data de Nascimento</label>
                        </div>

                    </div>
                    <div className="row g-2">
                        <div className="form-floating mb-3 col-6">
                            <select type="select" className="form-control" id="InputGenero"
                                name="password"
                                placeholder='Senha'
                            >
                                <option disabled value="" selected></option>
                                {listaGeneros.map((genero, index) => (
                                    <option key={index} value={genero.toLowerCase()}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                            <label for="InputGenero" className="form-label">Gênero</label>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="form-floating mb-3 col-3">
                            <input type="text" className="form-control " id="InputCelular"
                                name="celular"
                                placeholder='Celular'
                                maxLength={15}
                                value={celular}
                                onChange={handleCelularChange}

                            />
                            <label for="InputCelular" className="form-label">Celular</label>
                        </div>


                        <div className="form-floating mb-3 col-3 ">
                            <input type="text" className="form-control" id="InputTelefone"
                                name="telefone"
                                placeholder='Telefone'
                                value={telefone}
                                onChange={handleTelefoneChange}

                            />
                            <label for="InputTelefone" className="form-label">Telefone</label>
                        </div>

                        <div className="form-floating mb-3 col-3 ">
                            <input type="text" className="form-control" id="InputCpf"
                                name="telefone"
                                placeholder='CPF'
                                value={cpf}
                                onChange={handleCpfChange}
                            />
                            <label for="InputCpf" className="form-label">CPF</label>
                        </div>

                    </div>
                    <div className='row g-2'>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="InputEndereco"
                                name="password"
                                placeholder='Endereço'
                            />
                            <label for="InputEndereco" className="form-label">Endereço</label>
                        </div>

                    </div>
                    <div className='row g-2'>
                        <div className="form-floating mb-3 col-6">
                            <input type="password" className="form-control" id="InputSenha"
                                name="password"
                                placeholder='Confirmar senha'
                            />
                            <label for="InputSenha" className="form-label">Senha</label>
                        </div>
                        <div className="form-floating mb-3 col-6">
                            <input type="password" className="form-control" id="InputConfirmaSenha"
                                name="password"
                                placeholder='Confirmar senha'

                            />
                            <label for="InputConfirmaSenha" className="form-label">Confirmar senha</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-primary rounded-2 w-100">Entrar</button>
                </div>
            </form>
        </>
    )
}