"use client"

// shadcn Sachen importieren
import { Bar,BarChart,XAxis,CartesianGrid,YAxis } from "recharts"
import { ChartLegendContent,ChartLegend,ChartContainer,ChartTooltipContent,ChartTooltip, type ChartConfig } from "@/components/ui/chart"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
// andere
import { useState } from "react"



export function DataChart({dataset,color}:{dataset:any, color:any}) {

    const [auswahl, setauswahl] = useState(dataset[0].name) //Auswahl ist die gewählte Kategorie, default ist immer der Eintrag 0 der json
    const Kategorien = [...new Set(dataset.map((i:any) => i.name))] //Liste der Kategorien erstellen
    const auswahlfilter = dataset.filter((i:any) => i.name == auswahl) //Ganze json filtern nach Auswahl

    // chartconfig gemäß shadcn docs
    const chartConfig = {
     wert: {
         label: auswahl,
         color: color,
      }
    } satisfies ChartConfig


    // 1. Kategorien durchgehen und für jede eine SelectOption erstellen
    // 2. OnChange ändert "auswahl" nach der gewählten Kategorie Option
    // 3. Chart wird erstellt mit den Werten aus dem gefilterten Dataset 
    return(
        <>
        <NativeSelect className="w-8/9" value={auswahl} onChange={(i) => setauswahl(i.target.value)}>
            {Kategorien.map((o:any) => 
                <NativeSelectOption key={o} value={o}>{o}</NativeSelectOption>
            )}
        </NativeSelect>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-100">
            <BarChart accessibilityLayer data={auswahlfilter}>
                <XAxis dataKey="jahr"/>
                <YAxis dataKey="wert"/>
                <CartesianGrid vertical={false}/>
                <Bar dataKey="wert" fill="var(--color-wert)" radius={4}></Bar>
                <ChartTooltip content={<ChartTooltipContent />}/>
                <ChartLegend content={<ChartLegendContent />}/>
            </BarChart>
        </ChartContainer>
        </>
    )
}