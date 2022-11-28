import ChuteStyle from "../assets/styles/ChuteStyle";

const Chute = (props) => (
    <ChuteStyle.ChuteDiv>
        <ChuteStyle.Texto>Já sei a palavra!</ChuteStyle.Texto>
        <ChuteStyle.InputDoChute></ChuteStyle.InputDoChute>
        <ChuteStyle.ChuteButton>Chutar!</ChuteStyle.ChuteButton>
    </ChuteStyle.ChuteDiv>
);

export default Chute