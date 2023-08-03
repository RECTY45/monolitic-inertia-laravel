import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CreatePemetaan({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        bahan_baku: "",
        gambar: "",
        latitude: "",
        longitude: "",
        lokasi: "",
        keterangan: "",
    });
    
    const position = [-5.143759051537124, 119.40061707043272];

    const submit = (e) => {
        e.preventDefault();
        post(route("pemetaan.store"));
    };
    return (
        <Authenticated user={auth.user}>
            <Head title="Tambah Lokasi" />
            <>
            <form onSubmit={submit} className="mx-auto mb-4">
                <div className="container mx-auto flex flex-col">
                        <div className="py-3 grid grid-cols-12">
                            <div className="col-span-12">
                                <MapContainer
                                    center={position}
                                    zoom={13}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily
                                            customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                        <h2 className=" p-5 font-semibold text-xl text-gray-800 leading-tight">
                            Kelola Tambah Data Lokasi
                        </h2>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Tambah Lokasi
                            </h2>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="bahan_baku"
                                        value="Bahan Baku"
                                    />

                                    <TextInput
                                        id="bahan_baku"
                                        name="Bahan Baku"
                                        value={data.bahan_baku}
                                        className="mt-1 block w-full"
                                        autoComplete="bahan_baku"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "bahan_baku",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.bahan_baku}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="gambar"
                                        value="Gambar"
                                    />

                                    <TextInput
                                        id="gambar"
                                        type="file"
                                        name="Gambar"
                                        value={data.gambar}
                                        className="mt-1 block w-full"
                                        autoComplete="gambar"
                                        onChange={(e) =>
                                            setData("gambar", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.gambar}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="latitude"
                                        value="Latitude"
                                    />

                                    <TextInput
                                        id="latitude"
                                        type="text"
                                        name="latitude"
                                        value={data.latitude}
                                        className="mt-1 block w-full"
                                        autoComplete="latitude"
                                        onChange={(e) =>
                                            setData("latitude", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.latitude}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="longitude"
                                        value="Longitude"
                                    />

                                    <TextInput
                                        id="longitude"
                                        type="text"
                                        name="Longitude"
                                        value={data.longitude}
                                        className="mt-1 block w-full"
                                        autoComplete="longitude"
                                        onChange={(e) =>
                                            setData("longitude", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.longitude}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="lokasi"
                                        value="Lokasi"
                                    />

                                    <TextInput
                                        id="lokasi"
                                        type="text"
                                        name="Lokasi"
                                        value={data.lokasi}
                                        className="mt-1 block w-full"
                                        autoComplete="lokasi"
                                        onChange={(e) =>
                                            setData("lokasi", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.lokasi}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="keterangan"
                                        value="Keterangan"
                                    />

                                    <TextInput
                                        id="keterangan"
                                        type="text"
                                        name="Keterngan"
                                        value={data.keterangan}
                                        className="mt-1 block w-full"
                                        autoComplete="keterangan"
                                        onChange={(e) =>
                                            setData(
                                                "keterangan",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.keterangan}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center  mt-4">
                                <PrimaryButton
                                    type="submit"
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
            </form>
            </>
        </Authenticated>
    );
}
