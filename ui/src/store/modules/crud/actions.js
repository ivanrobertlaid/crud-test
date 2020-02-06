import Axios from "axios";
import {header, multipartHeader} from '@/store/headers'


const submitMainInfo = ({commit},payload)=>{
	return new Promise((resolve,reject)=>{
		Axios.post('crud', payload).then(res => {
			if(res.status == 200) { 
				commit('setCrudId', res.data.crud_id);
				resolve(true)
			}
		}).catch(err => {
			reject(err)
		})
	})
}

const uploadFiles = ({commit},payload) => {
	return new Promise((resolve,reject)=>{
		Axios.post('crud/upload-files', payload, multipartHeader).then(res => {
			if(res.status == 200) { 
				resolve(true)
			}
		}).catch(err => {
			reject(err)
		})
	})
}


export default {
	submitMainInfo,
	uploadFiles
}