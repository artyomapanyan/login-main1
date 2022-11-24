import {Button, Collapse, Form, Input, Modal, Popconfirm, Select, Space, Table, message, Spin} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {deleteSingleItem, getAll, getList} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DeleteOutlined, SearchOutlined} from "@ant-design/icons";

const { Panel } = Collapse;

function ResourceTable({tableColumns,resource, itemroute, filterable, filters}) {
    let authRedux = useSelector((state) => state.auth)
    let navigate = useNavigate();
    let formRef = useRef();



    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const [filtersState, setFiltersState] = useState({});
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    //const [numberState, setNumberState] = useState(10);
    //const [clearNumberState, setClearNumberState] = useState();
    const [selectionType, setSelectionType] = useState('checkbox');
    const [chackedState, setChackedState] = useState([]);


    const getData=(params={page:1})=>{
        setLoadingState(true)
        getList(authRedux.access_token,resource,params).then(response=>{
            setLoadingState(false)
            setData(response.data)
            setPagination({
                current: Number.parseInt(response.current_page),
                pageSize: Number.parseInt(response.per_page),
                total: Number.parseInt(response.total),
            })
        })
    }

    const handleTableChange = (e) =>{
        getData({
            ...filtersState,
            page:e.current})
    }
    // useEffect(()=>{
    //    let interval = setInterval(() =>{
    //             setNumberState((prevState)=> prevState-1)
    //         }, 1000);
    //     setClearNumberState(interval)
    // },[])
    //
    // useEffect(()=>{
    //     if(numberState === 0){
    //         clearInterval(clearNumberState)
    //     }
    // },[numberState])

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
            render:(e, v)=><Space>
                <Popconfirm
                    title="Հաստատ ուզում եք ջնջե՞լ"
                    onConfirm={() => onDeleteItem(e)}
                    okText="Այո"
                    cancelText="Ոչ"
                >
                    <Button type={"primary"} icon={<DeleteOutlined />}>Delete</Button>
                </Popconfirm>
                <Button type={'secondary'} onClick={() => onUpdateItem(e)}>Update</Button>
                <Button type={'secondary'} onClick={() => onShowJson(v)}>Show</Button>
            </Space>
        },

    ];
    const onShowJson = (v)=>{
        Modal.info({
            content: JSON.stringify({...v,
                                          number: v.id+1})
        })

    }
   const onUpdateItem = (id)=>{
        navigate(itemroute+id)
    }

    const createItem = () => {
        navigate(itemroute+'new')
    }

    const onFinish = (values) => {
      Object.keys(values).forEach(el=>{
               if(!values[el]){
                   delete values[el];
               }
           })
        setFiltersState(values);
        getData(values)
    }

    const onUpdateFilter = () => {
        setFiltersState({})
        formRef.current.resetFields()
    }

    const onDeleteChackeds = () => {
        setLoadingState(true)
        Promise.all(chackedState.map(e=>deleteSingleItem(authRedux.access_token,resource, e))).then(responses=>{
            let removableIds = responses.map(e=>e.id);
            setData(data.filter(item =>!removableIds.includes(item.id)));
            setChackedState(chackedState.filter(item =>!removableIds.includes(item)));
            setLoadingState(false)
        } )
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setChackedState(selectedRows.map(el => el.id))
        },
    };

    return(
        <div>
            <div style={{display:"flex"}}>
                <Button type={"primary"} onClick={createItem} >Create</Button>
                <Popconfirm
                    title="Հաստատ ուզում եք ջնջե՞լ"
                    onConfirm={onDeleteChackeds}
                    okText="Այո"
                    cancelText="Ոչ"
                >
                    <Button style={{marginLeft:20}} type={"primary"} >Delete</Button>
                </Popconfirm>
                {/*<div style={{marginLeft:20}}>{numberState}</div>*/}
            </div>

            {filterable?<Form
                ref={formRef}
                name="filters"
                onFinish={onFinish}
            >
                <Collapse style={{ marginBottom: 15 }}>
                    <Panel forceRender={true} collapsible={isModalOpen2 ?'disabled':null} header="Ցուցադրել ֆիլտրերը" extra={<span style={{ marginRight: '5px' }}><SearchOutlined /></span>} key="1">
                        {filters.map((el) =>{
                            return <Form.Item label={el.label} name={el.name}>
                                {el.type==='input'? <Input placeholder={el.label} />:el.type==='select'?  <Select
                                    style={{
                                        width: 300,
                                        marginBottom: 10
                                    }}>
                                    {el.options.map((el) => {
                                        return <Select.Option key={el.id} value={el.id}>{el.name}</Select.Option>

                                    })}
                                </Select>:null}
                                </Form.Item>
                            }
                            )}
                            <div style={{ display: "flex" }}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" >
                                        Filter
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={onUpdateFilter} style={{ marginLeft:20 }} >
                                        Update
                                    </Button>
                                </Form.Item>
                            </div>


                    </Panel>
                </Collapse>

            </Form>:null}
            {loadingState ? <Spin />:<Table
                   rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                   dataSource={data}
                   columns={columns}
                   onChange={handleTableChange}
                   loading={loadingState}
                   rowKey={(e,key)=>key}
                   pagination={{
                       ...pagination,
                       showTotal: total=> total
                   }} />}
            {/*{tableBelowButton ? tableBelowButton(data,setData) : null}*/}

        </div>
    )
}

export {ResourceTable}