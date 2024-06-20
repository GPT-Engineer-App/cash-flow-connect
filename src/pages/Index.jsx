import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const transactions = [
  { id: 1, date: "2023-10-01", description: "Grocery Store", amount: -50.25, account: "Checking" },
  { id: 2, date: "2023-10-02", description: "Salary", amount: 1500.0, account: "Savings" },
  { id: 3, date: "2023-10-03", description: "Electric Bill", amount: -75.0, account: "Checking" },
  { id: 4, date: "2023-10-04", description: "Coffee Shop", amount: -4.5, account: "Credit Card" },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Budgeting App</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Account</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.account}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;