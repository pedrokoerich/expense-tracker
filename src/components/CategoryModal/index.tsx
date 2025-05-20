import { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (key: string, title: string, color: string, expense: boolean) => void;
};

export const CategoryModal = ({ open, onClose, onAdd }: Props) => {
  const [key, setKey] = useState('');
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#6366f1');
  const [expense, setExpense] = useState(true);

  const handleAdd = () => {
    if (!key || !title || !color) {
      alert('Preencha todos os campos!');
      return;
    }
    onAdd(key, title, color, expense);
    setKey('');
    setTitle('');
    setColor('#6366f1');
    setExpense(true);
    onClose();
  };

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      left: 0, top: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.3)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: 24,
        minWidth: 300,
        boxShadow: '0 2px 16px #0002',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        <h3>Nova Categoria</h3>
        <input
          type="text"
          placeholder="Identificador (ex: transporte)"
          value={key}
          onChange={e => setKey(e.target.value)}
          style={{ padding: 6, borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          type="text"
          placeholder="Nome da categoria"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ padding: 6, borderRadius: 6, border: '1px solid #ddd' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label>Cor:</label>
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            style={{ width: 40, height: 40, border: 'none', background: 'none' }}
          />
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <input
            type="checkbox"
            checked={expense}
            onChange={e => setExpense(e.target.checked)}
            style={{ marginRight: 4 }}
          />
          É despesa?
        </label>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button
            onClick={handleAdd}
            style={{
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '8px 16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Adicionar
          </button>
          <button
            onClick={onClose}
            style={{
              background: '#eee',
              color: '#333',
              border: 'none',
              borderRadius: 8,
              padding: '8px 16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};