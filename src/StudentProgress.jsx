import React from 'react';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {TextField, FormControl, InputLabel, Select} from '@material-ui/core';

const StudentProgress = () => {
    return(

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "带队老师"/>
                    <TextField label = "学生姓名"/>
                 </form>
            </Grid>
			<Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "阅读讨论"/>
                 </form>
            </Grid>
			<Grid item xs={12}>
                <form noValidate autoComplete = "off">
				    拼读打卡：
                    <TextField label = "最高打卡关"/>
					<TextField  id="date" label="日期"
                    type="date"
                    InputLabelProps={{ shrink: true,}}/>
					<TextField label = "遗漏关"/>
                 </form>
            </Grid>
			<Grid item xs={12}>
                <form noValidate autoComplete = "off">
				    拼读通过：
                    <TextField label = "最高通过关"/>
					<TextField  id="date" label="日期"
                    type="date"
                    InputLabelProps={{ shrink: true,}}/>
					<TextField label = "未过关"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
				    游戏分：
                    <TextField label = "总分"/>
					<TextField  id="date" label="日期"
                    type="date"
                    InputLabelProps={{ shrink: true,}}/>
                 </form>
            </Grid>
			<Grid item xs={12}>
                <form noValidate autoComplete = "off">
				    其他活动分：
                    <TextField label = "得分"/>
					<TextField  id="date" label="日期"
                    type="date"
                    InputLabelProps={{ shrink: true,}}/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <Button color="primary">
                    输出
                </Button>
            </Grid>
      </Grid>
    );
}
export default StudentProgress;