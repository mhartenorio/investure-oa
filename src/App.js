import './App.css';
import { MenuBar } from './components/MenuBar';
import { Typography, Grid, Container } from '@mui/material';
import rawdata from './data/rawdata.csv'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import DataTable from './components/DataTable';
import DataViz from './components/DataViz';

function App() {
    const [data, setData] = useState([]);

    // When component mounts, we read the CSV file and parse it into a JSON Object.
    // We also calculate the totalReturn for each row. 
    useEffect(() => {
        Papa.parse(rawdata, {
            download: true, // Reads the CSV file
            header: true, // Turns it into an object with the header as the keys. 
            complete: function (input) {
                let runningProduct = 1; // Running product for totalReturn
                input.data.map((inp, idx) => {
                    const add1InPercentSpace = 1 + (inp.DailyReturn / 100)
                    inp.TotalReturn = ((runningProduct * add1InPercentSpace) - 1) * 100; // Turns it to a percent value
                    inp.id = idx;
                    inp.ReferenceDate = new Date(inp.ReferenceDate);
                    runningProduct *= add1InPercentSpace;
                });
                setData(input.data);
            }
        });
    }, [])

    return (
        <div className="App">
            <MenuBar />
            <Container maxWidth='lg' sx={{ mt: 8 }}>
                <Grid container mb={2}>
                    <Typography variant="h4" fontFamily="noe">S&amp;P 500 Daily Return</Typography>
                </Grid>
                {/* Ensure that we have already parsed the data and set the state before we render our tables and graphs */}
                {data.length > 0 &&
                    <>
                        <DataTable data={data} />
                        <br />
                        <DataViz inpData={data} />
                        <br />
                    </>
                }
            </Container>
            <Grid container>

            </Grid>
        </div>
    );
}

export default App;
