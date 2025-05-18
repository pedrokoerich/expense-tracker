import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    border-collapse: collapse;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 12px 16px; /* Aumentado para mais espaçamento interno */
    text-align: left;
    font-size: 1rem;
    color: #555;
    border-bottom: 2px solid #ddd;
`;