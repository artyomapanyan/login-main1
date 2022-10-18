import React from "react";
import {Navigate} from 'react-router-dom';
import {LoggedId} from "../../Functions";


function RoutePermission (props) {

    if(props.checkAuth){
        if(!LoggedId()){
         return <Navigate to={'/'}/>
        }
    }
    return props.children;

};
export default RoutePermission;