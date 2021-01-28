import {AppRootState} from "../../bll/store";

export const getPacksTableData = (state: AppRootState) => {
    const cardPacks = state.packs.cardPacks
    return cardPacks.map((pack) => ({
        userName: pack.user_name,
        name: pack.name,
        cardsCount: pack.cardsCount,
        updated: pack.updated,
        created: pack.created,
        id: pack._id,
    }))
}
