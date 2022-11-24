import React from 'react';


import {ResourceTable} from "../Fragments/ResourceTable";
import {Link} from "react-router-dom";
import {TableUpdate} from "../Fragments/TableUpdate";


function FfaUsers() {

    return(
        <ResourceTable
            resource={'User'}
            itemroute={"/ffa-users/"}
            tableColumns={[
                {
                    title: 'Անուն',
                    dataIndex: 'name',
                    key: 'name',
                    render:(e,record)=>{
                        return <TableUpdate recordTableName={record}
                                            dataIndex={'name'}/>
                    }
                },
                {
                    title: 'Էլ․Փոստ',
                    dataIndex: 'email',
                    key: 'email',
                },

            ]}
        />
    )
}

export {FfaUsers}