import React  from 'react';

type TablePropsType = {
    header: Object
    data: any

}

export const Table: React.FC<TablePropsType> = (
    {
        header,
        data,
    }
) => {
    console.log(data.cardPacks)

    if (!header || !data) {
        return <div>No Data</div>
    }

    return (
        <table className="table">
            <thead>
            <tr>
                {Object.values(header).map(el => <th >{el.toUpperCase()}</th>)}
            </tr>
            </thead>
            <tbody>


            {data.cardPacks.map((item: any) => (
                <tr key={item._id}>
                    {Object.values(item).map((value: any) => <td>{value}</td>)}
                    <td>

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
