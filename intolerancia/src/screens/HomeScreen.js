import { banner, intoleranciaFoto1 } from "../variavel/img"
export default function HomeScreens() {
    return (

        <>


            <main className="main">

                <section className="conteiner">
                    <article>
                        <h1 className="tituloArtigo"> O qué intolerancia</h1>
                        <p className="paragrafo">

                            Se você abrir um dicionário e procurar o significado da palavra “tolerância” uma das definições que encontrará é: “boa disposição dos que ouvem com paciência opiniões opostas às suas.” A intolerância então, seria o oposto disso, isto é, quando a tolerância não acontece.

                            Aceitar aquilo que não se quer, ou ouvir com paciência opiniões diferentes das suas, são virtudes necessárias para a convivência em uma sociedade democrática. Porém, de tempos em tempos, vemos o enfraquecimento desses valores, não só no Brasil, mas no mundo todo.
                        </p>

                        <img className="img" src={intoleranciaFoto1} />
                    </article>


                    <section>

                        <article>

                            <h2 className="tituloArtigo"> algums Conteudos a mais </h2>
                            <section className="Sobre">

                                
                                <div className="conteudos">


                                    <a href="https://www.poetris.com/frase/ek3ocpxyhnu6ft3yy94y52dd8">
                                        <h2 className="tituloCard">
                                            A Intolerância é uma Brutal Realidade
                                        </h2>
                                        <span className="previa"> Nós vivemos num tempo que se caracteriza pela irracionalidade dos comportamentos gerais, e pôr aqui um pouco de senso comum,no sentido de que, acima de tudo, o que há a proteger é a vida</span>

                                    </a>
                                </div>
                                <div className="conteudos">

                                    <a href="https://www.poetris.com/frase/9ez9on4zz6860csqd26jd15ae">

                                        <h2 className="tituloCard">
                                        Tolerância não é Igualdade
                                        </h2>
                                        <span className="previa">Eu sou contra a tolerância, porque ela não basta. Tolerar a existência do outro e permitir que ele seja diferente ainda é pouco.</span>

                                    </a>
                                </div>
                                <div className="conteudos">

                                    <a href="https://pensamentoextemporaneo.com.br/?p=430">

                                        <h2 className="tituloCard">
                                        Tolerância ou intolerância: uma reflexão a partir de Voltaire
                                        </h2>
                                        <span className="previa"> Voltaire percebeu que a tolerância poderia fazer do homem um ser mais compreensivo, seria como que um remédio para a doença feroz da intolerância. O conhecimento humano é limitado e por isso</span>

                                    </a>
                                </div>

                            </section>

                        </article>


                    </section>

                    <section className="outrasCoisas">
                        <h2 className="tituloArtigo"> Videos sobre o tema </h2>
                        <div className="linhaPreta"></div>
                        <section className="Sobre">


                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/7m-yuzFljpc" width="310px" height="300px" title="Intorelancia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="video">

                                <iframe width="310px" height="300px" src="https://www.youtube.com/embed/hPP4VAejwsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="310px" height="300px" src="https://www.youtube.com/embed/zN-n74M5A6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                        </section>

                    </section>

                </section>
            </main>

            <style jsx>{`
            .tituloCard{color:black;}
        .previa{color:black;}

            .main { background-color: #841034;}

            .tituloArtigo{
                font-size:3rem;
                text-align: center;
                color:black;
            }

            .img{
                width:100%;
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
                width:310px ;

                margin:30px 0 ;
            }
            .Sobre{
                display:flex;
                width:100% ;
                margin:0 auto;
                flex-wrap:wrap;
                align-items: center;
                justify-content: space-around ;

            }
            .linhaPreta{
                border-bottom:1px solid rgb(139, 139, 139);
            }

            .conteudos{
                width:310px ;
                border:1px solid black; 
                height:400px;
                padding:1rem;
                border-radius:14px ;
                transition: all 500ms;
                background-color: rgb(226, 226, 226);
                opacity:0.5;
                box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.329);
                margin:25px 4px ;

            }

            .conteudos:hover{
                background-color: rgb(226, 221, 221);
                opacity:1;
                transform: scale(1.1);
                box-shadow: 9px 7px 5px 0px rgb(0 0 0 / 33%);
                
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

                .conteudos{
                    opacity:1;
                }
            }

            @media (max-width: 427px){

                .conteudos{

                    }

            }
                
            
            `}</style>

        </>


    )
}