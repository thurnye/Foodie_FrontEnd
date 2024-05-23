import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {getDateShort,  getAllDatesInRange, } from '../../../../util/commons';


const columns = [
  { field: 'id', headerName: '', width: 80 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'summary', headerName: 'Summary', width: 150},
  { field: 'startDate', headerName: 'Start Date', width: 150 },
  { field: 'ongoing', headerName: 'On Going', width: 150 },
  { field: 'nextEventDate', headerName: 'Next Event Date', width: 150 },
  { field: 'organizer', headerName: 'Organizer', width: 100 },
  { field: 'createdOn', headerName: 'Creation Date', width: 150 },
  { field: 'ticketSold', headerName: 'Ticket Sold', type: 'number' },
];

const getTotalSold = (sections) => {
        // Initialize total sold ticket types
    let totalSoldTicketTypes = 0;

    // Iterate over each section
    sections.forEach(section => {
        // Iterate over each ticket type within the section
        section.ticketTypes.forEach(ticketType => {
            // Add the number of sold ticket types to the total
            totalSoldTicketTypes += ticketType.sold;
        });
    });
    return totalSoldTicketTypes;
}

const getRows = (data) => {
    const currentDate = new Date();
    const rows = [];
    data.forEach((evt, i) => {
        const {_id, basicInfo, schedule, details, tickets, createdAt} = evt;
        const allDateRange = [];
        // get all the date ranges in the schedule data
        schedule.forEach((el) => {
            const range = getAllDatesInRange(el.start, el.end, 'daily');
            range.forEach((dt) => allDateRange.push(dt))

        })
        const sortedSchedule = allDateRange.filter(dateStr => new Date(dateStr) > currentDate);
        sortedSchedule.sort((a, b) => new Date(a) - new Date(b));

        rows.push({ 
            id : _id,
            title : basicInfo.eventTitle,
            summary: details.summary,
            startDate : allDateRange[0] ? ` ${getDateShort(allDateRange[0])} ` 
            : ' - ',
            ongoing: allDateRange.length > 1 ? 'Yes' : 'No',

            nextEventDate: sortedSchedule[1] ? ` ${getDateShort(sortedSchedule[1])} ` : ' - ',
            organizer : basicInfo.organizer,
            createdOn : getDateShort(createdAt),
            ticketSold : getTotalSold(tickets.sections),
        })
    })
    return rows;
}


export default function EventList({setSelectedEvent, data, paginationModel, setPaginationModel, rowCount}) {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [''],
  });
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({id: false});
  const [rows, setRows] = useState([])

  useEffect(() => {
    setSelectedEvent(rowSelectionModel[0])
  },[rowSelectionModel])

  useEffect(() => {
    setRows(getRows(data))
  },[data])



  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ height: 400, mt: 3 }}>
        <DataGrid
            columns={columns}
            rows={rows}
            rowCount={rowCount}
            disableColumnFilter
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            filterModel={filterModel}
            onFilterModelChange={(newModel) => setFilterModel(newModel)}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>{
                setColumnVisibilityModel({...newModel, id: false})
            }}
            ignoreDiacritics={true}
            onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
        />
      </Box>
    </Box>
  );
}