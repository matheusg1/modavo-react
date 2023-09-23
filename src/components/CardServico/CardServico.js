import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CardServico({ imagem, titulo, subtitulo, tamanhoImagem, link }) {
    const navigate = useNavigate();
    
    const [elementStyle, setElementStyle] = useState('');

    const handleScroll = () => {
        const divElement = document.getElementById('produtos');
        if (divElement) {
            const divPosition = divElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (divPosition.top <= windowHeight - 100) {                
                setElementStyle('fadeMove 2s ease-in-out forwards')
            }            
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='col-10 col-sm-5 col-md-4 col-lg-3 m-3 shadow d-flex flex-column align-items-center justify-content-between rounded-1 p-3 card-produto'
            style={{animation: elementStyle}}
            onClick={() => navigate(link)}>
            <img className={`img-fluid my-auto ${tamanhoImagem}`} src={imagem}></img>
            <div className="">
                <div className='fs-5 fw-bold'>{titulo}</div>
                <div className='fs-7 text-primary-emphasis'>{subtitulo}</div>
            </div>
        </div>
    )
}