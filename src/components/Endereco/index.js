import react from 'react';

export default function EnderecoInputs() {
    return (
        <>
            <div className="mb-sm-3 col-12 col-sm-2">
                <label htmlFor="InputCep" className="form-label">CEP</label>
                <input type="text" className="form-control" id="InputCep"
                    name="cep"
                />
            </div>
            <div className="mb-sm-3 col-12 col-sm-6">
                <label htmlFor="InputLogradouro" className="form-label">Logradouro</label>
                <input type="text" className="form-control" id="InputLogradouro"
                    name="logradouro"
                />
            </div>
            <div className="mb-sm-3 col-12 col-sm-2">
                <label htmlFor="InputNumero" className="form-label">Número</label>
                <input type="text" className="form-control" id="InputNumero"
                    name="numero"
                />
            </div>
            <div className="mb-sm-3 col-12 col-sm-2">
                <label htmlFor="InputComplemento" className="form-label">Complemento</label>
                <input type="text" className="form-control" id="InputComplemento"
                    name="complemento"
                />
            </div>
        </>
    )
}