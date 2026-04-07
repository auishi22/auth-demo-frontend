
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Meter } from "@/lib/types/meter.types";
import { MoreHorizontalIcon } from "lucide-react"; // Add icon
import { useRouter } from "next/navigation";


const MeterTable: React.FC<{ meters: Meter[] }> = ({ meters }) => {
  // console.log(meters)

  const router = useRouter();

  return (
    <div className="border rounded-lg shadow-lg mt-4 sm:mt-6 bg-white/50 overflow-x-auto">
      <Table className="min-w-160 w-full table-auto">
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead className="px-6 py-4 text-left">Meter Name</TableHead>
            <TableHead className="px-6 py-4 text-left">Account No</TableHead>
            <TableHead className="px-6 py-4 text-left">Meter No</TableHead>
            <TableHead className="px-6 py-4 text-left">Meter Type</TableHead>
            <TableHead className="px-6 py-4 text-left">Balance</TableHead>
            <TableHead className="px-6 py-4 text-left">Low Balance alert</TableHead>
            <TableHead className="px-6 py-4 text-left">Threshold Amount</TableHead>
            <TableHead className="px-6 py-4 text-left">Daily Consumption alert</TableHead>
            <TableHead className="px-6 py-4 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meters.map((meter, index) => (
            <TableRow key={index}>
              <TableCell className="px-6 py-4">{meter.meterName}</TableCell>
              <TableCell className="px-6 py-4">{meter.accountNo}</TableCell>
              <TableCell className="px-6 py-4">{meter.meterNo}</TableCell>
              <TableCell className="px-6 py-4">{meter.meterType}</TableCell>
              <TableCell className="px-6 py-4">{meter.balance}</TableCell>
              <TableCell className="px-6 py-4">{meter.isLowBalanceAlertEnabled ? "Enabled" : "Disabled"}</TableCell>
              <TableCell className="px-6 py-4">{meter.thresholdAmount}</TableCell>
              <TableCell className="px-6 py-4">{meter.isDailyConsumptionAlertEnabled ? "Enabled" : "Disabled"}</TableCell>
              <TableCell className="px-6 py-4 text-right">
                <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={()=>router.push(`/dashboard/meter/${meter.id}`)}>View</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MeterTable;