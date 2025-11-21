import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridPaginationModel,
  GridRowSelectionModel,
  GridFilterModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

interface DataGridTableProps {
  setSelected: (id: string | number ) => void;
  data?: any; // optional external data source if needed
  paginationModel: GridPaginationModel;
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
  rowCount: number;
  rows: any[];
  columns: GridColDef[];
}

const DataGridTable: React.FC<DataGridTableProps> = ({
  setSelected,
  data,
  paginationModel,
  setPaginationModel,
  rowCount,
  rows,
  columns,
}) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [''],
  });

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>({ id: false });

  useEffect(() => {
    if (rowSelectionModel.length > 0) {
      setSelected(rowSelectionModel[0]);
    } 
  }, [rowSelectionModel, setSelected]);

  return (
    <Box sx={{ width: 'inherit' }}>
      <Box sx={{ flexGrow: 1, height: 'calc(100vh - 450px)', mt: 3, width: '100%' }}>
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
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel({ ...newModel, id: false })
          }
          ignoreDiacritics
          onRowSelectionModelChange={(newSelection) =>
            setRowSelectionModel(newSelection)
          }
          rowSelectionModel={rowSelectionModel}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
      </Box>
    </Box>
  );
};

export default DataGridTable;
