"use client"
// importiere Leaflet Teile
import { Popup,useMap,MapContainer,Marker,TileLayer,Tooltip,GeoJSONProps,GeoJSON, Circle, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css"



//Hier wird die Map erstellt
export default function MapKern({Koordinaten,Zoom,Dataset}:{Koordinaten:any, Zoom:any, Dataset:any}){

    return(
    
        <MapContainer scrollWheelZoom={true} className="h-170 w-150" center={Koordinaten} zoom={Zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <GeoJSON data={Dataset} style={{color: "red"}} onEachFeature={((f:any,layer:any) => {
                layer.bindPopup(` 
                    Einschränkung: ${f.properties.sparte} <br/>
                    Beginn: ${f.properties.beginn} <br/>
                    Ende geplant: ${f.properties.ende} <br/>
                    Adresse: ${f.properties.adresse} <br/>
                `)
                layer.on("mouseover", function() {this.openPopup()})
                layer.on("mouseout", function() {this.closePopup()})}
            )}/> 
        </MapContainer>

    )
}
