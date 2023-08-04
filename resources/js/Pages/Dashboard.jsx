import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ClickLocation from "@/Components/leaflet/click-location";
import "leaflet/dist/leaflet.css";
import Filter from "@/Components/datatable/filter";

export default function Dashboard({ auth, pemetaan }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <Filter />
            <MapContainer
                center={[-5.143759051537124, 119.40061707043272]}
                zoom={5}
                scrollWheelZoom={false}
                className="md:w-[1080px] md:h-[500px]"
            >
                <TileLayer
                    url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />

                {pemetaan && pemetaan.map((item, i) => (
                    <React.Fragment key={i}>
                        <Marker position={{ lat: item.latitude, lng: item.longitude }}>
                            <Popup  >
                                <ul>
                                    <li className="text-center">
                                        <div className="flex justify-center py-5">
                                            <img className="md:w-[50px] md:h-[50px] object-fit-cover rounded-full" src={`http://127.0.0.1:8000/storage/${item.gambar}`} alt="" />
                                        </div>
                                    </li>
                                    <li className="mb-2">Tempat : {item.lokasi}</li>
                                    <li className="mb-2">Bahan Baku : {item.bahan_baku}</li>
                                    <li className="mb-2">Keterangan : {item.keterangan}</li>
                                </ul>
                            </Popup>
                        </Marker>
                    </React.Fragment>
                ))}

            </MapContainer>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
