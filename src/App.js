import {useEffect, useState} from "react";
import Header from "./components/Header"
import IncomeForm from './components/IncomeForm';
import IncomeList from "./components/IncomeList";


function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0)

  useEffect(() => {
    let total = income.reduce((acc, el) => acc + +el.price, 0);
    setTotalIncome(total)
  }, [income])
  return (
    <div className="App">
       <Header totalIncome={totalIncome}/>
       <IncomeForm income={income} setIncome={setIncome}/>
       <IncomeList income={income} setIncome={setIncome}/>
    </div>
  );
}

export default App;
