import Expenses from "./components/Expenses/Expenses";
import ExpenseItem from "./components/Expenses/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Computer Accessories',
      amount: 5000,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 25000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Bike Insurance',
      amount: 3000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 2800,
      date: new Date(2021, 5, 12),
    },
  ];
    
 
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
