import axios from 'axios'  
  
const SERVER_URL = process.env.VUE_APP_SERVER_URL;  
  
const instance = axios.create({  
  baseURL: SERVER_URL,  
  timeout: 1000,
  auth: {
      username: 'admin',
      password: 'admin'
  }
});  
  
export default {  
  // (C)reate  
  createNew: (text) => instance.post('toDos', {description: text}),  
  // (R)ead  
  getAll: () => instance.get('toDos', {  
    transformResponse: [function (data) {  
      return data? JSON.parse(data)._embedded.toDos : data;  
    }]  
  }),  
  // (U)pdate  
  updateForId: (id, text, completed) => instance.put('toDos/'+id, {description: text, completed: completed}),  
  // (D)elete  
  removeForId: (id) => instance.delete('toDos/'+id)  
}