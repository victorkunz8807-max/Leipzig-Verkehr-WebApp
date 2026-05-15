"use client"

// shadcn Sachen importieren
import { Bar,BarChart,XAxis } from "recharts"
import { ChartLegendContent,ChartLegend,ChartContainer,ChartTooltipContent,ChartTooltip, type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
    wert: {
        label: "Fahrzeuge gesamt",
        color: "#5678c2",
    }
} satisfies ChartConfig



export function DataChart({dataset}:{dataset:any}) {
    return(
        <>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-100">
            <BarChart data={dataset}>
                <XAxis dataKey="jahr"/>
                <Bar dataKey="wert"></Bar>
                <ChartTooltip content={<ChartTooltipContent />}/>
                <ChartLegend content={<ChartLegendContent />}/>
            </BarChart>
        </ChartContainer>
        </>
    )
}