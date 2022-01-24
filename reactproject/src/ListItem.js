import React from 'react';
import './ListItem.css';


function ListItem (props){
            const items =props.items;
            const ListItem =items.map(item=>{
                        return <div className="list" key="item.key">
                                    <p>{item.text} <span><i class="fas fa-trash-alt"></i></span></p>
                        </div>
            })
            return(
                 <div>{ListItem}</div>       
            )
}

export default ListItem;;