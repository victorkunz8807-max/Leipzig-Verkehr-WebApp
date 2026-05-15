"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function DataList({dataset}:{dataset:any}) {
    return(
        <ScrollArea className="flex h-100">
          {  
            dataset.map((o:any) => (
              <li className="px-4" key = {o.name+o.jahr}>
                <p className="font-medium">{o.name}</p>
                <p className="font-small">{o.wert}</p>
                <p className="font-small">{o.jahr}</p>
                <Separator></Separator>
              </li>
            ))
          }
       </ScrollArea>
    )
}