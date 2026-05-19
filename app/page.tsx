// Shadcn UI Komponente importieren
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"

// vorbereitete Komponente
import { DataChart } from "@/components/DataChart"
import { DataTable } from "@/components/DataTable"
import { DataMap } from "@/components/DataMap"

// Daten
import {
  DataFahrzeugbestand,
  DataVerkehrsunfälleQuartal,
  DataVerkehrseinschraenkungen
} from "@/lib/dataimport"



export default function Page() {
  return (
    <div className="flex gap-x-10 w-screen h-300 px-4 border border-red-500">
     
      <div className="w-4/10">
        <Card>
          <CardHeader>
            <CardTitle>Aktuelle Verkehrseinschränkungen im Raum Leipzig</CardTitle>
          </CardHeader>
          <CardContent>
            <DataMap Dataset={DataVerkehrseinschraenkungen} Koordinaten={[51.34572588726978, 12.372624668978824]} Zoom="12"></DataMap>
          </CardContent>
          <CardFooter>Hover für Information</CardFooter>
        </Card>
      </div>

      <div className="flex w-full gap-x-5 h-full">
            <div className="flex flex-col w-3/10 overflow-y-auto">
              <Card className="items-center flex w-full overflow-y-auto flex-col gap-y-5">
                <CardContent className="flex h-full w-full flex-col gap-y-5">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabelle der Daten zu Verkehrsunfällen nach Quartal</CardTitle>
                  </CardHeader>
                  <div className="overflow-x-auto">
                    <DataTable dataset={DataVerkehrsunfälleQuartal}></DataTable>
                  </div>
                </Card>
                <Card className="flex items-center">
                  <DataChart dataset={DataVerkehrsunfälleQuartal} color="#a87272" ></DataChart>
                </Card>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col w-3/10 h-9/10">
              <Card className="items-center flex w-full  overflow-y-auto flex-col gap-y-5">
                <CardContent className="w-full h-full flex flex-col">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabelle der Daten zu Kraftfahrzeugsbeständen</CardTitle>
                  </CardHeader>
                  <div className="overflow-x-auto">
                    <DataTable dataset={DataFahrzeugbestand}></DataTable>
                  </div>
                  <CardFooter>
                    Manche Messungen existieren erst ab einem bestimmten Zeitraum, deshalb entstehen teilweise Lücken in der Tabelle
                  </CardFooter>
                </Card>
                <Card className="flex items-center">
                  <DataChart dataset={DataFahrzeugbestand} color="#7299a8" ></DataChart>
                </Card>
                </CardContent>
              </Card>
            </div>
      </div>
      
    </div>
  )
}
