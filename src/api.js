export const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            customerId: 1,
            transactions: [
              { date: "2024-01-05", amount: 160 },
              { date: "2024-01-10", amount: 70 },
              { date: "2024-01-15", amount: 85 },
            ]
          },
          {
            customerId: 2,
            transactions: [
              { date: "2024-02-03", amount: 190 },
              { date: "2024-02-15", amount: 75 },
              { date: "2024-02-20", amount: 95 },
            ]
          },
          {
            customerId: 3,
            transactions: [
              { date: "2024-03-12", amount: 240 },
              { date: "2024-03-18", amount: 170 },
            ]
          }
        ]);
      }, 1000);
    });
  };
  