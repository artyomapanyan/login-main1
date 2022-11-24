import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";
import {TableUpdate} from "../Fragments/TableUpdate";

function MatchEventNatures(){

    return<ResourceTable
        itemroute={"/match-event-natures/"}
        //tableBelowButton={(data,setData)=><Button type={'primary'} onClick={()=>setData([])}>{data.length}</Button> }
        resource={'MatchEventNature'}
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
                title:'Marzadzever',
                key:'disciplines',
                dataIndex:'disciplines',
                render:(i,record)=>{
                    return i?.map(discipline=><div key={discipline.id}>{discipline.name}</div>)
                }
            }
        ]}
    />

}
export {MatchEventNatures}