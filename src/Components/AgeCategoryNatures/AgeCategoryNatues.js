
import { Space, Table, Tag } from 'antd';
import React, {useEffect, useState} from 'react';
import getList from "../../ApiCalls";
import {useSelector} from "react-redux";



function AgeCategoryNatues() {
    let authRedux = useSelector((state) => state.auth)

    const [ageCategoryState, setAgeCategoryState] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loadingState, setLoadingState] = useState(false);

    const getData=(params={page:1})=>{
        setLoadingState(true)
        getList(authRedux.access_token,'AgeCategoryNature',params).then(e=>{
            setLoadingState(false)
            setAgeCategoryState(e.payload.AgeCategoryNature.data)
            setPagination({
                current: Number.parseInt(e.payload.AgeCategoryNature.page),
                pageSize: Number.parseInt(e.payload.AgeCategoryNature.per_page),
                total: Number.parseInt(e.payload.AgeCategoryNature.total),
            })
        })

    }
    useEffect(()=>{

       getData()

    },[])
   const handleTableChange = (e) =>{
       getData({page:e.current})
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },

    ];
    return(
        <div>
            <Table dataSource={ageCategoryState} columns={columns}
                   onChange={handleTableChange}
                   loading={loadingState}
                   pagination={{
                current: pagination.current_page,
                pageSize:pagination.per_page,
                total:pagination.total,
            }} />;
        </div>
    )
}

export {AgeCategoryNatues}