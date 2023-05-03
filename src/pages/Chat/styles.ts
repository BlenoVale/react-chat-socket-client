import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.chat-area {
    width: 60%;
    height: 90%;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0px 0px 5px #999999;

    .chat-header {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 15px;

        span {
            font-weight: bold;
        }
    }

    .chat-lists {
        flex: 1;
        height: calc(100vh - 10% - 100px);
        display: flex;

        .chat-list-msgs {
            flex: 1;
            height: 100%;
            background-image: url('./images/bkg-mario.jpg');
            overflow-y: auto;
            border-top: 1px solid #cacacc;
            border-bottom: 1px solid #cacacc;

            .msg-area {
                margin: 10px;
                display: flex;
                flex-direction: column;
                gap: 3px;

                .userName {
                    width: fit-content;
                    padding: 5px 10px;
                    background-color: #c5c6c8;
                    border-radius: 5px;
                }
                .msg {
                    width: fit-content;
                    max-width: 400px;
                    padding: 10px;
                    background-color: #c5c6c8;
                    border-radius: 5px;
                }

                .me {
                    background-color: #0085c8;
                    color: #fff;
                }
            }

            .msg-area.me {
                align-items: flex-end;
            }
        }

        .chat-list-users {
            width: 20%;
            overflow-y: auto;
            background-color: #3c4043;

            .userName {
                width: 80px;
                max-width: 400px;
                margin: 10px;
                padding: 5px;
                background-color: #c5c6c8;
                display: flex;
                justify-content: center;
                border-radius: 5px;
            }

            .userName.me {
                background-color: #0085c8;
                color: #fff;
            }
        }
    }

    .chat-input-box {
        height: 60px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 15px;

        input {
            flex: 1;
            padding: 10px;
            outline: none;
            border: none;
            background-color: #ddd;
            font-size: 15px;
            border-radius: 5px;
        }

        button {
            padding: 10px;
            width: 80px;
            border: none;
            font-size: 15px;
            font-weight: bold;
            color: #fff;
            background-color: #00c441;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                opacity: .8;
            }
        }
    }
}
`;