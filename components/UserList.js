
import React, { useState, useEffect } from 'react';
import axiosInstance from '../lib/axiosInstance';
import DataTable from 'react-data-table-component';

const UserList = () => {
  const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);

	const fetchUsers = async page => {
		setLoading(true);
    
    
		const response = await axiosInstance.get(`/user?page=${page}&per_page=${perPage}&delay=1`);

		setData(response.data);
		setTotalRows(response.data.total);
      setLoading(false);
	};

	const handlePageChange = page => {
		fetchUsers(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setLoading(true);
      
		const response = await axiosInstance.get(`/user?page=${page}&per_page=${newPerPage}&delay=1`);

		setData(response.data);
		setPerPage(newPerPage);
    setLoading(false);
	};

	useEffect(() => {
		fetchUsers(1); // fetch page 1 of users
		
	}, []);
    const columns = [
      {
          name: 'Name',
          selector: row => row.first_name+" "+row.surname,
      },
      {
          name: 'Email',
          selector: row => row.email,
      },
  ];
  

  return (
    <div className="h-full w-full py-5">
       <DataTable
          title="Users"
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
        />
    </div>
  )
}

export default UserList;