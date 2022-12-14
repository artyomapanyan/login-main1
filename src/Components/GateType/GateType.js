import React from 'react';

import {Link} from "react-router-dom";

import {ResourceTable} from "../Fragments/ResourceTable";
import {TableUpdate} from "../Fragments/TableUpdate";


function GateType() {

    return(
        <ResourceTable
            resource={'GateType'}
            itemroute={"/gate-type/"}
            tableColumns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render:(e,record)=>{
                        return <TableUpdate recordTableName={record}
                                            dataIndex={'name'}/>
                    }
                },
            ]}
        />
    )
}

export {GateType}
