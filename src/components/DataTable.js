import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'ReferenceDate', headerName: 'Reference Date', flex: 1 },
    { field: 'DailyReturn', headerName: 'Daily Return', flex: 1 },
    { field: 'TotalReturn', headerName: 'Total Return (in %)', flex: 1 },
]


export default function DataTable({ data }) {
    return (
        <div>
            <Typography variant="h5" align="left" fontFamily="noe">
                Data Table
            </Typography>
            <Typography align="left" fontFamily="barlow">
                This data table presents the Daily Return spreadsheet. This highly interactive table allows the user to sort any of the columns by hovering and clicking over the column name. They are also given more options by clicking on the three dots that appear upon hover. We can also alter the total number of items visible per page and look through different pages. As part of the assessment, we also compute the cumulative total return (last column).
            </Typography>
            <br/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 50, 100]}
                />
            </div>
        </div>

    );
}