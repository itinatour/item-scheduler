import {CONSTANTS} from "../../constants/Constants";

interface InfoColumnProps{
    showInfoColumn?: boolean
    showColumnHeaders: boolean
    rowHeaders?: string[]
    rowHeight?: number
    headerRowHeight?: number
    columnWidth? : number
}

const InfoColumn = ({
    showInfoColumn = true,
    rowHeight = CONSTANTS.ItemRowHeight,
    headerRowHeight = CONSTANTS.HeaderRowHeight,
    showColumnHeaders = false,
    rowHeaders = [],
    columnWidth = 100
                    }: InfoColumnProps) => {

    if (!showInfoColumn) return null

    return (
        <div>
            {rowHeaders.map((value, index) => {
                if (index == 0 && showColumnHeaders) {
                    return (
                        <div style={{width: columnWidth, height: headerRowHeight }}>
                            {value}
                        </div>
                        )
                }

                return (
                    <div style={{width: columnWidth, height: rowHeight }}>
                        {value}
                    </div>
                )
            })}
        </div>
    )


}

export default InfoColumn;