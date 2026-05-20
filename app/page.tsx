// Shadcn UI Komponente importieren
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"

// vorbereitete Komponente
import { DataChart } from "@/components/DataChart"
import { DataTable } from "@/components/DataTable"
import { DataMap } from "@/components/DataMap"

// Funktion zum Datenladen
import { getdata } from "@/lib/dataimport"


export default async function Page() {

// Datensätze besorgen
 const DataVerkehrsunfälleQuartal = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=3&periode=q&format=json")
 const DataFahrzeugbestand = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=2&periode=y&format=json")
 const DataVerkehrseinschraenkungen = await getdata("https://geodienste.leipzig.de/l3/OpenData//wfs?VERSION=1.3.0&REQUEST=getFeature&typeName=OpenData%3Averkehrsraumeinschraenkungen&outputFormat=application/json&SRSNAME=EPSG:4326")
 const DataPersonenNahVerkehr = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=4&periode=y&format=json")


// Die eigentliche Seite
  return (
    <div className="flex gap-x-10 w-500 h-400 px-4">
     
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
              <Card>
                <CardContent className="flex h-full w-full flex-col gap-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabelle der Daten zu Verkehrsunfällen nach Quartal</CardTitle>
                  </CardHeader>
                  <div className="flex">
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
              <Card>
                <CardContent className="flex h-full w-full flex-col gap-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabelle der Daten zu Kraftfahrzeugsbeständen</CardTitle>
                  </CardHeader>
                  <div className="flex">
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

            <div className="flex flex-col w-3/10 h-9/10">
              <Card>
                <CardContent className="flex h-full w-full flex-col gap-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tabelle der Daten zum Personennahverkehr</CardTitle>
                  </CardHeader>
                  <div className="flex">
                    <DataTable dataset={DataPersonenNahVerkehr}></DataTable>
                  </div>
                </Card>
                </CardContent>
              </Card>
            </div>

      </div>
    </div>
  )
}
