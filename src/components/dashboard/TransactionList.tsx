import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, ArrowLeftRight } from "lucide-react";

interface Transaction {
  id: string;
  type: "credit" | "debit" | "manual";
  amount: number;
  timestamp: Date;
  note?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const getIcon = (type: string) => {
    if (type === "credit") return <ArrowUpRight className="w-4 h-4 text-green-600" />;
    if (type === "debit") return <ArrowDownRight className="w-4 h-4 text-red-600" />;
    return <ArrowLeftRight className="w-4 h-4 text-blue-600" />;
  };

  const getColor = (type: string) => {
    if (type === "credit") return "text-green-600";
    if (type === "debit") return "text-red-600";
    return "text-blue-600";
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {transactions.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No transactions yet. They will appear automatically.
            </p>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors animate-slide-in"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-background">
                    {getIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="font-medium capitalize">
                      {transaction.note || transaction.type}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(transaction.timestamp).toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
                <p className={`font-bold text-lg ${getColor(transaction.type)}`}>
                  {transaction.type === "debit" ? "-" : "+"}₹{transaction.amount.toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
