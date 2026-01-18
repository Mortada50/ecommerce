import { useApi } from "@/lib/api"
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {


    const api = useApi();
    // console.log("data ",api)
    const result = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const {data} = await api.get<Product[]>("/products")
            return data.products
        }
    })
    
    return result

}

export default useProducts