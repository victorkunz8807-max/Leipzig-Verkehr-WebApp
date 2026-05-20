import next from "next"


// Datensatz importieren
export async function getdata(Datenauswahl:any) {
    const response = await fetch(Datenauswahl, {next: {revalidate: 3600}})
    const content = await response.json()
    return content
}

