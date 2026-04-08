// import { MeterResponse } from "@/lib/types/meter.types";
// import { meterBaseUrl } from "../../endpoints/meter-api";
// import { authStorage } from "@/lib/auth-storage";

// export const getAllMeters= async () : Promise<MeterResponse> =>{
// try{
//    const token = authStorage.getToken();

//     const res = await fetch(meterBaseUrl.GET_ALL_METERS,{
//         headers : {
//             Authorization : `Bearer ${token}`
//         }
//     })
//     const data = await res.json();
//     if(!res.ok){
//         throw new Error(data?.message);
//     }
//     return data 
// }catch(error){
//     throw error instanceof Error ? error : new Error("Something went wrong");
// }
// }