import { Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';

export default function DataViz({ inpData }) {
    const [xLabels, setXLabels] = useState([]);
    const [yLabels, setYLabels] = useState([]);

    // When the component mounts, get a list of the values of the x and y fields
    // so we don't have to recompute this list each time. 
    useEffect(() => {
        setXLabels(inpData.map(d => d.ReferenceDate));
        setYLabels(inpData.map(d => d.TotalReturn));
    }, [])

    return (
        <div>
            <Typography variant="h5" align="left" fontFamily="noe">
                Data Visualization
            </Typography>
            <Typography align="left" fontFamily="barlow">
                This data visualization provides an interactive chart of our data above. If we hover over any datapoints then we will see the date and total return for that datapoint (in %).
            </Typography>
            <br />
            {/* Ensure that we have already set the x, y label states */}
            {xLabels.length > 0 && yLabels.length > 0 &&
                <LineChart
                    xAxis={[{
                        scaleType: 'time',
                        data: xLabels,
                        valueFormatter: (value) => value.getFullYear().toString(),
                    }]}
                    series={[
                        {
                            data: yLabels,
                            area: true,
                        },
                    ]}
                    height={500}
                />
            }
        </div>
    );
}