import Alert from "@/Components/Alert";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

const ViewStock = ({ auth, barang }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleDelete = (id) => {
        if (!confirm("Apakah Anda yakin?")) return;
        router.delete(route("barang.destroy", id));
    };

    const filteredBarang = barang.filter((item) => {
        return (
            item.nama_barang.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.kode_barang.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <Authenticated user={auth.user}>
            <Head title="Detail Barang" />
            <h2 className=" p-6 font-semibold text-xl text-gray-800 leading-tight ">
                Detail Barang
            </h2>
            <div className=""></div>
            <Alert />
            <div className="bg-white rounded-xl shadow-md ">
                <div className="flex items-center justify-between bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-6 py-4 rounded-t-xl">
                    <h6 className="text-base font-semibold leading-relaxed">
                        Detail Barang
                    </h6>
                    <Link
                        className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        href={route("barang.create")}
                    >
                        Tambah
                    </Link>
                </div>
                <div className="p-6 overflow-x-scroll right-8">
                    <div className="mb-4 w-96 ">
                        <label htmlFor="search" className="block font-semibold">
                            Pencarian Barang:
                        </label>
                        <div className="py-2">
                        <input
                            type="text"
                            id="search"
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            placeholder="Cari barang..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        </div>
                    </div>
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Kode Barang
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Nama Barang
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Kategori
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Harga Jual
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Harga Beli
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Stok
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Action
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBarang.map((item, i) => (
                                <tr key={i} className="text-center">
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.kode_barang}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.nama_barang}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.kategori}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.harga_jual}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.harga_Beli}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.stok}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <Link
                                            className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                                            href={route("barang.edit", item.id)}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <button
                                            className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                                            onClick={() =>
                                                handleDelete(item?.id)
                                            }
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
};

export default ViewStock;
