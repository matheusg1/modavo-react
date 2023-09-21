import React from "react"

export default function CardServico({ imagem, titulo, subtitulo, tamanhoImagem }) {
    return (
        <div className='col-9 col-sm-5 col-md-4 col-lg-3 m-3 shadow d-flex flex-column align-items-center justify-content-between rounded-1 p-3'>
            <img className={`img-fluid ${tamanhoImagem}`} src={imagem}></img>
            <div className="">
                <div className='fs-5 fw-bold'>{titulo}</div>
                <div className='fs-7'>{subtitulo}</div>
            </div>
        </div>
    )
}