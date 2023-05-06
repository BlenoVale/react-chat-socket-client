import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.login-input-area {
    height: 50px;
    display: flex;
    gap: 10px;
    margin: 30px 0;

    input {        
        outline: none;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 1px #000;
        background-color: #ddd;
        padding: 10px 20px;
        font-size: 20px;
    }

    .nameInput {
        flex: 1;
    }

    .roomInput {
        width: 170px;
    }

    button {
        width: 100px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        font-weight: bold;
        background-color: #00c441;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
}
`;