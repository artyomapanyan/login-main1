import {Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography} from "antd";
import React, {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {CalculatorOutlined} from '@ant-design/icons';

import moment from "moment/moment";
import {Table} from "antd/es";
import api from "../../api";

function RoadExpenseCalculator() {
    let authRedux = useSelector((state) => state.auth)


    const [loading,setLoading] = useState(false);
    const [roadExpenseState,setRoadExpenseState] = useState([]);
    const [searchState,setSearchState] = useState([]);




    const onFinish = (values) => {
        setLoading(true);
        values.date_from = moment(values.date_from).utc(true).format('YYYY-MM-DD HH:mm:ss')
        values.date_to = moment(values.date_to).utc(true).format('YYYY-MM-DD HH:mm:ss')
        return fetch(`${api.RoadExpense.calc.url}`,{
            method:api.RoadExpense.calc.method,
            body:JSON.stringify(values),
            headers: {
                Authorization: authRedux.access_token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(resp=>resp.json()).then((resp)=>{
            setRoadExpenseState(resp.payload.RoadExpense)

            setLoading(false)
            })
    }


    const searchPerson= (value) => {
        if(value.length >= 3) {
            let object = {
                name: value,
                match_official: null
            };
            for (let [k, v] of Object.entries(object)) {
                if (v === null) {
                    delete object[k]
                }

                let queryString = new URLSearchParams(object).toString();
                setTimeout(() => {
                    fetch(`${api.Person.search.url}?${queryString}`, {
                        method: api.Person.search.method,
                        headers: {
                            Authorization: authRedux.access_token,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    }).then(resp => resp.json()).then((resp) => {
                        setSearchState(resp?.payload?.Person)
                        setLoading(false)
                    })
                }, 1000)
            }

        }

    }

    const columns = [
        {
            title: 'Անձ',
            dataIndex: [0,'person','local_name','title'],
            key: 'name',

        },
        {
            title: 'Տաբելային համար',
            dataIndex: [0, 'person', 'users', 0],
            key: 'name',
        },
        {
            title: 'Բնակության վայր',
            dataIndex: [0, 'person', 'location', 'name'],
            key: 'name',
        },
        {
            title: 'Հանդիպումներ',
            dataIndex: 'name',
            key: 'count',
            render: (item, matches) => matches.length,
        },
        {
            title: 'Գումար',
            dataIndex: 'name',
            key: 'name',
            render: (i, record)=> record.map(el=>el?.payment_rate ? el?.payment_rate?.rate_amount : 0).reduce((sum, current) => sum + current, 0)
        },
    ]

    const col = [
        {
            title: 'Հանդիպման սկիզբ',
            dataIndex: ['match','date_time_local'],
            key: 'match.date_time_local',

        },
        {
            title: 'Դերը',
            dataIndex: ['role', 'name'],
            key: 'role.name',
        },
        {
            title: 'Կոդը',
            dataIndex: ['match', 'game_id'],
            key: 'match.game_id',
        },
        {
            title: 'Հանդիպման վայր',
            dataIndex: ['match', 'facility', 'location', 'name'],
            key: 'match.facility.location.name',
        },
        {
            title: 'Մարզադաշտ',
            dataIndex: ['match', 'facility', 'local_name', 'short_name'],
            key: 'match.facility.local_name.short_name',
        },
        {
            title: 'Ճանապարհածախս',
            dataIndex: ['to_pay', 'road_money'],
            key: 'to_pay.road_money',
        },
        {
            title: 'Օրապահիկ',
            dataIndex: ['to_pay', 'day_money'],
            key: 'to_pay.day_money',
        },
        {
            title: 'Տարիֆ',
            dataIndex: ['payment_rate', 'rate_amount'],
            key: 'payment_rate.rate_amount',
        },

    ]


    return(
        <div>
            <div>
                {loading ? <Spin />:<Form
                    style={{display:"flex"}}
                    name="GateType"
                    onFinish={onFinish}
                    initialValues={[]}

                >
                    <Form.Item
                        label='Սկիզբ'
                        name="date_from"

                    >
                        <DatePicker
                            placeholder={'Սկիզբ'} />
                    </Form.Item>
                    <Form.Item
                        label='Ավարտ'
                        name="date_to"

                    >
                        <DatePicker
                            placeholder={'Ավարտ'} />
                    </Form.Item>
                    <Form.Item
                        label='Գտնել'
                        name="person_id"
                        >
                        <Select
                            showSearch
                            onSearch={searchPerson}
                            style={{ width: 200,}}
                            optionFilterProp="name"

                        >
                            {searchState.map((el) => {
                                return <Select.Option key={el.id} value={el.id} name={el?.local_name?.title}> {el?.local_name?.title}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit"><CalculatorOutlined />Հաշվարկել</Button>
                    </Form.Item>
                </Form>}
            </div>
            <div>
                <Row>
                    <Col lg={24}>
                        <Table
                            columns={columns}
                            rowKey={(record,key)=>key}
                            expandable={{
                                expandedRowRender: (record) => (
                                        <div>
                                            <Row>
                                                <Col lg={24}>
                                                    <Table
                                                        columns={col}
                                                        dataSource={record}
                                                    />
                                                </Col>
                                            </Row>

                                        </div>
                                ),
                            }}
                            dataSource={roadExpenseState}
                            summary={(record) => {
                                let b = record.map(el1 => el1.map(el=>el?.payment_rate ? el?.payment_rate?.rate_amount : 0).reduce((sum, current) => sum + current, 0))
                                let a = b.reduce((sum, current) => sum + current, 0)
                                return(
                                    <>
                                        <Table.Summary.Row>
                                            <Table.Summary.Cell>Ընդհանուր</Table.Summary.Cell>
                                            <Table.Summary.Cell/>
                                            <Table.Summary.Cell/>
                                            <Table.Summary.Cell><Typography.Text type={'danger'}>{record.length}</Typography.Text></Table.Summary.Cell>
                                            <Table.Summary.Cell/>
                                            <Table.Summary.Cell><Typography.Text type={'danger'}>{a}</Typography.Text></Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    </>
                                )
                            }
                            }
                        />

                    </Col>
                </Row>

            </div>
        </div>
    )
}

export {RoadExpenseCalculator}