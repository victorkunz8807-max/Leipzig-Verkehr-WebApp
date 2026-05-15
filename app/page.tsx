// Shadcn UI Komponente importieren
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// vorbereitete Komponente
import { DataChart } from "@/components/DataChart"
import { DataList } from "@/components/DataList"
import { DataTable } from "@/components/DataTable"

// Datenfunktionen
import {DataFahrzeugbestand} from "@/lib/dataimport"


export default function Page() {
  return (
    <div className="flex flex-col gap-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Tabelle der Daten zu Kraftfahrzeugsbeständen</CardTitle>
        </CardHeader>
        <div>
          <ScrollArea className="h-140">
            <DataTable dataset={DataFahrzeugbestand}></DataTable>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
        </div>
        <CardFooter>
          Manche Messungen existieren erst ab einem bestimmten Zeitraum, deshalb entstehen teilweise Lücken in der Tabelle
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gesamtanzahl der registrierten Kraftfahrzeuge</CardTitle>
        </CardHeader>
        <DataChart dataset={
          DataFahrzeugbestand.filter((obj:any) => obj.merkmal_2 === "insgesamt")
        }>
        </DataChart>
      </Card>
    </div>
  )
}
