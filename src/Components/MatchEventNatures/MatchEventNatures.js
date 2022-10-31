import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";
import {Button} from "antd";

function MatchEventNatures(){

    return<ResourceTable
        itemroute={"/match-event-natures/"}
        //tableBelowButton={(data,setData)=><Button type={'primary'} onClick={()=>setData([])}>{data.length}</Button> }
        resource={'MatchEventNature'}
        tableColumns={[
            {
                title:'Anun',
                key:'name',
                dataIndex:'name'
            },
            {
                title:'Marzadzever',
                key:'disciplines',
                dataIndex:'disciplines',
                render:(i,record)=>{
                    console.log(i,record)
                    return i?.map(discipline=><div key={discipline.id}>{discipline.name}</div>)
                }
            }
        ]}
    />

}
export {MatchEventNatures}