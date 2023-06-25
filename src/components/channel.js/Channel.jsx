import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChannelContext from "../../context/useChannelContext";
import { Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import AddM3uList from "../addM3uList.js/AddM3uList";
import Changelist from "../changelist/Changelist";
import { useSelector } from "react-redux";
import CurrentPlaylist from "../currentlist/CurrentPlaylist";
import { ImageList, ImageListItem, ListItemIcon } from "@mui/material";

const Channel = () => {
  const playlist = useSelector((state) => state.user.currentPlaylist);
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;
  const { m3uData } = useContext(ChannelContext);
  const navigate = useNavigate();
  const [addChannelOpen, setAddChannelOpen] = useState(false);
  const [changeChannelList, setChangeChannelList] = useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  //list
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedByGroupName, setSelectedByGroupName] = React.useState(null);

  const handleGroupClick = (groupName) => {
    setSelectedByGroupName(groupName);
  };

  const handleChooseAllList = () => {
    setSelectedByGroupName(null);
  };
  //filter && filter By GroupName
  const filteredChannels = m3uData?.filter((val) => {
    if (selectedByGroupName === null) {
      return val;
    }
    return val.group.groupname === selectedByGroupName;
  });
  //channel group length
  const groupCounts = m3uData?.reduce((counts, channel) => {
    const groupName = channel.group.groupname;
    counts[groupName] = (counts[groupName] || 0) + 1;

    return counts;
  }, {});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleOpenAddChannel = () => {
    setAddChannelOpen(true);
  };

  const toggleOpenChangeChannelList = () => {
    setChangeChannelList(true);
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: 350,
        background: "#453a94",
        height: "100vh",
      }}
      role="presentation"
    >
      <List sx={{ background: "#453a94" }}>
        <form>
          <input
            type="search"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="search"
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "12px",
              outline: "none",
              border: "none",
            }}
          />
        </form>
        <div
          className=""
          style={{
            display: "flex",
            overflowX: "scroll",
            width: "100%",
            padding: 10,
            gap: 5,
          }}
        >
          <Button
            sx={{
              minWidth: "50%",
              color: "white",
              padding: 1,
              background: "rgb(10,10,10,0.9)",
              borderRadius: 8,
            }}
            onClick={handleChooseAllList}
          >
            All({m3uData?.length})
          </Button>

          {m3uData
            ?.filter((value, index, self) => {
              return (
                self.findIndex(
                  (item) => item.group.groupname === value.group.groupname
                ) === index
              );
            })
            .map((o) => {
              const groupCount = groupCounts[o?.group.groupname] || 0;
              return (
                <Button
                  key={o.id}
                  sx={{
                    minWidth: "50%",
                    color: "white",
                    padding: 1,
                    background: "rgb(10,10,10,0.9)",
                    borderRadius: 8,
                  }}
                  onClick={() => handleGroupClick(o?.group.groupname)}
                >
                  {o?.group.groupname}({groupCount})
                </Button>
              );
            })}
        </div>

        {filteredChannels
          ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.tvname
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <div key={item.id}>
              <ListItem
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "10px",
                  borderBottom: "1px solid black",
                }}
              >
                <h4 style={{ paddingTop: "12px", color: "white" }}>
                  {item.id}
                </h4>
                <Link to={`channel/${item.id}`}>
                  <ListItemButton
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={toggleDrawer(anchor, false)}
                  >
                    {item?.tvlogo2 && (
                      <img
                        style={{ width: 80, height: 40 }}
                        src={item?.tvlogo2}
                        alt="tv  logo "
                      />
                    )}

                    <ListItemText
                      sx={{ width: "100%", color: "white" }}
                      primary={item.tvname}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            </div>
          ))}
        <Divider />
      </List>
    </Box>
  );
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        onClick={() => navigate('/')}
        className="homeMenuIcon"
        style={{ padding: 5, fontSize: 30, color: "white" }}
      >
        <Icon color="blue" name="arrow circle left" />
      </div>
      <div
        style={{
          paddingLeft: "20em",
          margin: "20px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              sx={{
                color: "white",
                border: "1px solid #09203f",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              onClick={toggleDrawer(anchor, true)}
            >
              <img
                width={25}
                height={25}
                src={ASSETS + "/channel.png"}
                alt=""
              />{" "}
              Channel List
            </Button>

            <Drawer
              anchor={"left"}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

        {playlist && <CurrentPlaylist />}
        <div className="" style={{ display: "flex", gap: 20 }}>
          <Button
            onClick={toggleOpenChangeChannelList}
            sx={{
              color: "white",
              border: "1px solid #09203f",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img width={25} height={25} src={ASSETS + "/playlist.png"} alt="" />{" "}
            choose playlist
          </Button>
          <Button
            sx={{
              color: "white",
              border: "1px solid #09203f",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            onClick={toggleOpenAddChannel}
          >
            <img width={25} height={25} src={ASSETS + "/add2.png"} alt="" /> add
            playlist
          </Button>
        </div>
      </div>
      {changeChannelList && (
        <Changelist setChangeChannelList={setChangeChannelList} />
      )}
      {addChannelOpen && <AddM3uList setAddChannelOpen={setAddChannelOpen} />}
    </div>
  );
};

export default Channel;
