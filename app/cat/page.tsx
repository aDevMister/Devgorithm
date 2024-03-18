"use client"
import { useEffect, useState } from "react";

const Cat = () => {
    const [data, setData] = useState({ catList: [], isLoading: false, error: '' })

    useEffect(() => {
        setData({ ...data, isLoading: true });

        fetch('https://catfact.ninja/breeds?limit=3')
            .then(res => res.json())
            .then(data => {
                setData({ ...data, isLoading: false, catList: data.data })
            })
            .catch((error: any) => {
                setData({ ...data, error: error.message, isLoading: false })
            });
    }, []);

    return (
        <div>
            {
                data.isLoading ? (<div>Loading...</div>) :
                    data.error ? (<div>Something went wrong, please reload the page or try later</div>) :
                        data.catList.length > 0 ? (
                            data.catList.map((cat: any) => (
                                <div key={cat.id} className="border p-2 my-2">
                                    <h3 className="text-xl">{cat.breed}</h3>
                                    <p>{cat.country}</p>
                                </div>
                            )
                            )
                        ) : (<div>No data at the moment, please try later.</div>)
            }
        </div>
    );
}

export default Cat;
