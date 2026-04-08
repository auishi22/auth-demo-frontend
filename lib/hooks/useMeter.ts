import { useQuery } from "@tanstack/react-query"
import {  Meter, MeterResponse } from "../types/meter.types"
import { meterBaseUrl } from "../api/endpoints/meter-api"
import { authStorage } from "../auth-storage"

// Get all meters
export const useAllMeters=()=>{
    return useQuery<MeterResponse,Error>({
        queryKey : [meterBaseUrl.GET_ALL_METERS],
        // queryFn : getAllMeters,
        queryFn : async ()=>{
            const token = authStorage.getToken();
            const res = await fetch(meterBaseUrl.GET_ALL_METERS,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data?.message);
            }
            return data;
        }
    })
}

// Get meter by ID
export const useSingleMeter=(meterId:string)=>{
    return useQuery<Meter,Error>({
        queryKey : [meterBaseUrl.GET_SINGLE_METER(meterId)],
        queryFn : async ()=>{
            const token = authStorage.getToken()
            const res = await fetch(meterBaseUrl.GET_SINGLE_METER(meterId),{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            const data = await res.json()
            if(!res.ok){
                throw new Error(data?.message); 
            }
            return data.data
        },
        enabled : !!meterId
    })
}

// 