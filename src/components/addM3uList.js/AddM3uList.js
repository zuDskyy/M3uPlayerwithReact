import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../customInput/CustomInput";
import { useSelector } from "react-redux";
import { __useClickOutside } from "../useOutSideClick/useOutSideClick";

const AddM3uList = ({ setAddChannelOpen }) => {
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;
  const user = useSelector((state) => state.user.userSecretId);
  const [m3uFile, setM3uFile] = useState(null);
  const [m3uFileName, setM3uFileName] = useState("");
  const [m3uUploadFileSuccessfully, setM3uUploadFileSuccessfully] =
    useState(null);

  //ref
  const outClickRef = useRef();

  //outsideClickRef
  __useClickOutside(outClickRef, () => setAddChannelOpen(false));
  const handleM3uListFile = (e) => {
    const file = e.target.files[0];
    setM3uFile(file);
    if (file) {
      const fileType = file.type;
      const allowedFileType = "audio/x-mpegurl"; // MIME type for M3U files

      if (fileType !== allowedFileType) {
        // Display an error message or take action
        alert("Please select a valid M3U file.");
        e.target.value = null; // Reset the file input field
        setM3uFile(null);
      }
    }
  };
  const handleSubmitUploadM3uFile = async (e) => {
    e.preventDefault();
    if (m3uFile) {
      const datafile = new FormData();
      datafile.append(
        "name",
        Date.now() + user?.secretId + m3uFileName + ".m3u"
      );
      datafile.append("file", m3uFile);

      try {
        const res = await axios.post(
          `https://m3u-server.onrender.com/api/upload/m3ufile?secret_id=${user?.secretId}&list_name=${m3uFileName}`,
          datafile
        );
        
        setM3uUploadFileSuccessfully(res.data);
      } catch (err) {
        console.clear(err);
      }
    }
  };


  useEffect(() => {
    if(m3uUploadFileSuccessfully){
    setTimeout(() => {
      setM3uUploadFileSuccessfully(null);
      setAddChannelOpen(false);
 },2000)
}
  },[m3uUploadFileSuccessfully])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        background: `rgb(0,0,0,0.5)`,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        zIndex: 30,
      }}
    >
      <form
        ref={outClickRef}
        style={{
          height: 450,
          width: 500,
          background: "rgb(69,58,148,0.9)",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: 15,
          borderRadius: 15,
          position: "relative",
          zIndex: 30,
        }}
      >
       <div>
         <span>ADD YOUR M3U LIST</span>
       </div>
        <CustomInput
          label={"Playlist Name"}
          type="text"
          id="playlistName"
          onChange={(e) => setM3uFileName(e.target.value)}
          style={{
            width: "60%",
            padding: 5,
            borderRadius: 8,
            border: "none",
            outline: "none",
          }}
        />

        <CustomInput
          label={"Add M3u List"}
          type="text"
          id="m3ufilename"
          value={m3uFile?.name}
          style={{
            width: "60%",
            padding: 5,
            borderRadius: 8,
            border: "none",
            outline: "none",
          }}
        />

        <label
          htmlFor="file"
          style={{
            padding: "4px 8px",
            background: "#000",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          ...Browse File
        </label>
        <input
          type="file"
          id="file"
          accept=".m3u"
          hidden
          onChange={(e) => handleM3uListFile(e)}
        />
        {m3uUploadFileSuccessfully  && (
          <div
            style={{
              position: "absolute",
              border: "1px solid black",
              padding: 8,
              background: "black",
              display:"flex",
              alignItems:"center",
              gap:5,
              borderRadius:6
            }}
          >
            <img width="20" height="20" src={ASSETS + "/success.png"} alt="" />
            <span style={{ color: "white" }}> M3U File Uploaded Successfully!</span>
          </div>
        )}
        <button
          style={{
            padding: 10,
            background: "rgb(69,58,148)",
            cursor: "pointer",
            borderRadius: 6,
            outline: "none",
            color: "white",
            border: "1px solid rgb(250,250,250,0.5)",
          }}
          onClick={handleSubmitUploadM3uFile}
        >
          Add Playlist
        </button>
      </form>
    </div>
  );
};

export default AddM3uList;
