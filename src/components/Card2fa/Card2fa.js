import React from "react"

export default function Card2fa({ imagem, titulo, subtitulo, tamanhoImagem }) {
    return (
        <div className='col-10 col-sm-7 col-md-4 col-lg-2 m-3 shadow d-flex flex-column align-items-center justify-content-between rounded-1 p-3 card-2fa'>            
                <img className={`img-fluid my-auto ${tamanhoImagem}`} src={imagem}></img>
                <div className="">
                    <div className='fs-5 fw-bold'>{titulo}</div>
                    <div className='fs-7'>{subtitulo}</div>
                </div>            
        </div>
    )
}