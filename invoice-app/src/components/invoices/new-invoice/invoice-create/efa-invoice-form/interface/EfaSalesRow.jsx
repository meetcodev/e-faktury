import * as React from 'react';
import { Children, isValidElement, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    useListContext,
    useResourceContext,
    Identifier,
    useTranslate,
} from 'ra-core';
import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import clsx from 'clsx';

import DatagridHeaderCell from './DatagridHeaderCell';
import { DatagridClasses } from './useDatagridStyles';
// import ExpandAllButton from './ExpandAllButton';
import { useDatagridContext } from './useDatagridContext';

/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
export const EfaSalesRow = (props) => {
    const {
        children,
        className,
        // hasExpand = false,
        // hasBulkActions = false,
        // isRowSelectable,
    } = props;
    const resource = useResourceContext(props);
    const translate = useTranslate();
    // const { sort, data, onSelect, selectedIds, setSort } = useListContext(
    //     props
    // );
    const { expandSingle } = useDatagridContext();

    // const updateSortCallback = useCallback(
    //     event => {
    //         event.stopPropagation();
    //         const newField = event.currentTarget.dataset.field;
    //         const newOrder =
    //             sort.field === newField
    //                 ? sort.order === 'ASC'
    //                     ? 'DESC'
    //                     : 'ASC'
    //                 : event.currentTarget.dataset.order;

    //         setSort({ field: newField, order: newOrder });
    //     },
    //     [sort.field, sort.order, setSort]
    // );

    // const updateSort = setSort ? updateSortCallback : null;

    // const handleSelectAll = useCallback(
    //     event =>
    //         onSelect(
    //             event.target.checked
    //                 ? selectedIds.concat(
    //                       data
    //                           .filter(
    //                               record => !selectedIds.includes(record.id)
    //                           )
    //                           .filter(record =>
    //                               isRowSelectable
    //                                   ? isRowSelectable(record)
    //                                   : true
    //                           )
    //                           .map(record => record.id)
    //                   )
    //                 : []
    //         ),
    //     [data, onSelect, isRowSelectable, selectedIds]
    // );

    // const selectableIds = Array.isArray(data)
    //     ? isRowSelectable
    //         ? data
    //               .filter(record => isRowSelectable(record))
    //               .map(record => record.id)
    //         : data.map(record => record.id)
    //     : [];

    return (
        <TableHead className={clsx(className, DatagridClasses.thead)}>
            <TableRow
                className={clsx(DatagridClasses.row, DatagridClasses.headerRow)}
            >
                {/* {hasExpand && (
                    <TableCell
                        padding="none"
                        className={clsx(
                            DatagridClasses.headerCell,
                            DatagridClasses.expandHeader
                        )}
                    >
                        {!expandSingle ? (
                            <ExpandAllButton
                                resource={resource}
                                ids={data.map(record => record.id)}
                            />
                        ) : null}
                    </TableCell>
                )}
                {hasBulkActions && selectedIds && (
                    <TableCell
                        padding="checkbox"
                        className={DatagridClasses.headerCell}
                    >
                        <Checkbox
                            aria-label={translate('ra.action.select_all', {
                                _: 'Select all',
                            })}
                            className="select-all"
                            color="primary"
                            checked={
                                selectedIds.length > 0 &&
                                selectableIds.length > 0 &&
                                selectableIds.every(id =>
                                    selectedIds.includes(id)
                                )
                            }
                            onChange={handleSelectAll}
                        />
                    </TableCell>
                )} */}
                {Children.map(children, (field, index) =>
                    isValidElement(field) ? (
                        <DatagridHeaderCell
                            // sort={sort}
                            field={field}
                            // isSorting={
                            //     sort.field ===
                            //     ((field.props as any).sortBy ||
                            //         (field.props as any).source)
                            // }
                            key={(field.props ).source || index}
                            resource={resource}
                            // updateSort={updateSort}
                        />
                    ) : null
                )}
            </TableRow>
        </TableHead>
    );
};


// export interface DatagridHeaderProps {
//     children?
//     size?: 'medium' | 'small';
// }

