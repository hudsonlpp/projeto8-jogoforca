import {useState} from "react";
import AppStyle from "./assets/styles/AppStyle";
import Reset from "./assets/styles/Reset";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import Letras from "./components/Letras";

const ImagensForca = [
    require("./assets/images/forca0.png"),
    require("./assets/images/forca1.png"),
    require("./assets/images/forca2.png"),
    require("./assets/images/forca3.png"),
    require("./assets/images/forca4.png"),
    require("./assets/images/forca5.png"),
    require("./assets/images/forca6.png"),
];

const App = () => {
    const alphaAscii = Array.from(Array(26)).map((e, i) => i + 97);
    const [ImagemForca, setHangmanImage] = useState(ImagensForca[0]);
    const [letraState, setLettersState] = useState(alphaAscii.map((x) => ({disabled: true, letra: String.fromCharCode(x)})))

    return (
        <AppStyle.JogoDiv>
            <Reset></Reset>
            <Jogo ImagemForca={ImagemForca}></Jogo>
            <Letras letraState={letraState}></Letras>
            <Chute></Chute>
        </AppStyle.JogoDiv>
    );
};


export default App;