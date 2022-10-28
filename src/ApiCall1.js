import api from "./api";

export default function getSinglItem(token,resource,params={}){
    let queryParams = serialize(params)
    return fetch(`${api[resource].single.url}?${queryParams}`,{
        method:api[resource].single.method,
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json())

}


function serialize(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

console.log(serialize({
    foo: "hi there",
    bar: "100%"
}))

