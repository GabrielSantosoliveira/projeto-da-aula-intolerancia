import { banner,intoleranciaFoto1 } from "../variavel/img"
function HeaderComponent  ()  {

return (
    
    <>
    
    
    <header className="cabecalho">
                <section className="Apresentacao">

                    <div className="linha">

                        <h1 className="titulo">
                            Trabalho De Tutoria

                        </h1>
                        <h1 className="titulo">
                            Intolerancia
                        </h1>

                    </div>
                    <p className="info"> sala: 1 int 5</p>
                    <p className="info"> alunos: *ELIAS *ANDRESSA *YASMIM VITÓRIA *GABRIEL SANTOS *CAUÃ  *GEOVANNA *LUDIMILA *GABRIELL</p>
                </section>



            </header>



        <style jsx>

            {`
            
            
            .cabecalho{
                background-image:url(${banner}) ;
                width:100vw;
                height:490px;
                padding:0.5rem;
            }

            .Apresentacao{
                background-color: rgba(0, 0, 0, 0.658);
                height:390px;
                width:80%;
                margin:0 auto;
                padding:0.5rem;
            }
               
            
            
            .titulo{
                
                text-align: center;
                color:white;
                font-size:3rem;
            }
            .info{
                text-align: justify;
                color:white;
                font-size:1.5rem ;
            }

            .linha{
                border-bottom:1px solid white;
                }
            
                @media (max-width: 768px){
                .tituloArtigo{ font-size:2rem}
                .info{
                    font-size: 1rem;
                }
                .titulo{font-size:2rem;}
                .paragrafo{font-size: 1rem;
                color:black;
                }
            }
            
            
            `}


        </style>
    
    </>
    
    )


}

export default HeaderComponent