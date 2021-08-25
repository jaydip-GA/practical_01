import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../Redux/Action';
import { useHistory } from 'react-router-dom';

export default function TableData() {
    const [Page, setPage] = useState(1);
    const state = useSelector(state => state?.data);
    let history = useHistory()
    const dispatch = useDispatch()
    const Header = [
        {
            Header: 'Title',
            accessor: 'title',
            filterable: true
        },
        {
            Header: 'URL',
            accessor: 'url',
            Cell: (props) => {
                return <Button variant='outlined' color='primary'
                    target="_blank" href={props?.value || '#'}>URL</Button>
            }
        },
        {
            Header: 'Create At',
            accessor: 'created_at',
            // filterable: true
        },
        {
            Header: 'Author',
            accessor: 'author',
            // filterable: true
        }
    ]

    useEffect(() => {
        if (Page === 1) {
            getData(Page)
        }

        const interval = setTimeout(() => {
            getData(Page)
        }, 10000);

        return () => {
            clearInterval(interval)
        }

    }, [Page]);

    const getData = page => {
        dispatch(getAllData(page));
        setPage(Page + 1);
    }

    const onRawClick = (state, rawInfo) => {
        return {
            onClick: () => {
                history.push('/infoData', rawInfo?.original)
                // console.log("rawIfo", rawInfo?.original)
            }
        }
    }
    return (

        < div >
            <ReactTable
                defaultPageSize={10}
                columns={Header}
                data={state?.data}
                getTrProps={onRawClick}
            />

        </div >
    )
}
