interface ItemProps {
    index: number
    columnPosition?: number
    date?: Date
    splitCount?: number
    hovered?: boolean
    canExtendHovered?: boolean
    lockByCurrentPosition?: boolean
    contents: any
}

export default ItemProps;