import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  _deletelistRequestById,
  _getlistRequest,
} from "../../utils/requestMethodUtils";
import { Button } from "@mui/material";
import { __useClickOutside } from "../useOutSideClick/useOutSideClick";
import ChannelContext from "../../context/useChannelContext";
import { useNavigate } from "react-router-dom";
import { __deleteCurrentPlaylistBylistNameInRedux } from "../../redux/apiCalls";

function Changelist({ setChangeChannelList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;
  const user = useSelector((state) => state.user.userSecretId);
  const currentPlaylist = useSelector((state) => state.user.currentPlaylist);
  const { setCurrentlist } = useContext(ChannelContext);
  const [openEditSection, setOpenEditSection] = useState(false);
  const [deletePlaylistChannel, setDeletePlaylistChannel] = useState(null);
  const [m3uplaylist, setM3uplaylist] = useState([]);

  const outClickRef = useRef();
  //outsideClick
  __useClickOutside(outClickRef, () => setChangeChannelList(false));
  useEffect(() => {
    _getlistRequest(user?.secretId).then((data) => {
      setM3uplaylist(data);
    });
  }, []);

  const handleChooseChannelPlaylist = (o) => {
    setCurrentlist(o);

    if (o) {
      navigate("/tv");
      setChangeChannelList(false);
    }
  };

  const handleOpenEditSection = () => {
    setOpenEditSection((prev) => !prev);
  };

  const handleDeleteChannelPlaylist = (o) => {
    _deletelistRequestById(o._id).then((data) =>
      setDeletePlaylistChannel(data)
    ); 
    if(currentPlaylist.listname === o.listname){
      __deleteCurrentPlaylistBylistNameInRedux(dispatch)
  }
  };


  useEffect(() => {
    if(deletePlaylistChannel){
    setTimeout(() => {
      setDeletePlaylistChannel(null);
      setChangeChannelList(false);
 },2000)
}
  },[deletePlaylistChannel])



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
      <div
        ref={outClickRef}
        className=""
        style={{
          height: 450,
          width: 600,
          background: "rgb(69,58,148,0.9)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
          borderRadius: 15,
        }}
      >
        <span
          style={{
            borderBottom: "1px solid black",
            width: "100%",
            display: "flex",
            padding: 10,
            gap: 5,
            alingItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              display: "flex",
              padding: 15,
              gap: 5,
              alingItems: "center",
            }}
          >
            <img
              style={{ width: 40, height: 40 }}
              src={ASSETS + "/change.png"}
              alt=""
            />
            <span style={{ textAlign: "start", padding: 8, fontWeight: 600 }}>
              Choose/Edit Your Playlist
            </span>
          </span>

          <Button
            onClick={handleOpenEditSection}
            sx={{
              width: "25%",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 0,
            }}
          >
            Edit
            <img width={18} height={18} src={ASSETS + "/edit.png"} alt="" />
          </Button>
        </span>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            flexFlow: "row wrap",
            overflowY: "scroll",
            heigth: "80vh",
            gap: 20,
            position:"relative"
          }}
        >
          {m3uplaylist.map((o) => (
            <Fragment key={o._id}>
              <Button
                className=""
                style={{
                  minWidth: "30%",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  gap: 10,
                  border: "1.4px solid black",
                  borderRadius: 4,
                }}
                onClick={() => handleChooseChannelPlaylist(o)}
              >
                <img
                  width={25}
                  heigth={25}
                  src={ASSETS + "/filesIcon.png"}
                  alt={"playlistIcon"}
                />
                <span style={{ color: "white" }}>
                  {o.listname.toUpperCase()}
                </span>
              </Button>

              {openEditSection && (
                <Button
                  onClick={() => handleDeleteChannelPlaylist(o)}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    width={25}
                    height={25}
                    color="red"
                    src={ASSETS + "/remove2.png"}
                  />
                </Button>
              )}
            </Fragment>
          ))}

          {deletePlaylistChannel   &&   <div
            style={{
              position: "absolute",
              border: "1px solid black",
              left:"25%",
              padding: 8,
              background: "black",
              display:"flex",
              alignItems:"center",
             
              gap:5,
              borderRadius:6
            }}
          >
            <img width="20" height="20" src={ASSETS + "/success.png"} alt="" />
            <span style={{ color: "white" }}> M3U File  Deleted Successfully!</span>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Changelist;
