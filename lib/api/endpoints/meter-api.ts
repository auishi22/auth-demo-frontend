const METER_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/meters`;

export const meterBaseUrl = {
    GET_ALL_METERS : `${METER_API_URL}`,
    CREATE_METER : `${METER_API_URL}`,
    GET_SINGLE_METER : (meterId : string) => `${METER_API_URL}/${meterId}`,
    UPDATE_METER : (meterId : string) => `${METER_API_URL}/${meterId}`,
    DELETE_METER : (meterId : string) => `${METER_API_URL}/${meterId}`,
}