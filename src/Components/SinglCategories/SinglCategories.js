import getSinglItem from "../../ApiCall1";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function SinglCategories() {
    let authRedux = useSelector((state) => state.auth)

    useEffect(()=>{

        getSinglItem(authRedux.access_token,'AgeCategoryNature').then(e=>{
            console.log(e)
        })

    },[])
    return(
        <div>
            aaa
        </div>
    )
}
export {SinglCategories}