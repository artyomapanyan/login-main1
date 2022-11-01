import React from 'react';

import {Link} from "react-router-dom";

import {ResourceTable} from "../Fragments/ResourceTable";


function Location() {

    return(
        <ResourceTable
            resource={'Location'}
            itemroute={"/location/"}
            tableColumns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Type',
                    dataIndex: ['type','title'],
                    key: 'type',
                //    render:(e,record)=>{
                //         console.log(record)
                //         return <span>{record.type.title}</span>
                //             }
                 },
                {
                    title: 'Code',
                    dataIndex: ["code"],
                    key: 'code',
                },

            ]}
        />
    )
}

export {Location}

