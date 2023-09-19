import React from "react"

export default function CardServico({ imagem, titulo, subtitulo, tamanhoImagem }) {
    return (
        <div className='col-3 p-2 shadow d-flex flex-column align-items-center justify-content-center'>
            <img className={`img-fluid ${tamanhoImagem}`} src={imagem}></img>
            <div className='fs-5 fw-bold'>{titulo}</div>
            <div className='fs-7'>{subtitulo}</div>
        </div>
    )
}