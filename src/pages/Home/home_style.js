import Styled from 'styled-components';

export const Container = Styled.div`
    display: flex;
    width: 800px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Lista = Styled.div`
    margin: 15px;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
       align-items: center;
        background-color: #ffffff;
        margin: 15px;
        padding: 15px;
        border-radius: 5px;
    }

    strong {
        padding-bottom: 15px;
        font-size: 20px;
    }

    article a {
        text-decoration: none;
        color: #ddd;
        font-size: 25px;
        background-color: rgb(60, 60, 226);
        width: 100%;
        height: 40px;
        margin-top: -30px;
        text-align: center;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius:6px ;
    }
`;


/*.container{
    display: flex;
    width: 800px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.lista{
    margin: 15px;
}

.lista article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
}

.lista strong {
    padding-bottom: 15px;
    font-size: 20px;
}

.img{
    max-width: 350px;
    max-height: 900px;
}

.lista article a {
    text-decoration: none;
    color: #ddd;
    font-size: 25px;
    background-color: rgb(60, 60, 226);
    width: 100%;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius:6px ;
} */