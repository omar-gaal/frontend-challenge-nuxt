import type { Product } from "~/types/types"

export const useFakeStoreData = () => {
    const apiUrl = 'https://fakestoreapi.com/products'
    const {data: storeData, pending, error, refresh} = useFetch<Product[]>(apiUrl)

    return {
        storeData,
        pending,
        error,
        refresh
    };
}



