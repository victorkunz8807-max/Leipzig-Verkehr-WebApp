"use client"
// Shadcn Komponente importieren
import { Table,TableBody,TableHead,TableCaption,TableCell,TableFooter,TableHeader,TableRow } from "@/components/ui/table"
import { NativeSelect,NativeSelectOption } from "./ui/native-select"
// andere
import { useState } from "react"


export function DataTable({dataset}:{dataset:any}) {

    const Jahre = [...new Set(dataset.map((i:any) => i.jahr))] //Liste der verfügbaren Jahre

    const merkmal1Kategorien = [...new Set(dataset.map((i:any) => i.merkmal_1))]
    const merkmal2Kategorien = [...new Set(dataset.map((i:any) => i.merkmal_2))]
    const merkmal3Kategorien = [...new Set(dataset.map((i:any) => i.merkmal_3))]
    const merkmal4Kategorien = [...new Set(dataset.map((i:any) => i.merkmal_3))]
    

    let OberKategorienListe:any
    let OberKatStufe:string
    let OberKat:boolean = false

    // herausfinden, wo das Dataset kategorisie
    if (merkmal4Kategorien[2]) {
        OberKategorienListe = merkmal3Kategorien ; OberKat = true ; OberKatStufe="merkmal_3"
    } 
    else if (merkmal3Kategorien[1]) {
        OberKategorienListe = merkmal2Kategorien ; OberKat = true ; OberKatStufe="merkmal_3"
    } 
    else if (merkmal2Kategorien[1]) {
        OberKategorienListe = merkmal1Kategorien ; OberKat = true ; OberKatStufe="merkmal_1"
    } 

    const [oberauswahl, setoberauswahl] = useState(OberKategorienListe[0])
    const Filterdaten = dataset.filter((i:any) => i[OberKatStufe] == oberauswahl)
    const NamenListe = [...new Set(Filterdaten.map((i:any) => i.name))]


    return(
        <div className="items-center flex flex-col w-full">
        <NativeSelect className="w-8/9" value={oberauswahl} onChange={(i) => setoberauswahl(i.target.value)}>
        {OberKategorienListe.map((o:any) => (
            <NativeSelectOption key={o} value={o}>{o}</NativeSelectOption>
        ))}
        </NativeSelect>
        
        <Table>
            <TableBody>
                <TableRow key="Jahre"> 
                    <TableHead></TableHead>
                    {Jahre.map((o:any) =>
                    <TableHead key={o}>{o}</TableHead>
                    )}
                </TableRow> 
                {NamenListe.map((cat:any) =>
                    <TableRow key={cat}>
                        <TableCell key={"header"+cat}>{cat}</TableCell>
                        {Filterdaten.filter((i:any) => i.name == cat).map((o:any) =>
                            <TableCell key={o.id}>{o.wert}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    )
}