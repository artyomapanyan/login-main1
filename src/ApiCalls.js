import api from "./api";

export function getList(token,resource,params={}){
    let queryParams = serialize(params)
    return fetch(`${api[resource].list.url}?${queryParams}`,{
        method:api[resource].list.method,
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then(e => e.payload[resource])

}

export  function getSinglItem(token,resource,id){
    return fetch(`${api[resource].single.url}${id}`,{
        method:api[resource].single.method,
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then((e)=>{
        if(e.status===401){
            return
        }


       return e.payload[resource]
    })

}
export function updateSingleItem(token,resource,id,values){
    return fetch(`${api[resource].update.url}${id}`,{
        method:api[resource].update.method,
        body:JSON.stringify(values),
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then(e => e.payload[resource])
}

export function createSingleItem(token, resource, values){
    return fetch(`${api[resource].create.url}`,{
        method:api[resource].create.method,
        body:JSON.stringify(values),
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then(e => e.payload[resource])
}

export function deleteSingleItem(token, resource, id){
    return fetch(`${api[resource].delete.url}${id}`,{
        method:api[resource].delete.method,
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then(e => e.payload[resource])
}

export function getAll(token,resource){
    return fetch(`${api[resource].all.url}`,{
        method:api[resource].all.method,
        headers: {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp=>resp.json()).then(e => e.payload[resource].data)

}





 function serialize(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

