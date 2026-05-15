
// Datensatz importieren
async function getdata(Datenauswahl:any) {
    const response = await fetch(Datenauswahl)
    const content = await response.json()
    return content
}

export const DataFahrzeugbestand = await getdata("https://statistik.leipzig.de/opendata/api/values?kategorie_nr=10&rubrik_nr=2&periode=y&format=json")
