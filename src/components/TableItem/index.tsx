import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { formatCurrency } from '../../utils/formatCurrency';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

type Props = {
    item: Item;
    isEditing?: boolean;
    disabled?: boolean;
    onDelete: () => void;
    onEdit: () => void;
    onEditChange?: (field: keyof Item, value: any) => void;
    onCancelEdit?: () => void;
    onSaveEdit?: () => void;
}

export const TableItem = ({
    item,
    isEditing,
    disabled,
    onDelete,
    onEdit,
    onEditChange,
    onCancelEdit,
    onSaveEdit
}: Props) => {
    const categoryKeys = Object.keys(categories);

    return (
        <C.TableLine style={disabled ? { opacity: 0.5, pointerEvents: 'none' } : isEditing ? { background: '#e0e7ff' } : {}}>
            <C.TableColumn>
                {isEditing ? (
                    <input
                        type="date"
                        value={item.date.toISOString().substring(0, 10)}
                        onChange={e => onEditChange && onEditChange('date', new Date(e.target.value))}
                    />
                ) : (
                    formatDate(item.date)
                )}
            </C.TableColumn>
            <C.TableColumn>
                {isEditing ? (
                    <select
                        value={item.category}
                        onChange={e => onEditChange && onEditChange('category', e.target.value)}
                    >
                        {categoryKeys.map(key => (
                            <option key={key} value={key}>{categories[key].title}</option>
                        ))}
                    </select>
                ) : (
                    <C.Category color={categories[item.category].color}>
                        {categories[item.category].title}
                    </C.Category>
                )}
            </C.TableColumn>
            <C.TableColumn>
                {isEditing ? (
                    <input
                        type="text"
                        value={item.title}
                        onChange={e => onEditChange && onEditChange('title', e.target.value)}
                    />
                ) : (
                    item.title
                )}
            </C.TableColumn>
            <C.TableColumn>
                {isEditing ? (
                    <input
                        type="number"
                        value={item.value}
                        onChange={e => onEditChange && onEditChange('value', parseFloat(e.target.value))}
                        min={0}
                        step={0.01}
                    />
                ) : (
                    <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                        {formatCurrency(item.value)}
                    </C.Value>
                )}
            </C.TableColumn>
            <C.TableColumn>
                {isEditing ? (
                    <>
                        <C.IconButton title="Salvar" onClick={onSaveEdit} edit>
                            {FaSave({})}
                        </C.IconButton>
                        <C.IconButton title="Cancelar" onClick={onCancelEdit} delete>
                            {FaTimes({})}
                        </C.IconButton>
                    </>
                ) : (
                    <>
                        <C.IconButton title="Editar" onClick={onEdit} edit>
                            {FaEdit({})}
                        </C.IconButton>
                        <C.IconButton title="Excluir" onClick={onDelete} delete>
                            {FaTrash({})}
                        </C.IconButton>
                    </>
                )}
            </C.TableColumn>
        </C.TableLine>
    );
}