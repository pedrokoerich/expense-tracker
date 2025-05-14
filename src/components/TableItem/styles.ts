import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td<{ width?: number }>`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #fff;
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;
