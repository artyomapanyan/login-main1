import React from 'react';

import {Link} from "react-router-dom";

import {ResourceTable} from "../Fragments/ResourceTable";


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
                },
            ]}
        />
    )
}

export {GateType}
