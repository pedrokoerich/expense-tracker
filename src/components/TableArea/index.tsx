import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
    editingIndex: number | null;
    editingItem: Item | null;
    onEditChange: (field: keyof Item, value: any) => void;
    onCancelEdit: () => void;
    onSaveEdit: () => void;
}

export const TableArea = ({
    list,
    onDelete,
    onEdit,
    editingIndex,
    editingItem,
    onEditChange,
    onCancelEdit,
    onSaveEdit
}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={120}></C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem
                        key={index}
                        item={editingIndex === index && editingItem ? editingItem : item}
                        isEditing={editingIndex === index}
                        disabled={editingIndex !== null && editingIndex !== index}
                        onDelete={() => onDelete(index)}
                        onEdit={() => onEdit(index)}
                        onEditChange={onEditChange}
                        onCancelEdit={onCancelEdit}
                        onSaveEdit={onSaveEdit}
                    />
                ))}
            </tbody>
        </C.Table>
    );
}