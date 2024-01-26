import { useState } from "react";
import FlatList from "flatlist-react"
import "../styles/SortBar.css";




function Toggle(props: any) {
    const [isToggle, setIsToggle] = useState(false)

    const renderItem = (item:string)=>{
        return <div className="itemToggle">{item}</div>
    }

    return (
        <div className="toggle">
            <div className="titleToggle" onClick={() => setIsToggle(!isToggle)}><p>{props.title}</p></div>
            {isToggle && <div className="itemToggleContainer">
            <FlatList
                    list={props.items}
                    renderItem={renderItem}
                    renderWhenEmpty={() => <div>No items found</div>}
                />
            </div>}
        </div>
    )
}

export default Toggle;