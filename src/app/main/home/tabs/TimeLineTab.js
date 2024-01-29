import { useState } from 'react';
import { Box, Tab, Tabs } from "@mui/material";
import StatusTab from './tabs/StatusTab';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabs: {
        "& .MuiTab-root.Mui-selected": {
            color: 'white'
        }
    }
})

const TimeLineTab = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = (event, value) => {
        setTabValue(value);
    };
    return (
        <div className='px-24 py-24 bg-current w-full h-256'>
            <Tabs
            value={tabValue}
            onChange={handleChangeTab}
            // indicatorColor="secondary"
            // textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className={`w-full min-h-40 ${classes.tabs}`}
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              label="Status"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              label="Photos"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              label="Videos"
            />
          </Tabs>
          {tabValue === 0 && <StatusTab />}
          {/* {tabValue === 1 && <PhotosTab />}
          {tabValue === 2 && <VideosTab />} */}
        </div>
    )
};

export default TimeLineTab;