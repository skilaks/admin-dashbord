import React, { useState } from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectItem from "components/SelectItem/SelectItem.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomDatePiker from 'components/CustomDatePiker/CustomDatePiker.js';
import PN from "persian-number"
export default function AddSchedule(prop) {
    const [schedule,setSchedule] = useState({day:'',time:''});
    const days = [
        {value:'شنبه',label:'شنبه'},
        {value:'یک شنبه',label:'یک شنبه'},
        {value:'دو شنبه',label:'دو شنبه'},
        {value:'سه شنبه',label:'سه شنبه'},
        {value:'چهار شنبه',label:'چهار شنبه'},
        {value:'پنج شنبه',label:'پنج شنبه'},

    ]
    const submitHandler = () => {
        
        prop.schedule(schedule);
        setSchedule({day:'',time:''})
    }
    return (
        <Card>
            <CardHeader color="primary">
                        <h4>افزودن برنامه درسی</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={5}>
                                <SelectItem
                                    label="روز برگذاری"
                                    id='day'
                                    onChange={(e) => setSchedule({...schedule , day:e.target.value})}
                                    value={schedule.day}
                                    items={days}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <CustomInput
                                    labelText="زمان برگذاری"

                                    id='time'
                                    onChange={(e) => setSchedule({...schedule,time:e.target.value})}
                                    value={PN.convertEnToPe(schedule.time)}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            </GridContainer>
                            </CardBody>
                            <CardFooter>
                        <Button color="rose" onClick={submitHandler}>
                            ثبت
                        </Button>
                    </CardFooter>
        </Card>
    )
}
