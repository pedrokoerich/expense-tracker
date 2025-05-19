import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 12px 10px;
    margin-top: -24px;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 8px;
        padding: 8px 4px;
        margin-top: -10px;
        margin-bottom: 16px; // Adiciona margem inferior no mobile
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        width: 100%;
        justify-content: center;
    }
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 32px;
        font-size: 20px;
    }
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-size: 1.2rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    gap: 16px;

    @media (max-width: 800px) {
        width: 100%;
        flex-direction: row;
        gap: 4px;
        justify-content: space-between;
        align-items: center;
    }
`;