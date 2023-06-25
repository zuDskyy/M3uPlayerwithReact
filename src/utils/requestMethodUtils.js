import axios  from "axios";
import { useSelector } from "react-redux";



const RequestMethods =  {
   listRequest : async (currentPlaylist) => {
   
 try{
    const res =  await axios.get("https://m3u-serverdev.glitch.me/"+ currentPlaylist?.originalName )
     return res.data.filter(i => i !== null)
  }catch(err){
    console.clear(err)
  }
},
 _getlistRequest : async (secretId) => {
  try {
     const res = await axios.get('https://m3u-serverdev.glitch.me/api/m3u/playlists/' + secretId)
       return res.data
  }catch(err){
      console.clear(err)
  }
 },
  _deletelistRequestById: async (id) => {
     try{
       const res = await axios.delete("https://m3u-serverdev.glitch.me/api/delete/m3ufile/" + id)
       return res.data
     }catch(err){
      console.clear(err)
     }
  }
 
  
};

export const  {listRequest,_getlistRequest,_deletelistRequestById} = RequestMethods;
export default RequestMethods;