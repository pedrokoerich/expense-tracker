import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    background: linear-gradient(135deg, #23272f, #43464d);
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px solid #23272f;

    @media (max-width: 600px) {
        height: 100px;
    }
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    font-size: 2.5rem;
    font-weight: 600;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
    padding: 20px;

    @media (max-width: 980px) {
        padding: 10px;
    }
    @media (max-width: 600px) {
        padding: 4px;
    }
`;