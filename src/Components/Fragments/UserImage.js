import {Avatar} from "antd";
import Configs from "../../Configs";
import "./UserImage.css"



function UserImage({id}) {
   let {Images} = Configs;

   console.log(Images[id], "aaa")
    return(<Avatar shape="square" className="qqq" size="middle" src={Images[id]} />)
}

export default UserImage;