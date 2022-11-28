import styled from "styled-components";

const ChuteStyle = {
    ChuteDiv: styled.div`
        width: 630px;
        display: flex;
        align-self: center;
        height: 40px;
        align-items: center;
        margin-top: 50px;
    `,
    Texto: styled.p`
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    `,
    InputDoChute: styled.input`
        margin-left: 12px;
        width: 353px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #CCCCCC;
        background: #FFFFFF;
        box-sizing: border-box;
    `,
    ChuteButton: styled.button`
        cursor: pointer;
        margin-left: 15px;
        width: 100px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        color: #3C76A1;
    `
};

export default ChuteStyle;

