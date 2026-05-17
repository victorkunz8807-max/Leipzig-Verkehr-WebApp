
// Shadcn Komponente importieren
import { Table,TableBody,TableHead,TableCaption,TableCell,TableFooter,TableHeader,TableRow } from "@/components/ui/table"


export function DataTable({dataset}:{dataset:any}) {

    const Kategorien = [...new Set(dataset.map((i:any) => i.name))] // Liste der verfügbaren Kategorien
    const Jahre = [...new Set(dataset.map((i:any) => i.jahr))] //Liste der verfügbaren Jahre
    
    // 1. anhand der Liste der Jahre die obere Spalte gefüllt            
    // 2. Kategorien durchgehen, jeweils das dataset filtern und passende Daten in eine Cell packen
    return(
    <Table className="flex w-full">
            <TableBody>
                <TableRow> 
                    <TableHead className="sticky left-0 bg-white"></TableHead>  
                    {Jahre.map((o:any) =>
                    <TableHead key={o}>{o}</TableHead>
                    )}
                </TableRow> 
                
                {Kategorien.map((cat:any) =>
                    <TableRow>
                        <TableCell className="sticky left-0 bg-white">{cat}</TableCell>
                        {dataset.filter((i:any) => i.name == cat).map((o:any) =>
                            <TableCell>{o.wert}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}