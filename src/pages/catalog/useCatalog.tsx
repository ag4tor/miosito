import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatalogItem } from "./model";
export function useCatalog(){

    const [catalogdata, setCatalogdata] = useState<CatalogItem[]>([]);

    useEffect(() => {
        console.log("INIT CATALAGO")
        axios.get<CatalogItem[]>("http://localhost:3001/catalog").then(res => {
            setCatalogdata(res.data)
        })

    }, [])

    return {
        catalogdata
    }

}