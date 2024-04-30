import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function DataGridTable({setSelected, data, paginationModel, setPaginationModel, rowCount, rows, columns}) {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [''],
  });
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({id: false});


  useEffect(() => {
    setSelected(rowSelectionModel[0])
  },[rowSelectionModel])

  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ height: 550, mt: 3 }}>
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
            sortingMode="server"
            // filterMode="server"
            paginationMode="server"
        />
      </Box>
    </Box>
  );
}