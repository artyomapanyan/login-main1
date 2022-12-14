import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";
import {TableUpdate} from "../Fragments/TableUpdate";


function TeamOfficialRole(){

    return<ResourceTable
        itemroute={"/team-official-role/"}
        //tableBelowButton={(data,setData)=><Button type={'primary'} onClick={()=>setData([])}>{data.length}</Button> }
        resource={'TeamOfficialRole'}
        tableColumns={[
            {
                title:'Anun',
                key:'name',
                dataIndex:'name',
                render:(e,record)=>{
                    return <TableUpdate recordTableName={record}
                                        dataIndex={'name'}/>
                }
            },
            {
                title:'Fifa name',
                key:'DocumentType',
                dataIndex:'DocumentType',
                render:(i,record)=>{
                    return record.fifa_name
                }
            }
        ]}
    />

}
export {TeamOfficialRole}