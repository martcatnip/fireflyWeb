import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {AppBar} from '@material-ui/core';
import GameData from './GameData.jsx'
import GameDataOut from './GameDataOut.jsx'
import ReadDataIn from './ReadDataIn.jsx'
import ReadDataOut from './ReadDataOut.jsx'
import GroupProgress from './GroupProgress.jsx'
import StudentProgress from './StudentProgress.jsx'

const Home = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

  return (
    <div>
    <AppBar position="static">
      <Tabs
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
      >
        <Tab label="读入打卡数据"/>
        <Tab label="录入游戏数据"/>
        <Tab label="输出游戏数据"/>
        <Tab label="录入朗读数据"/>
        <Tab label="阅读讨论数据"/>
        <Tab label="学生整体进展"/>
        <Tab label="学生个人进展"/>
      </Tabs>
      </AppBar>
        {selectedTab === 0 && <Button
                            variant="contained"
                            component="label">
                            Upload File
                            <input type="file" hidden/>
                            </Button>}
        {selectedTab === 1 && <GameData/>}
        {selectedTab === 2 && <GameDataOut/>}
        {selectedTab === 3 && <ReadDataIn/>}
        {selectedTab === 4 && <ReadDataOut/>}
		{selectedTab === 5 && <GroupProgress/>}
		{selectedTab === 6 && <StudentProgress/>}
    </div>
  );
}
export default Home;