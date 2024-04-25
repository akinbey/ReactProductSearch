import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField"



export const Search = ({ allData, setAllData, defaultData }) => {



    // inputtan gelen degeri tutuyor
    const typeingStart = (e) => {
        let value = e.target.value.trim(" ")
        if (value) {
            const getData = allData?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
            setAllData(getData)
        } else {
            setAllData(defaultData)
        }
    }


    return (
        <>
            <div className="main mb-3 mt-5" style={{ marginRight: "1rem" }}>
                <div className="search">
                    <TextField onChange={(e) => typeingStart(e)} id="outlined-basic" label="Search Product" variant="outlined" />
                </div>

            </div>
        </>
    )
}
export default Search
