import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";
import {TableUpdate} from "../Fragments/TableUpdate";


function NationalFacilities(){

    return<ResourceTable
        itemroute={"/national-facilities/"}
        //tableBelowButton={(data,setData)=><Button type={'primary'} onClick={()=>setData([])}>{data.length}</Button> }
        resource={'NationalFacility'}
        tableColumns={[
            {
                title:'Anun',
                key:'local_name',
                dataIndex:'name',
                render:(i,record)=>{
                    return <TableUpdate recordTableName={record.local_name}
                    dataIndex={'name'}/>

                }
            },
            {
                title:'Fifa name',
                key:'DocumentType',
                dataIndex:'DocumentType',
                render:(i,record)=>{
                    return record.location.name

                }
            }
        ]}
    />

}
export {NationalFacilities}