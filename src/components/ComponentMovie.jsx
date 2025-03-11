function ComponentMovie (){

    const filme={
        titulo:'Shrek para Sempre',
        imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/90/45/19962744.jpg',
        nota:4.1,
        duracao:'1h 33min',
        data:'9 de julho de 2010 No cinema',
        elenco: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
        sinopse: 'Shrek (Mike Myers) está entediado. Sua antiga vida de aventuras foi substituída pela de pacato pai de família. Casado com Fiona (Cameron Diaz) e pai de três filhos, Shrek sente falta da adrenalina e da liberdade que tinha no passado.Para recuperá-los, ele firma um pacto com Rumpelstiltiskin (Walt Dohrm). Imediatamente Shrek é levado a uma versão alternativa do Reino de Tão, Tão Distante, onde Fiona é uma temível ogro e ele não é mais reconhecido pelo Burro (Eddie Murphy) e o Gato de Botas (Antonio Bandera), seus melhores amigos.'
    }

    return (
        <div id="cardMovie">
            <h2>{filme.titulo}</h2>
            <img src={filme.imagem} alt={filme.titulo} />
            <p>Nota: {filme.nota}</p>
            <p>Duração: {filme.duracao}</p>
            <p>Data: {filme.data}</p>
            <div id="elenco">
                <h3>Elenco:</h3>
                    <ul id="ul">
                        {filme.elenco.map(ator=><li key={ator}>{ator}</li>)}
                    </ul>
            </div>
            <h3>Sinopse:</h3>
            <p>{filme.sinopse}</p>
        </div>
    )
 
}

export default ComponentMovie;