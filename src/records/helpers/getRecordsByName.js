import { records } from "../data/records";

export const getRecordsByName = ( title = '' ) => {

    title = title.toLowerCase().trim();

    if(title.length === 0) return [];

    return records.filter(
        record => record.title.toLowerCase().includes( title )
    );

    

}