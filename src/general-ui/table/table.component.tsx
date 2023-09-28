/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import React, { ReactNode, useMemo, useState } from 'react';

export interface ITableColumn {
    name: string;
    title: ReactNode;
}

interface IProps {
    id: string;
    columns: ITableColumn[];
    dataSource: any[];
}

export const Table = ({ id, columns, ...rest }: IProps): JSX.Element => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirectionAsc, setSortDirectionAsc] = useState<boolean>(false);
    const dataSource = useMemo(() => {
        return rest.dataSource.sort((a, b) => {
            return sortDirectionAsc ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
        });
    }, [rest.dataSource, sortColumn, sortDirectionAsc]);
    const renderRow = (row: any): JSX.Element => {
        return (
            <>
                {columns.map((column) => {
                    return <td key={column.name}>{row[column.name]}</td>;
                })}
            </>
        );
    };

    const createHandleHeaderClick = (name: string) => () => {
        if (sortColumn === name) {
            setSortDirectionAsc((p) => !p);
        }
        setSortColumn(name);
    };
    return (
        <table css={styles.root} id={id}>
            <thead>
                <tr>
                    {columns.map((column) => {
                        return (
                            <th key={column.name} onClick={createHandleHeaderClick(column.name)} id={column.name}>
                                {column.title}{' '}
                                {column.name === sortColumn ? <>{sortDirectionAsc ? 'ASC' : 'DESC'}</> : undefined}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((row, idx) => {
                    return <tr key={idx}>{renderRow(row)}</tr>;
                })}
            </tbody>
        </table>
    );
};

const styles = {
    root: css`
        table {
            width: 100%;
            border: 1px solid gray;
        }
        td,
        th {
            text-align: left;
            padding: 8px;
        }
        tr:nth-of-type(even) {
            background-color: #dddddd;
        }
    `,
};
