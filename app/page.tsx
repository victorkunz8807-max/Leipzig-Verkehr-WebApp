// Shadcn UI Komponente importieren
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// vorbereitete Komponente
import { DataChart } from "@/components/DataChart"
import { DataList } from "@/components/DataList"
import { DataTable } from "@/components/DataTable"

// Daten
import {
  DataFahrzeugbestand,
  DataVerkehrsunfälleQuartal
} from "@/lib/dataimport"


export default function Page() {
  return (
    <>
    <div className="flex gap-x-20">
      <div className="flex w-1/2 flex-col gap-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Tabelle der Daten zu Kraftfahrzeugsbeständen</CardTitle>
          </CardHeader>
          <div>
            <div className="overflow-x-auto">
              <DataTable dataset={DataFahrzeugbestand}></DataTable>
            </div>
          </div>
          <CardFooter>
            Manche Messungen existieren erst ab einem bestimmten Zeitraum, deshalb entstehen teilweise Lücken in der Tabelle
          </CardFooter>
        </Card>
        <Card className="flex items-center">
          <DataChart dataset={DataFahrzeugbestand} color="#7299a8" ></DataChart>
        </Card>
      </div>

      <div className="flex w-1/2 flex-col gap-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Tabelle der Daten zu Verkehrsunfällen nach Quartal</CardTitle>
          </CardHeader>
          <div>
            <div className="overflow-x-auto">
              <DataTable dataset={DataVerkehrsunfälleQuartal}></DataTable>
            </div>
          </div>
        </Card>
        <Card className="flex items-center">
          <DataChart dataset={DataVerkehrsunfälleQuartal} color="#8ea87f" ></DataChart>
        </Card>
      </div>
    </div>


    <div>
      <h1>hi</h1>
    </div>
    </>
  )
}
