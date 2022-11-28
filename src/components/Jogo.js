import JogoStyle from "../assets/styles/JogoStyle";

const Jogo = (props) => (
    <JogoStyle.JogoItems>
        <JogoStyle.ItemEsquerdo>
            <JogoStyle.ImagensForca src={props.ImagemForca}></JogoStyle.ImagensForca>
        </JogoStyle.ItemEsquerdo>
        <JogoStyle.ItemDireito>
            <JogoStyle.StartButton>Escolher Palavra</JogoStyle.StartButton>
            <JogoStyle.WordDiv>
                <JogoStyle.SpanWord>_</JogoStyle.SpanWord>
            </JogoStyle.WordDiv>
        </JogoStyle.ItemDireito>
    </JogoStyle.JogoItems>
)

export default Jogo;
