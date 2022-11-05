import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";


function TeamOfficialRole(){

    return<ResourceTable
        itemroute={"/team-official-role/"}
        //tableBelowButton={(data,setData)=><Button type={'primary'} onClick={()=>setData([])}>{data.length}</Button> }
        resource={'TeamOfficialRole'}
        tableColumns={[
            {
                title:'Anun',
                key:'name',
                dataIndex:'name'
            },
            {
                title:'Fifa name',
                key:'DocumentType',
                dataIndex:'DocumentType',
                render:(i,record)=>{
                    //console.log("sssssssddddd",record)
                    return record.fifa_name
                }
            }
        ]}
    />

}
export {TeamOfficialRole}