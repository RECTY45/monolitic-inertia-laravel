import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default () => {

    const here = route().current();


    function handleSearch (e){
       
        router.get(route(here),
        {
            q: e.target.value
        },    
        {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }

    return(

        <div className="mb-4 w-96 ">
                        <label htmlFor="search" className="block font-semibold">
                            Pencarian Lokasi :
                        </label>
                        <div className="py-2">
                            <input
                                type="text"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                placeholder="Cari Bahan Baku..."
                                onChange={(e) => handleSearch(e)}
                            />
                        </div>
                    </div>
    )

}