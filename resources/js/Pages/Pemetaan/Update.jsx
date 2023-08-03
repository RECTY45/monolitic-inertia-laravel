import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Update = ({ auth, pemetaan }) => {

    const { data, setData,put, processing, errors, reset } = useForm({
        ...pemetaan
    });

    const submit = async (e) => {
        e.preventDefault();
        put(route("pemetaan.update",{id: pemetaan.id}))
    }


    return (
        <Authenticated user={auth.user}>
            <Head title="Edit Lokasi Pemetaan" />
            <form onSubmit={submit}>
            <div className="container mx-48 my-32 flex flex-col">
            <h2 className=" p-5 font-semibold text-xl text-gray-800 leading-tight">
                Kelola Edit Data Lokasi Pemetaan
            </h2>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Lokasi
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                    <div className="mt-4">
                        <InputLabel htmlFor="bahan_baku" value="Bahan Baku" />
                        <TextInput
                            id="bahan_baku"
                            name="bahan_baku"
                            value={ data.bahan_baku}
                            className="mt-1 block w-full"
                            autoComplete="bahan_baku"
                            isFocused={true}
                            onChange={(e) =>
                                setData("bahan_baku", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.bahan_baku}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="gambar" value="Gambar" />
                        <TextInput
                            id="gambar"
                            name="gambar"
                            value={data.gambar}
                            className="mt-1 block w-full"
                            autoComplete="gambar"
                            isFocused={true}
                            onChange={(e) =>
                                setData("gambar", e.target.value)
                            }
                        />
                        <InputError message={errors.nama_barang} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="latitude" value="Latitude" />
                        <TextInput
                            id="latitude"
                            name="latitude"
                            value={data.latitude}
                            className="mt-1 block w-full"
                            autoComplete="latitude"
                            isFocused={true}
                            onChange={(e) =>
                                setData("latitude", e.target.value)
                            }
                        />
                        <InputError message={errors.latitude} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="longitude" value="Longitude" />
                        <TextInput
                            id="longitude"
                            name="longitude"
                            value={data.longitude}
                            className="mt-1 block w-full"
                            autoComplete="longitude"
                            isFocused={true}
                            onChange={(e) =>
                                setData("longitude", e.target.value)
                            }
                        />
                        <InputError message={errors.longitude} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="lokasi" value="Lokasi" />
                        <TextInput
                            id="lokasi"
                            name="lokasi"
                            value={data.lokasi}
                            className="mt-1 block w-full"
                            autoComplete="lokasi"
                            isFocused={true}
                            onChange={(e) =>
                                setData("lokasi", e.target.value)
                            }
                        />
                        <InputError message={errors.lokasi} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="keterangan" value="Keterangan" />
                        <TextInput
                            id="keterangan"
                            name="keterangan"
                            value={data.keterangan}
                            className="mt-1 block w-full"
                            autoComplete="keterangan"
                            isFocused={true}
                            onChange={(e) =>
                                setData("keterangan", e.target.value)
                            }
                        />
                        <InputError message={errors.keterangan} />
                    </div>
                    </div>
                <div className="flex items-center  mt-4">
                                <PrimaryButton
                                    type="submit"
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    {processing ? "Mengubah..." : "Ubah"}
                                </PrimaryButton>
                            </div>
                </div>
            </div>
            </form>
        </Authenticated>
    );
};

export default Update;
