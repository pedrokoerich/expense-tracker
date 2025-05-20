import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories as initialCategories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { ExpenseCardList } from './components/ExpenseCardList';
import { AddDrawer } from './components/AddDrawer';
import { CategoryInputArea } from './components/CategoryInputArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState(initialCategories);

  // Hook para detectar mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  const handleDeleteItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleEditItem = (index: number) => {
    setEditingIndex(index);
    setEditingItem({ ...filteredList[index] });
  };

  const handleEditItemChange = (field: keyof Item, value: any) => {
    if (!editingItem) return;
    setEditingItem({ ...editingItem, [field]: value });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingItem(null);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null || !editingItem) return;
    // Encontra o índice real na lista original
    const realIndex = list.findIndex(
      item =>
        item.date.getTime() === filteredList[editingIndex].date.getTime() &&
        item.category === filteredList[editingIndex].category &&
        item.title === filteredList[editingIndex].title &&
        item.value === filteredList[editingIndex].value
    );
    if (realIndex === -1) return;
    const newList = [...list];
    newList[realIndex] = { ...editingItem };
    setList(newList);
    setEditingIndex(null);
    setEditingItem(null);
  };

  const handleAddCategory = (key: string, title: string, color: string, expense: boolean) => {
    if (categories[key]) {
      alert('Já existe uma categoria com esse identificador!');
      return;
    }
    setCategories({
      ...categories,
      [key]: { title, color, expense }
    });
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <CategoryInputArea onAdd={handleAddCategory} />

        {isMobile && (
          <AddDrawer
            open={drawerOpen}
            onOpen={() => setDrawerOpen(true)}
            onClose={() => setDrawerOpen(false)}
          >
            <InputArea
              onAdd={item => {
                handleAddItem(item);
                setDrawerOpen(false);
              }}
              categories={categories}
            />
          </AddDrawer>
        )}
        {!isMobile && <InputArea onAdd={handleAddItem} categories={categories} />}

        {isMobile ? (
          <ExpenseCardList
            list={filteredList}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
            editingIndex={editingIndex}
            editingItem={editingItem}
            onEditChange={handleEditItemChange}
            onCancelEdit={handleCancelEdit}
            onSaveEdit={handleSaveEdit}
            categories={categories}
          />
        ) : (
          <TableArea
            list={filteredList}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
            editingIndex={editingIndex}
            editingItem={editingItem}
            onEditChange={handleEditItemChange}
            onCancelEdit={handleCancelEdit}
            onSaveEdit={handleSaveEdit}
            categories={categories}
          />
        )}
      </C.Body>
    </C.Container>
  );
}

export default App;