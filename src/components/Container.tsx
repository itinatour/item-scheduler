import styles from '../styling/styles.module.scss'
import ItemProps from "./items/ItemProps";
import Item from "./items/Item";
import InfoColumn from "./columns/InfoColumn";

interface ContainerProps {
    item?: React.ReactNode
    items: ItemProps[][]
    showInfoColumn?: boolean
    showColumnHeaders: boolean
    rowHeaders?: string[]
    rowHeight?: number
    headerRowHeight?: number
    columnWidth?: number

}

const Container = ({
                       item,
                       items,
                       showInfoColumn,
                       showColumnHeaders,
                       rowHeaders,
                       rowHeight,
                       headerRowHeight,
                       columnWidth
                   }: ContainerProps) => {

    return (
        <div className={styles.container}>
            <InfoColumn showInfoColumn={showInfoColumn}
                        showColumnHeaders={showColumnHeaders}
                        rowHeaders={rowHeaders}
                        rowHeight={rowHeight}
                        headerRowHeight={headerRowHeight}
                        columnWidth={columnWidth}
            />

            {

                items.map((value, index) => {

                    if (item == undefined) {
                        item = <Item index={index} contents={value}/>
                    }

                    return (
                        <div>
                            Column
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Container;