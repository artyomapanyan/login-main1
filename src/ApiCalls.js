import api from "./api";

export default function getList(token,resource,params={}){
    let queryParams = serialize(params)
    return fetch(`${api[resource].list.url}?${queryParams}`,{
        method:api[resource].list.method,
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
