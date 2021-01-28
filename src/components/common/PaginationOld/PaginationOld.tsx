// import React from 'react';
// import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import {useDispatch, useSelector} from 'react-redux';
// import {AppRootState} from '../../../bll/store';
// import {ItemsType, setCountPerPageAC, setCurrentPageAC, SettingsType} from '../../../bll/search-reducer';
//
// const useStyles1 = makeStyles((theme: Theme) => createStyles({
// 	root: {
// 		flexShrink: 0,
// 		marginLeft: theme.spacing(2.5),
// 	},
// }));
//
// type TablePaginationActionsPropsType = {
// 	onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
// }
//
// const TablePaginationActions = (props: TablePaginationActionsPropsType) => {
// 	const classes = useStyles1();
// 	const theme = useTheme();
//
// 	const settings = useSelector<AppRootState, SettingsType>(state => state.search.settings)
// 	const {page, pageCount, productTotalCount} = settings;
// 	const {onChangePage} = props;
//
// 	const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// 		onChangePage(event, 0);
// 	};
//
// 	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// 		onChangePage(event, page - 1);
// 	};
//
// 	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// 		onChangePage(event, page + 1);
// 	};
//
// 	const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// 		onChangePage(event, Math.max(0, Math.ceil(productTotalCount / pageCount) - 1));
// 	};
//
// 	return (
// 		<div className={classes.root}>
// 			<IconButton
// 				onClick={handleFirstPageButtonClick}
// 				disabled={page === 0}
// 				aria-label="first page"
// 			>
// 				{theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
// 			</IconButton>
// 			<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
// 				{theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
// 			</IconButton>
// 			<IconButton
// 				onClick={handleNextButtonClick}
// 				disabled={page >= Math.ceil(productTotalCount / pageCount) - 1}
// 				aria-label="next page"
// 			>
// 				{theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
// 			</IconButton>
// 			<IconButton
// 				onClick={handleLastPageButtonClick}
// 				disabled={page >= Math.ceil(productTotalCount / pageCount) - 1}
// 				aria-label="last page"
// 			>
// 				{theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
// 			</IconButton>
// 		</div>
// 	);
// }
//
// const useStyles2 = makeStyles({
// 	table: {
// 		width: 600,
// 		margin: '0 auto',
// 	},
// });
//
// export const PaginationOld = () => {
// 	const classes = useStyles2();
// 	const settings = useSelector<AppRootState, SettingsType>(state => state.search.settings)
// 	const {page, pageCount} = settings;
// 	const items = useSelector<AppRootState, Array<ItemsType>>(state => state.search.items)
// 	const emptyRows = pageCount - Math.min(pageCount, items.length - page * pageCount)
// 	const dispatch = useDispatch()
// 	const paginate = (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber))
// 	const setRowsPerPage = (pageNumber: number) => dispatch(setCountPerPageAC(pageNumber))
//
// 	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
// 		paginate(newPage);
// 	};
//
// 	const handleChangeRowsPerPage = (
// 		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// 	) => {
// 		setRowsPerPage(parseInt(event.target.value, 10));
// 		paginate(0);
// 	};
//
// 	return (
// 		<TableContainer component={Paper}>
// 			<Table className={classes.table} aria-label="custom pagination table">
// 				<TableBody>
// 					{(pageCount > 0
// 							? items.slice(page * pageCount, page * pageCount + pageCount)
// 							: items
// 					).map((item) => (
// 						<TableRow key={item.productName}>
// 							<TableCell component="th" scope="row">
// 								{item.productName}
// 							</TableCell>
// 							<TableCell style={{width: 160}} align="right">
// 								{item.price}
// 							</TableCell>
// 							<TableCell style={{width: 160}} align="right">
// 								{item.id}
// 							</TableCell>
// 						</TableRow>
// 					))}
// 					{emptyRows > 0 && (
// 						<TableRow style={{height: 53 * emptyRows}}>
// 							<TableCell colSpan={6}/>
// 						</TableRow>
// 					)}
// 				</TableBody>
// 				<TableFooter>
// 					<TableRow>
// 						<TablePagination
// 							rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
// 							colSpan={3}
// 							count={items.length}
// 							rowsPerPage={pageCount}
// 							page={page}
// 							SelectProps={{
// 								inputProps: {'aria-label': 'Products per page'},
// 								native: true,
// 							}}
// 							onChangePage={handleChangePage}
// 							onChangeRowsPerPage={handleChangeRowsPerPage}
// 							ActionsComponent={TablePaginationActions}
// 						/>
// 					</TableRow>
// 				</TableFooter>
// 			</Table>
// 		</TableContainer>
// 	);
// }

export const example = () => {
	console.log('paginate')
}