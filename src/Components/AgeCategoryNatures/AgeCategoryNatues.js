
import React from 'react';

import {Link} from "react-router-dom";

import {ResourceTable} from "../Fragments/ResourceTable";


function AgeCategoryNatues() {

    return(
        <ResourceTable
            resource={'AgeCategoryNature'}
            itemroute={"/age-categories/"}
            tableColumns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render:(e,record)=><Link to={`/age-categories/${record.id}`}>{e}</Link>,
                },
                {
                    title: 'Min Age',
                    dataIndex: 'min_age',
                    key: 'MinAge',
                },
                {
                    title: 'Max Age',
                    dataIndex: 'max_age',
                    key: 'MaxAge',
                },
            ]}
            />
    )
}

export {AgeCategoryNatues}