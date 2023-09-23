import React from "react"
import { useNavigate } from "react-router-dom";

export default function CardServico({ imagem, titulo, subtitulo, tamanhoImagem, link }) {
    const navigate = useNavigate();

    return (
        <div className='col-10 col-sm-5 col-md-4 col-lg-3 m-3 shadow d-flex flex-column align-items-center justify-content-between rounded-1 p-3 card-produto text-primary-emphasis'
        onClick={() => navigate(link)}>
            <img className={`img-fluid my-auto ${tamanhoImagem}`} src={imagem}></img>
            <div className="">
                <div className='fs-5 fw-bold'>{titulo}</div>
                <div className='fs-7'>{subtitulo}</div>
            </div>
        </div>
    )
}