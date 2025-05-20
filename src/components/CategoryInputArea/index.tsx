import { useState } from 'react';

type Props = {
  onAdd: (key: string, title: string, color: string, expense: boolean) => void;
};

export const CategoryInputArea = ({ onAdd }: Props) => {
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
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 2px 8px #e5e7eb',
      padding: 12,
      margin: '16px 0',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <input
        type="text"
        placeholder="Identificador (ex: transporte)"
        value={key}
        onChange={e => setKey(e.target.value)}
        style={{ flex: 1, minWidth: 120, padding: 6, borderRadius: 6, border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="Nome da categoria"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ flex: 1, minWidth: 120, padding: 6, borderRadius: 6, border: '1px solid #ddd' }}
      />
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        style={{ width: 40, height: 40, border: 'none', background: 'none' }}
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <input
          type="checkbox"
          checked={expense}
          onChange={e => setExpense(e.target.checked)}
          style={{ marginRight: 4 }}
        />
        É despesa?
      </label>
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
        Adicionar Categoria
      </button>
    </div>
  );
};