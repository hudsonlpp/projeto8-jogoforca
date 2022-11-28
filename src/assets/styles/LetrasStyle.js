import styled from "styled-components";

const LetrasStyle = {
    ItemLetras: styled.div`
        width: 664px;
        height: 90px;
        display: flex;
        flex-wrap: wrap;
        align-self: center;
        align-items: center;
        margin-top: 70px;
    `,
    LetrasButton: styled.button`
        margin: 5px;
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background: #E1ECF4;
        color: #39739D;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        text-transform: uppercase;
        cursor: pointer;
    `,
    ButtonDesabilitado: styled.button`
        margin: 5px;
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background: #9FAAB5;
        color: #798A9F;
        border: 1px solid #7AA7C7;
        cursor: pointer;
        border-radius: 3px;
        text-transform: uppercase;
    `
};

export default LetrasStyle;