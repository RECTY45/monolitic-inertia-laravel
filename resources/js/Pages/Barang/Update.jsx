import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Update = ({ auth, barang }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_barang: "",
        nama_barang: "",
        kategori: "",
        harga_jual: "",
        harga_beli: "",
        stok: "",
    });
    return (
        <Authenticated user={auth.user}>
            <Head title="Edit Barang" />
            <div className="container m-8 flex flex-col gap-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Barang
                    </h2>
                    <div className="mt-4">
                        <InputLabel htmlFor="kode_barang" value="Kode Barang" />
                        <TextInput
                            id="kode_barang"
                            name="kode_barang"
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
                        <InputLabel htmlFor="nama_barang" value="Nama Barang" />
                        <TextInput
                            id="nama_barang"
                            name="nama_barang"
                            value={data.nama_barang}
                            className="mt-1 block w-full"
                            autoComplete="nama_barang"
                            isFocused={true}
                            onChange={(e) =>
                                setData("nama_barang", e.target.value)
                            }
                        />
                        <InputError message={errors.nama_barang} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="kategori" value="Kategori" />
                        <TextInput
                            id="kategori"
                            name="kategori"
                            value={data.kategori}
                            className="mt-1 block w-full"
                            autoComplete="kategori"
                            isFocused={true}
                            onChange={(e) =>
                                setData("kategori", e.target.value)
                            }
                        />
                        <InputError message={errors.kategori} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="harga_jual" value="Harga Jual" />
                        <TextInput
                            id="harga_jual"
                            name="harga_jual"
                            value={data.harga_jual}
                            className="mt-1 block w-full"
                            autoComplete="harga_jual"
                            isFocused={true}
                            onChange={(e) =>
                                setData("harga_jual", e.target.value)
                            }
                        />
                        <InputError message={errors.harga_jual} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="harga_beli" value="Harga Beli" />
                        <TextInput
                            id="harga_beli"
                            name="harga_beli"
                            value={data.harga_beli}
                            className="mt-1 block w-full"
                            autoComplete="harga_beli"
                            isFocused={true}
                            onChange={(e) =>
                                setData("harga_beli", e.target.value)
                            }
                        />
                        <InputError message={errors.harga_beli} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="stok" value="Stok Barang" />
                        <TextInput
                            id="stok"
                            name="stok"
                            value={data.stok}
                            className="mt-1 block w-full"
                            autoComplete="stok"
                            isFocused={true}
                            onChange={(e) =>
                                setData("stok", e.target.value)
                            }
                        />
                        <InputError message={errors.stok} />
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
        </Authenticated>
    );
};

export default Update;
