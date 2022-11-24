import React, {useEffect, useRef, useState} from 'react';
import {Button, Cascader, Form, Input, Spin} from "antd";
import {createSingleItem, getAll, getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


function CreateAndUpdateNationalFacilities() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [loading,setLoading] = useState(false);
    const [facilityState,setFacilityState] = useState([]);
    const [locationState,setLocationState] = useState([]);

    const onFinish = (values) => {
        setLoading(true);
        if(params.id){
            updateSingleItem(authRedux.access_token,'NationalFacility', params.id, values).then((e)=>{
                setLoading(false);
            })
        }else{
            createSingleItem(authRedux.access_token,'NationalFacility',  values).then((e)=>{
                navigate(`/national-facilities/${e.id}`)
            })
        }
    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            params.id?getSinglItem(authRedux.access_token,'NationalFacility', params.id):{},
            getAll(authRedux.access_token,'Location')
        ]).then(response=>{
            if(response[0]?.id){
                if(response[0]?.location?.parent_locations !== null) {
                    response[0].location?.parent_locations?.push(response[0]?.location_id)
                    response[0].location_id = response[0].location?.parent_locations;
                }else{
                    response[0].location_id = [response[0].location_id]
                }
            }
            setFacilityState(response[0])
            setLocationState(response[1])
            setLoading(false)
        })
    },[])


    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }


    return (
        <div>
            {loading ? <Spin />:<Form
                ref={formRef}
                name="GateType"
                onFinish={onFinish}
                initialValues={{...facilityState,
            }}
            >
                <Form.Item
                    label={'Անվանում'}
                    name={['local_name', 'name']}
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Name"/>
                </Form.Item>
                <Form.Item
                    label={'karch'}
                    name={['local_name', 'short_name']}
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Name"/>
                </Form.Item>
                <Form.Item
                    label={'Միջազգային անվանում'}
                    name="international_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Name"/>
                </Form.Item>
                <Form.Item
                    label="Պետություն"
                    name="location_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}>
                    <Cascader
                        options={locationState}
                        fieldNames={{
                            label: 'name',
                            value: 'id',
                            children: 'children' }}
                        placeholder="Please select"
                        showSearch
                        changeOnSelect/>

                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>}
        </div>
    )
}

export {CreateAndUpdateNationalFacilities}