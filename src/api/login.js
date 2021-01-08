import request from '@/utils/request'

export function login(data){
    return request({
        method:'post',
        url:'api/user/login',
        data
    })
}
export function logout(){
    return request({
        method:'post',
        url:'api/user/logout',
    })
}