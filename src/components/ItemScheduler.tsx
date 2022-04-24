import Container from "./Container";
import ItemProps from "./items/ItemProps";


interface ItemSchedulerInterface {
    items: ItemProps[][]
    columns?: number
    columnHeaders?: string[]
    showInfoColumn?: boolean
}

const ItemScheduler = ({
    showInfoColumn = true,
    items


                       }: ItemSchedulerInterface) => {


    return (
        <Container items={items}/>

    )
}

export default ItemScheduler;