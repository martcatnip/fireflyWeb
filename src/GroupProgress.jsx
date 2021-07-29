import React from 'react';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {TextField, FormControl, InputLabel, Select} from '@material-ui/core';

const GroupProgress = () => {
    return(

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "带队老师"/>
                    <TextField label = "级别"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "姓名"/>
                    <TextField label = "带队老师"/>
                    <TextField label = "阅读打卡数"/>
					<TextField label = "阅读讨论数"/>
					<TextField label = "拼读最高打卡关"/>
					<TextField label = "拼读最新通过关"/>
					<TextField label = "朗读课次数"/>
					<TextField label = "游戏分"/>
					<TextField label = "其他活动分"/>
					<TextField label = "级别"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "姓名"/>
                    <TextField label = "带队老师"/>
                    <TextField label = "阅读打卡数"/>
					<TextField label = "阅读讨论数"/>
					<TextField label = "拼读最高打卡关"/>
					<TextField label = "拼读最新通过关"/>
					<TextField label = "朗读课次数"/>
					<TextField label = "游戏分"/>
					<TextField label = "其他活动分"/>
					<TextField label = "级别"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "姓名"/>
                    <TextField label = "带队老师"/>
                    <TextField label = "阅读打卡数"/>
					<TextField label = "阅读讨论数"/>
					<TextField label = "拼读最高打卡关"/>
					<TextField label = "拼读最新通过关"/>
					<TextField label = "朗读课次数"/>
					<TextField label = "游戏分"/>
					<TextField label = "其他活动分"/>
					<TextField label = "级别"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "姓名"/>
                    <TextField label = "带队老师"/>
                    <TextField label = "阅读打卡数"/>
					<TextField label = "阅读讨论数"/>
					<TextField label = "拼读最高打卡关"/>
					<TextField label = "拼读最新通过关"/>
					<TextField label = "朗读课次数"/>
					<TextField label = "游戏分"/>
					<TextField label = "其他活动分"/>
					<TextField label = "级别"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <Button color="primary">
                    提交
                </Button>
            </Grid>
      </Grid>
    );
}
export default GroupProgress;