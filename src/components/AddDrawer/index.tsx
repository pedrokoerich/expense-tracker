import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { DrawerOverlay, Drawer, AddButton } from './style';

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

export const AddDrawer = ({ open, onOpen, onClose, children }: Props) => (
  <>
    <AddButton onClick={onOpen} title="Adicionar">
      {IoMdAdd({})}
    </AddButton>
    <DrawerOverlay open={open} onClick={onClose} />
    <Drawer open={open}>
      {children}
    </Drawer>
  </>
);