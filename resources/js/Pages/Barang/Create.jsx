import { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
export default function CreateBarang({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_barang: "",
        nama_barang: "",
        kategori: "",
        harga_jual: "",
        harga_beli: "",
        stok: "",
    });
    const submit = (e) => {
        e.preventDefault();
            post(route("barang.store"));
        };
    return (
        <Authenticated user={auth.user}>
            <Head title="Tambah Barang" />
            <>
                <form onSubmit={submit}>
                    <div className="container m-8 flex flex-col gap-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Tambah Barang
                            </h2>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="kode_barang"
                                    value="Kode Barang"
                                />

                                <TextInput
                                    id="kode_barang"
                                    name="Kode Barang"
                                    value={data.kode_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="kode_barang"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("kode_barang", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.kode_barang}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="nama_barang"
                                    value="Nama Barang"
                                />

                                <TextInput
                                    id="nama_barang"
                                    type="text"
                                    name="Nama Barang"
                                    value={data.nama_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="nama_barang"
                                    onChange={(e) =>
                                        setData("nama_barang", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.nama_barang}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="kategori"
                                    value="Kategori"
                                />

                                <TextInput
                                    id="kategori"
                                    type="text"
                                    name="Kategori"
                                    value={data.kategori}
                                    className="mt-1 block w-full"
                                    autoComplete="kategori"
                                    onChange={(e) =>
                                        setData("kategori", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.kategori}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="harga_jual"
                                    value="Harga Jual"
                                />

                                <TextInput
                                    id="harga_jual"
                                    type="number"
                                    name="Harga Jual"
                                    value={data.harga_jual}
                                    className="mt-1 block w-full"
                                    autoComplete="harga_jual"
                                    onChange={(e) =>
                                        setData("harga_jual", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.harga_jual}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="harga_beli"
                                    value="Harga Beli"
                                />

                                <TextInput
                                    id="harga_beli"
                                    type="number"
                                    name="Harga Beli"
                                    value={data.harga_beli}
                                    className="mt-1 block w-full"
                                    autoComplete="harga_beli"
                                    onChange={(e) =>
                                        setData("harga_beli", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.harga_beli}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="stok" value="Stok" />

                                <TextInput
                                    id="stok"
                                    type="number"
                                    name="Stok"
                                    value={data.stok}
                                    className="mt-1 block w-full"
                                    autoComplete="stok"
                                    onChange={(e) =>
                                        setData("stok", e.target.value)
                                    }
                                    
                                />

                                <InputError
                                    message={errors.stok}
                                    className="mt-2"
                                />
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
