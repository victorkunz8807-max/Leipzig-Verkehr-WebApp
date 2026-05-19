import { get } from "node:http"

// Datensatz importieren
async function getdata(Datenauswahl:any) {
    const response = await fetch(Datenauswahl)
    const content = await response.json()
    return content
}

export const DataVerkehrsunfälleQuartal = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=3&periode=q&format=json")
export const DataFahrzeugbestand = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=2&periode=y&format=json")
export const DataVerkehrseinschraenkungen = await getdata("https://geodienste.leipzig.de/l3/OpenData//wfs?VERSION=1.3.0&REQUEST=getFeature&typeName=OpenData%3Averkehrsraumeinschraenkungen&outputFormat=application/json&SRSNAME=EPSG:4326")
