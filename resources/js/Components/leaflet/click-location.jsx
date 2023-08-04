import { useMapEvents } from "react-leaflet";

export default ({setPosition}) => {
    const map = useMapEvents({
        click(e) {
           setPosition(e.latlng);
        },
    });
    return null;
}