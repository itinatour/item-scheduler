import styles from '../styling/styles.module.scss'
import ItemProps from "./items/ItemProps";
import Item from "./items/Item";

interface ContainerProps {
    item?: React.ReactNode;
    items: ItemProps[][]
}

const Container = ({
    item,
    items
                   }: ContainerProps) => {

    return (
        <div className={styles.container}>
            {
                items.map((value, index, array) => {

                    if (item == undefined) {item = <Item index={index} contents={value}/>}

                    return (
                        <div>
                            {item}
                        </div>
                    )
                })
            }
            </div>
    )
}


export default Container;