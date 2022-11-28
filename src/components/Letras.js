import LetrasStyle from "../assets/styles/LetrasStyle";

const Letras = (props) => (
    <LetrasStyle.ItemLetras>
        {props.letraState.map(letraState => letraState.disabled ? <LetrasStyle.ButtonDesabilitado key={letraState.letra}>{letraState.letra}</LetrasStyle.ButtonDesabilitado> : <LetrasStyle.ButtonDesabilitado key={letraState.letra}>{letraState.letra}</LetrasStyle.ButtonDesabilitado>)}
    </LetrasStyle.ItemLetras>
);

export default Letras;