import styled from 'styled-components';

export const Card = styled.div<{ disabled?: boolean; isEditing?: boolean }>`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #e5e7eb;
  padding: 12px 14px;
  margin-bottom: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  border: ${({ isEditing }) => (isEditing ? '2px solid #6366f1' : 'none')};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 0.97rem;
`;

export const Label = styled.div`
  font-weight: 500;
  color: #64748b;
  min-width: 80px;
`;

export const Value = styled.div<{ color?: string }>`
  font-weight: 600;
  color: ${({ color }) => color || '#222'};
  margin-left: 6px;
`;

export const Category = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  color: #fff;
  border-radius: 6px;
  padding: 2px 10px;
  font-size: 0.92rem;
  font-weight: 500;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
`;

export const IconButton = styled.button<{ edit?: boolean; delete?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ edit, delete: del }) =>
    edit ? '#6366f1' : del ? '#ef4444' : '#64748b'};
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    color: ${({ edit, delete: del }) =>
      edit ? '#4338ca' : del ? '#b91c1c' : '#334155'};
  }
`;