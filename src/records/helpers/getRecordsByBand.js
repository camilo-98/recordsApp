
import { records } from '../data/records';

export const getRecordsByBand = ( band ) => {

    const validBands = ['Inquisition','Marduk'];

    if(!validBands.includes( band )){
        throw new Error(`${ band } is not a valid band`);
    }

    return records.filter( record => record.band === band );

}
