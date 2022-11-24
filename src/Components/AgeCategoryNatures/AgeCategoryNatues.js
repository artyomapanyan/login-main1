
import React from 'react';
import {ResourceTable} from "../Fragments/ResourceTable";
import {TableUpdate} from "../Fragments/TableUpdate";

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
                    render:(e,record)=>{
                        return <TableUpdate recordTableName={record}
                                            dataIndex={'name'}/>
                    }
                },
                {
                    title: 'Min Age',
                    dataIndex: 'min_age',
                    key: 'MinAge',
                    render:(e,record)=><TableUpdate recordTableName={record}
                                            dataIndex={'min_age'}/>
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