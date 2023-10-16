import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ExpenseList from './Components/ExpenseList'
import ExpenseFIlter from './Components/ExpenseFIlter';
import ExpenseForm from './Components/ExpenseForm'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
  return (
    <>
      <div className='text-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Expense Tracker</h1>
      </div>
      <div className="card">
        <div className="mb-5">
          <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
        </div>
        <ExpenseFIlter onSelectCategory={category => setSelectedCategory(category)} />
        <ExpenseList expenses={visibleExpenses} onDelete={id => setExpenses(expenses.filter(e => e.id !== id))} />


      </div>
    </>
  )
}

export default App
