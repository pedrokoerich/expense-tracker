import {
  Card,
  Row,
  Label,
  Value,
  Category,
  Actions,
  IconButton,
} from './style';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { formatCurrency } from '../../utils/formatCurrency';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

type Props = {
  list: Item[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  editingIndex: number | null;
  editingItem: Item | null;
  onEditChange: (field: keyof Item, value: any) => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
  categories: {
    [key: string]: {  
      title: string;
      color: string;
      expense: boolean;
    };
  }
};

export const ExpenseCardList = ({
  list,
  onDelete,
  onEdit,
  editingIndex,
  editingItem,
  onEditChange,
  onCancelEdit,
  onSaveEdit,
}: Props) => {
  const categoryKeys = Object.keys(categories);

  return (
    <div>
      {list.map((item, index) => {
        const isEditing = editingIndex === index;
        const disabled = editingIndex !== null && editingIndex !== index;
        const current = isEditing && editingItem ? editingItem : item;
        return (
          <Card key={index} disabled={disabled} isEditing={isEditing}>
            <Row>
              <Label>Data:</Label>
              {isEditing ? (
                <input
                  type="date"
                  value={current.date.toISOString().substring(0, 10)}
                  onChange={e =>
                    onEditChange('date', new Date(e.target.value))
                  }
                  style={{ flex: 1 }}
                />
              ) : (
                <Value>{formatDate(current.date)}</Value>
              )}
            </Row>
            <Row>
              <Label>Categoria:</Label>
              {isEditing ? (
                <select
                  value={current.category}
                  onChange={e => onEditChange('category', e.target.value)}
                  style={{ flex: 1 }}
                >
                  {categoryKeys.map(key => (
                    <option key={key} value={key}>
                      {categories[key].title}
                    </option>
                  ))}
                </select>
              ) : (
                <Category color={categories[current.category].color}>
                  {categories[current.category].title}
                </Category>
              )}
            </Row>
            <Row>
              <Label>Título:</Label>
              {isEditing ? (
                <input
                  type="text"
                  value={current.title}
                  onChange={e => onEditChange('title', e.target.value)}
                  style={{ flex: 1 }}
                />
              ) : (
                <Value>{current.title}</Value>
              )}
            </Row>
            <Row>
              <Label>Valor:</Label>
              {isEditing ? (
                <input
                  type="number"
                  value={current.value}
                  onChange={e =>
                    onEditChange('value', parseFloat(e.target.value))
                  }
                  min={0}
                  step={0.01}
                  style={{ flex: 1 }}
                />
              ) : (
                <Value
                  color={
                    categories[current.category].expense ? 'red' : 'green'
                  }
                >
                  {formatCurrency(current.value)}
                </Value>
              )}
            </Row>
            <Actions>
              {isEditing ? (
                <>
                  <IconButton title="Salvar" onClick={onSaveEdit} edit>
                    {FaSave({})}
                  </IconButton>
                  <IconButton title="Cancelar" onClick={onCancelEdit} delete>
                    {FaTimes({})}
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton title="Editar" onClick={() => onEdit(index)} edit>
                    {FaEdit({})}
                  </IconButton>
                  <IconButton
                    title="Excluir"
                    onClick={() => onDelete(index)}
                    delete
                  >
                    {FaTrash({})}
                  </IconButton>
                </>
              )}
            </Actions>
          </Card>
        );
      })}
    </div>
  );
};