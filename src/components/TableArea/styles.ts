import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    border-collapse: collapse;

    @media (max-width: 700px) {
        display: block;
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        padding: 8px;
    }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 12px 16px;
    text-align: left;
    font-size: 1rem;
    color: #555;
    border-bottom: 2px solid #ddd;

    @media (max-width: 700px) {
        padding: 8px 8px;
        font-size: 0.95rem;
    }
`;