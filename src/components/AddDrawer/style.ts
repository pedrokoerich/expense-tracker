import styled from 'styled-components';

export const DrawerOverlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  left: 0; right: 0; bottom: 0; top: 0;
  background: rgba(0,0,0,0.2);
  z-index: 1000;
`;

export const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  background: #fff;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -2px 16px #0002;
  transform: translateY(${({ open }) => (open ? '0%' : '100%')});
  transition: transform 0.3s;
  z-index: 1003;
  padding: 24px 16px 16px 16px;
`;

export const AddButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0002;
  z-index: 1002;
  cursor: pointer;
`;