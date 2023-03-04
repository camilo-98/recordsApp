import { useMemo } from "react";
import { getRecordsByBand } from "../helpers";
import { RecordCard } from "./";



export const RecordList = ({ band }) => {

    const records = useMemo( () => getRecordsByBand( band ), [ band ] );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
       {
        records.map( record =>(
            <RecordCard  
                key={ record.id }
                { ...record }
            />
        ) )
       } 
    </div>
  )
}

