
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

function LoggedId(){
    let auth = useSelector((state) => state.auth);
    const [userId,setUserId] = useState(auth.user?.id)
    useEffect(()=>{
        setUserId(auth.user?.id)
    },[auth.user])
   return userId
}
export  {LoggedId}