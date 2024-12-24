export const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            customerId: 1,
            transactions: [
              { date: "2024-01-05", amount: 120 },
              { date: "2024-01-10", amount: 80 },
              { date: "2024-01-15", amount: 55 },
            ]
          },
          {
            customerId: 2,
            transactions: [
              { date: "2024-02-03", amount: 150 },
              { date: "2024-02-15", amount: 95 },
              { date: "2024-02-20", amount: 60 },
            ]
          },
          {
            customerId: 3,
            transactions: [
              { date: "2024-03-12", amount: 220 },
              { date: "2024-03-18", amount: 110 },
            ]
          }
        ]);
      }, 1000);
    });
  };
  