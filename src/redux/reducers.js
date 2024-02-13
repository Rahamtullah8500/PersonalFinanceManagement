import { createSlice } from "@reduxjs/toolkit"


// transaction data
const TransactionData=[
    {
        id:0,
        date:'01-02-09',
        description:'rent',
        category: 'Spent',  // housing | food | transportation | entertainment | miscellaneous
        amount:5678
    },
    {
        id:1,
        date:'11-04-09',
        description:'recharge',
        category: 'Received',  // housing | food | transportation | entertainment | miscellaneous
        amount:9678
    },
    {
        id:2,
        date:'11-04-09',
        description:'electricity',
        category: 'spent',  // housing | food | transportation | entertainment | miscellaneous
        amount:2678
    },
    {
        id:3,
        date:'11-04-09',
        description:'pertrol',
        category: 'spent',  // housing | food | transportation | entertainment | miscellaneous
        amount:3678
    },
]


const GraphData = [
    {
      name: "January",
      income: 5000,
      expense: 3000,
      saving: 2000,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "February",
      income: 4000,
      expense: 3500,
      saving: 1000,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      income: 5500,
      expense: 2000,
      saving: 3000,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      income: 3000,
      expense: 5000,
      saving: 3400,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      income: 4000,
      expense: 5000,
      saving: 2000,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      income: 7000,
      expense: 4000,
      saving: 4000,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      income: 6000,
      expense: 3000,
      saving: 3000,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

// pieChart data
const pieData = [
  { name: "Expence", value: 400 },
  { name: "Income", value: 300 },
  { name: "Saving", value: 300 },
  { name: "Debt", value: 100 },
];

const initialState={
    transactions:TransactionData,
    graphData:GraphData,
    pieData:pieData,
    totalIncome:50000,
    totalExpense:30000,
    balance:20000,
    cash:10000
}

const initialSlice = createSlice({
    name:'firstSlice',
    initialState,
    reducers:{
        addNewTransactions:(state, action) =>{
            const newTran = action.payload;
            state.transactions.push(newTran);
        },
    }
})

export default initialSlice.reducer;


export const {addNewTransactions,deleteTransactions}=initialSlice.actions;






