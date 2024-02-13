import React from "react";
import "./Dashboard.css";
import {
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaBalanceScaleRight,
  FaGetPocket,
} from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import BarGraph from "../components/BarGraph/BarGraph";
import LineGraph from "../components/LineGraph/LIneGraph";
import Transactions from "../Transactions/Transactions";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import AreaGraph from "../components/AreaGraph/AreaGraph";
import PieGraph from "../components/PieGraph/PieGraph";

const Dashboard = () => {
  const { totalIncome, totalExpense, balance, cash, graphData } = useSelector(
    (state) => state
  );

  const cardData = [
    {
      title: "Total Income",
      icon: <FaMoneyBillAlt />,
      amount: totalIncome,
      color: "#65B741",
    },
    {
      title: "Total Expense",
      icon: <FaMoneyBillWave />,
      amount: totalExpense,
      color: "#FF6868",
    },
    {
      title: "Balance",
      icon: <FaBalanceScaleRight />,
      amount: balance,
      color: "#40A2E3",
    },
    { title: "Cash on hand", icon: <FaGetPocket />, amount: cash,color:'#09092d' },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h4>DASHBOARD</h4>
      </div>
      <div className="main-cards">
        {cardData.map((eachCard, i) => {
          return (
            <Card
              title={eachCard.title}
              icon={eachCard.icon}
              children={eachCard.amount}
              color={eachCard.color}
              key={i}
            />
          );
        })}
      </div>
      <div className="charts">
        <BarGraph data={graphData} />
        <LineGraph data={graphData} />
      </div>
      <div className="charts">
        <AreaGraph data={graphData}/>
        <PieGraph data={graphData}/>
      </div>

      <Transactions />
    </main>
  );
};

export default Dashboard;
