import { records } from "../data/records"

export const getRecordById = ( id ) => {

    return records.find( record => record.id === id );

}