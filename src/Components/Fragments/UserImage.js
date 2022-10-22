import {Avatar, Card} from "antd";
import Configs from "../../Configs";
import "./UserImage.css"
import React from 'react';




function UserImage({id}) {
   let {Images} = Configs;

    return(
        <div>
            <Avatar shape="square" className="qqq" size="large" src={Images[id]} />

        </div>
        )


}

export default UserImage;