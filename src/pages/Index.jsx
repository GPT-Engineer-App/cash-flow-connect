import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VCard, VCardContent, VCardHeader, VCardTitle } from "@/components/ui/vcard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const transactions = [
  { id: 1, date: "2023-10-01", description: "Grocery Store", amount: -50.25, account: "Checking" },
  { id: 2, date: "2023-10-02", description: "Salary", amount: 1500.0, account: "Savings" },
  { id: 3, date: "2023-10-03", description: "Electric Bill", amount: -75.0, account: "Checking" },
  { id: 4, date: "2023-10-04", description: "Coffee Shop", amount: -4.5, account: "Credit Card" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <VCard>
          <VCardHeader>
            <VCardTitle>Total Balance</VCardTitle>
          </VCardHeader>
          <VCardContent>
            <p className="text-2xl font-bold">$10,000</p>
          </VCardContent>
        </VCard>
        <VCard>
          <VCardHeader>
            <VCardTitle>Monthly Expenses</VCardTitle>
          </VCardHeader>
          <VCardContent>
            <p className="text-2xl font-bold">$2,500</p>
          </VCardContent>
        </VCard>
        <VCard>
          <VCardHeader>
            <VCardTitle>Monthly Income</VCardTitle>
          </VCardHeader>
          <VCardContent>
            <p className="text-2xl font-bold">$5,000</p>
          </VCardContent>
        </VCard>
        <VCard>
          <VCardHeader>
            <VCardTitle>Savings</VCardTitle>
          </VCardHeader>
          <VCardContent>
            <p className="text-2xl font-bold">$20,000</p>
          </VCardContent>
        </VCard>
      </div>
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