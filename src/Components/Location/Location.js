import React, {useEffect, useState} from 'react';

import {ResourceTable} from "../Fragments/ResourceTable";
import {getAll, getSinglItem} from "../../ApiCalls";
import {useSelector} from "react-redux";

function Location() {
    let authRedux = useSelector((state) => state.auth)

    const [locationTypeState, setLocationTypeState] = useState([]);
    const [locationState, setLocationState] = useState([]);
    //const [loading,setLoading] = useState(false);

    useEffect(()=>{

            getAll(authRedux.access_token,'LocationType').then(responses=>{
                setLocationTypeState(responses)
        })
        getAll(authRedux.access_token,'Location').then(responses=>{
            setLocationState(responses)

        })
    },[])
    console.log("n",locationState)
    return(
        <ResourceTable
            resource={'Location'}
            itemroute={"/location/"}
            filterable={true}
            filters={[
                {
                    label:'anun',
                    name:'name',
                    type:'input'
                },
                {
                    label:'tesak',
                    name:'type',
                    type:'select',
                    options:[

                            ...locationTypeState.map((el) => {
                                return {
                                    id: el.id,
                                    name: el.title
                                }
                            })


                    ]
                },
                {
                    label:'erkir',
                    name:'locName',
                    type:'select',
                    options:[
                        ...locationState.map((el) => {
                            return {
                                id: el.id,
                                name: el.name
                            }
                        })

                    ]
                },
            ]}
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

