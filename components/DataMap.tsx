"use client"
import dynamic from "next/dynamic"

const MapKern = dynamic( //gemäß Tutorial, um SSR zu verhindern
    () => import("@/components/MapKern"),
    { 
      ssr: false
    }
  )

// Schnittstelle gibt Map aus Kern weiter für page
export function DataMap({Dataset,Koordinaten,Zoom}:{Dataset:any,Koordinaten:any, Zoom:any}) {
    return(
        <MapKern Dataset={Dataset} Koordinaten={Koordinaten} Zoom={Zoom}></MapKern>
    )
}