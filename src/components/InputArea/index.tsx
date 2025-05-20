import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { Category } from '../../types/Category';
import { CategoryModal } from '../CategoryModal';

type Props = {
  onAdd: (item: Item) => void;
  categories: Category;
  onAddCategory?: (key: string, title: string, color: string, expense: boolean) => void;
};

export const InputArea = ({ onAdd, categories, onAddCategory }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  const handleAddCategory = (key: string, title: string, color: string, expense: boolean) => {
    if (onAddCategory) {
      onAddCategory(key, title, color, expense);
      setCategoryField(key);
    }
  };

  return (
    <>
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
              <>
                <option></option>
                {categoryKeys.map((key, index) => (
                  <option key={index} value={key}>{categories[key].title}</option>
                ))}
              </>
            </C.Select>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              style={{
                background: '#6366f1',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0 10px',
                height: 40,
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              title="Adicionar categoria"
            >
              +
            </button>
          </div>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
      <CategoryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddCategory}
      />
    </>
  );
}