import {Button, Space, Table} from 'antd';
import React, {useEffect, useState} from 'react';
import {deleteSingleItem, getList} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function ResourceTable({tableColumns,resource, itemroute,tableBelowButton}) {
    let authRedux = useSelector((state) => state.auth)
    let navigate = useNavigate();

    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loadingState, setLoadingState] = useState(false);

    const getData=(params={page:1})=>{
        setLoadingState(true)
        getList(authRedux.access_token,resource,params).then(response=>{
            setLoadingState(false)
            setData(response.data)
            setPagination({
                current: Number.parseInt(response.page),
                pageSize: Number.parseInt(response.per_page),
                total: Number.parseInt(response.total),
            })
        })
    }

    const handleTableChange = (e) =>{
        getData({page:e.current})
    }

    useEffect(()=>{

        getData()

    },[])

    const onDeleteItem = (id) => {
        setLoadingState(true)
        deleteSingleItem(authRedux.access_token,resource, id).then((e)=>{
            setData(data.filter(el=>el.id !== e.id));
            setLoadingState(false)
        })
    }

    const columns = [
        ...tableColumns,
        {
            title: "Remove",
            dataIndex: 'id',
            key: 'id',
            render:(e)=><Space>
                <Button type={"primary"} onClick={() => onDeleteItem(e)}>X</Button>
                <Button type={'secondary'} onClick={() => onUpdateItem(e)}>Update</Button>
            </Space>
        },

    ];
   const onUpdateItem = (id)=>{
        navigate(itemroute+id)
    }

    const createItem = () => {
        navigate(itemroute+'new')
    }



    return(
        <div>
            <Button type={"primary"} onClick={createItem} >Create</Button>
            <Table dataSource={data} columns={columns}
                   onChange={handleTableChange}
                   loading={loadingState}
                   rowKey={(e,key)=>key}
                   pagination={{
                       current: pagination.current_page,
                       pageSize:pagination.per_page,
                       total:pagination.total,
                   }} />
            {/*{tableBelowButton?tableBelowButton(data,setData):null}*/}
        </div>
    )
}

export {ResourceTable}