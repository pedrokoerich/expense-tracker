import styled from 'styled-components';

export const TableLine = styled.tr`
    &:nth-child(even) {
        background-color: #f3f4f6;
    }

    @media (max-width: 700px) {
        display: table-row;
    }
`;

export const TableColumn = styled.td`
    padding: 12px 8px;
    font-size: 1rem;
    color: #4b5563;

    @media (max-width: 700px) {
        padding: 8px 4px;
        font-size: 0.95rem;
    }
`;

export const TableHeader = styled.th`
    padding: 12px 8px;
    text-align: left;
    font-size: 1rem;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;

    @media (max-width: 700px) {
        padding: 8px 4px;
        font-size: 0.95rem;
    }
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 6px 12px;
    border-radius: 8px;
    color: #fff;
    background-color: ${props => props.color};
    font-size: 0.9rem;
    font-weight: 500;

    @media (max-width: 700px) {
        padding: 4px 8px;
        font-size: 0.85rem;
    }
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-weight: bold;
    font-size: 1rem;

    @media (max-width: 700px) {
        font-size: 0.95rem;
    }
`;

export const IconButton = styled.button<{ edit?: boolean; delete?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 4px;
    font-size: 1.1rem;
    color: ${({ edit, delete: del }) =>
        edit ? '#6366f1' : del ? '#ef4444' : '#64748b'};
    transition: color 0.2s;

    &:hover {
        color: ${({ edit, delete: del }) =>
            edit ? '#4338ca' : del ? '#b91c1c' : '#334155'};
    }
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 4px;

    @media (max-width: 700px) {
        font-size: 1rem;
        padding: 2px;
    }
`;