import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const InputLabel = styled.label`
    flex: 1;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;

    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;

    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: none;
    border-radius: 8px;
    background-color: #3b82f6;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2563eb;
    }
`;
