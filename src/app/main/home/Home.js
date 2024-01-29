import { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box, Avatar, Tab, Tabs } from "@mui/material";
import TimeLineTab from "./tabs/TimeLineTab";

const useStyles = makeStyles({
    tabs: {
        "& .MuiTabs-indicator": {
            backgroundColor: '#1b1d2e',
            borderBottom: '3px solid #1488fa'
        },
        "& .MuiTab-root.Mui-selected": {
            color: 'white'
        }
    }
})

const Home = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = (event, value) => {
        setTabValue(value);
    };

    return (
        <>
            <div className="mx-24 my-24">
                <Box className="w-full z-10"
                    sx={{
                        backgroundColor: 'background.default',
                        height: '240px'
                    }}
                >
                    <img
                        className="inset-0 object-cover w-full h-full"
                        src="https://i.imgur.com/OQ5ETzK.jpg"
                        alt="user background"
                    />
                </Box>
                <div className="relative m-24 mt-0 sm:m-24 sm:mt-0 z-20">
                    <div className="w-full max-w-3xl">
                        <div className="-mt-64">
                            <Avatar
                                sx={{
                                    borderWidth: 4,
                                    borderStyle: 'solid',
                                    borderColor: 'black',
                                    backgroundColor: 'background.default',
                                    color: 'text.secondary',
                                }}
                                className="w-128 h-128 text-64 font-bold"
                                src="https://i.imgur.com/QVGgtIU.png"
                                alt="DoD"
                            >
                            </Avatar>
                        </div>
                    </div>
                </div>
                <Box className="relative w-full h-96 bg-current -mt-88 z-10">
                    <Tabs
                        value={tabValue}
                        onChange={handleChangeTab}
                        // indicatorColor="primary"
                        // textColor="primary"
                        variant="scrollable"
                        scrollButtons={false}
                        className={`absolute ml-160 w-full bottom-0 ${classes.tabs}`}
                    >
                        <Tab
                            className="text-20 font-bold min-w-64 mx-4 px-12"
                            label="Timeline"
                        />
                        <Tab
                            className="text-20 font-bold min-w-64 mx-4 px-12"
                            label="About"
                        />
                        <Tab
                            className="text-20 font-bold min-w-64 mx-4 px-12"
                            label="Friends"
                        />
                        <Tab
                            className="text-20 font-bold min-w-64 mx-4 px-12"
                            label="Photos"
                        />
                        <Tab
                            className="text-20 font-bold min-w-64 mx-4 px-12"
                            label="More"
                        />
                    </Tabs>
                </Box>
                <div className="relative mt-24">
                    <div className={tabValue !== 0 ? 'hidden' : ''}>
                        <TimeLineTab />
                    </div>

                    <div className={tabValue !== 1 ? 'hidden' : ''}>
                        {/* <TaxTab /> */}
                    </div>

                    <div className={tabValue !== 2 ? 'hidden' : ''}>
                        {/* <DepartmentTab /> */}
                    </div>

                    <div className={tabValue !== 3 ? 'hidden' : ''}>
                        {/* <DepartmentTab /> */}
                    </div>

                    <div className={tabValue !== 4 ? 'hidden' : ''}>
                        {/* <DepartmentTab /> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
};

export default Home;