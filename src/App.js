import React, { useState, useEffect } from "react";
import { fetchTransactions } from "./api";
import { calculatePoints } from "./utils";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Group the transactions by month
  const getMonthlyPoints = (transactions) => {
    return transactions.reduce((acc, customer) => {
      customer.transactions.forEach((transaction) => {
        const month = new Date(transaction.date).getMonth();
        const points = calculatePoints(transaction.amount);

        if (!acc[customer.customerId]) {
          acc[customer.customerId] = { Jan: 0, Feb: 0, Mar: 0, total: 0 };
        }

        if (month === 0) acc[customer.customerId].Jan += points;
        if (month === 1) acc[customer.customerId].Feb += points;
        if (month === 2) acc[customer.customerId].Mar += points;

        acc[customer.customerId].total += points;
      });
      return acc;
    }, {});
  };

  const monthlyPoints = getMonthlyPoints(transactions);

  return (
    <div>
      <h1>Customer Reward Points</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(monthlyPoints).map((customerId) => {
              const points = monthlyPoints[customerId];
              return (
                <tr key={customerId}>
                  <td>{customerId}</td>
                  <td>{points.Jan}</td>
                  <td>{points.Feb}</td>
                  <td>{points.Mar}</td>
                  <td>{points.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
