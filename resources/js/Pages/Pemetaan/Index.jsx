import Alert from "@/Components/Alert";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import Filter from "@/Components/datatable/filter";

const ViewStock = ({ auth, pemetaan }) => {
  

    return (
        <Authenticated user={auth.user}>
            <Head title="Kelola Lokasi Pemetaan" />
            <h2 className="p-5 font-semibold text-xl text-gray-800 leading-tight">
                Kelola Data Lokasi Pemetaan
            </h2>
            <Alert />
            <div className="rounded-xl shadow-md mx-3 bg-white">
                <div className="flex items-center justify-between bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-6 py-4 rounded-t-xl">
                    <h6 className="text-base font-semibold leading-relaxed">
                        Detail Lokasi
                    </h6>
                    <Link
                        className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        href={route("pemetaan.create")}
                    >
                        Tambah
                    </Link>
                </div>
                <div className="p-6 overflow-x-scroll right-8">
                   <Filter  />
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        No
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Bahan Baku
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Gambar
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Latitude
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Longitude
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Lokasi
                                    </p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                    <p className="text-[11px] font-bold uppercase text-blue-gray-400">
                                        Keterangan
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
                            {pemetaan.map((item, i) => (
                                <tr key={i} className="text-center">
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {i + 1}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.bahan_baku}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <img src={`http://127.0.0.1:8000/storage/${item.gambar}`} alt="" />
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.latitude}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.longitude}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.lokasi}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        {item.keterangan}
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <Link
                                            className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                                            href={route(
                                                "pemetaan.edit",
                                                item.id
                                            )}
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
