import ItemProps from "./ItemProps";


const Item = ({
    index,
    date,
    splitCount = 1,
    columnPosition = 1,
    hovered = false,
    canExtendHovered = true,
    lockByCurrentPosition = false,
    contents: any
              }: ItemProps) => {

    return (
        <div>
            Item
        </div>
    )
}

export default Item;