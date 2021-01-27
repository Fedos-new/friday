import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import Pagination from 'react-js-pagination';
import s from './Paginate.module.css';
import {getPacksTC, setCurrentPageAC} from '../../../bll/searchPacks-reducer';

type PaginatePropsType = {
	totalPacksCount: number
	packsPerPage: number
	page: number
	handlePageChange: (pageNumber: number) => void
}


export const Paginate: FC<PaginatePropsType> = ({
	totalPacksCount,packsPerPage,page,handlePageChange
																								}) => {


	return (
		<Pagination
			activePage={page}
			itemsCountPerPage={packsPerPage}
			totalItemsCount={totalPacksCount}
			pageRangeDisplayed={10}
			onChange={handlePageChange}
			innerClass={s.paginationList}
			itemClass={s.paginationItem}
			linkClass={s.paginationLink}
			activeClass={s.paginationItemActive}
			activeLinkClass={s.paginationLinkActive}
			linkClassFirst={s.linkClassFirst}
			linkClassLast={s.linkClassLast}
			disabledClass={s.disabledClass}
			linkClassPrev={s.linkClassPrev}
			linkClassNext={s.linkClassNext}
		/>
	)
}