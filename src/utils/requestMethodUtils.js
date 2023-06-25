import axios  from "axios";
import { useSelector } from "react-redux";



const RequestMethods =  {
   listRequest : async (currentPlaylist) => {
   
 try{
    const res =  await axios.get("http://localhost:8080/"+ currentPlaylist?.originalName )
     return res.data.filter(i => i !== null)
  }catch(err){
    console.clear(err)
  }
},
 _getlistRequest : async (secretId) => {
  try {
     const res = await axios.get('http://localhost:8080/api/m3u/playlists/' + secretId)
       return res.data
  }catch(err){
      console.clear(err)
  }
 },
  _deletelistRequestById: async (id) => {
     try{
       const res = await axios.delete("http://localhost:8080/api/delete/m3ufile/" + id)
       return res.data
     }catch(err){
      console.clear(err)
     }
  }
 
  
};

export const  {listRequest,_getlistRequest,_deletelistRequestById} = RequestMethods;
export default RequestMethods;