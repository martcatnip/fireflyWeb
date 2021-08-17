import React from 'react';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {TextField, FormControl, InputLabel, Select} from '@material-ui/core';

const ReadDataIn = () => {
    return(

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "主持人"/>
                    <TextField label = "录入人"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate>
                    <TextField  id="date" label="日期"
                    type="date"
                    InputLabelProps={{ shrink: true,}}/>
                </form>
            </Grid>
            <Grid item xs = {12}>
                <FormControl>
                    <InputLabel htmlFor="age-native-simple">绘本</InputLabel>
                    <Select native
                        inputProps={{name: '绘本名称', id: 'age-native-simple',}}>
                        <option aria-label="None" value="" />
                        <option value={10}>绘本1</option>
                        <option value={20}>绘本2</option>
                        <option value={30}>绘本3</option>
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "学生姓名"/>
                    <TextField label = "朗读得分"/>
                    <TextField label = "备注"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "学生姓名"/>
                    <TextField label = "朗读得分"/>
                    <TextField label = "备注"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "学生姓名"/>
                    <TextField label = "朗读得分"/>
                    <TextField label = "备注"/>
                 </form>
            </Grid>
            <Grid item xs={12}>
                <form noValidate autoComplete = "off">
                    <TextField label = "学生姓名"/>
                    <TextField label = "朗读得分"/>
                    <TextField label = "备注"/>
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
export default ReadDataIn;