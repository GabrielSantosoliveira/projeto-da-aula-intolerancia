import { banner,intoleranciaFoto1 } from "../variavel/img"
export default function HomeScreens() {
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
                    <p className="info"> alunos: *ELIAS
*ANDRESSA
*YASMIM VITÓRIA 
*GABRIEL SANTOS
*CAUÃ 
*GEOVANNA
*LUDIMILA
*GABRIELL</p>
                </section>



            </header>

            <main className="main">

                <section className="conteiner">
                    <article>
                        <h1 className="tituloArtigo"> O qué intolerancia</h1>
                        <p className="paragrafo">

                            Se você abrir um dicionário e procurar o significado da palavra “tolerância” uma das definições que encontrará é: “boa disposição dos que ouvem com paciência opiniões opostas às suas.” A intolerância então, seria o oposto disso, isto é, quando a tolerância não acontece.

                            Aceitar aquilo que não se quer, ou ouvir com paciência opiniões diferentes das suas, são virtudes necessárias para a convivência em uma sociedade democrática. Porém, de tempos em tempos, vemos o enfraquecimento desses valores, não só no Brasil, mas no mundo todo.
                        </p>
                        
                        <img  className="img" src={intoleranciaFoto1}/>
                    </article>

                    <section className="outrasCoisas">
                    <h2 className="tituloArtigo"> Videos sobre o tema </h2>
                    <div className="linhaPreta"></div>
                    <section className="videosSobre">


                        <div className="video">
                        <iframe  src="https://www.youtube.com/embed/7m-yuzFljpc" width="100%" height="300px" title="Intorelancia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="video">
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/hPP4VAejwsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="video">
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/zN-n74M5A6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                    </section>

                    </section>

                </section>
            </main>

            <style jsx>{`
            
            .img{
                width:100%;
            }
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

            .main { background-color: #841034;}

            .tituloArtigo{
                font-size:3rem;
                text-align: center;
                color:black;
            }

            .conteiner{ width:80vw;
                background-color: rgb(240, 240, 240) ;
                margin:0 auto;
                padding:1.5rem;
                
            }
            .paragrafo{
                font-size: 2rem;
                text-align: justify;

                border-bottom:1px solid black;
                padding:1rem
                
            }

            .video{ 
                width:30% ;
            }
            .videosSobre{
                display:flex;
                width:100% ;

                height: 600px ;
                align-items: center;
                justify-content: space-between ;

            }
            .linhaPreta{
                border-bottom:1px solid rgb(139, 139, 139);
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
                
            
            `}</style>

        </>


    )
}