import * as React from 'react';

class ContactItem extends React.Component{
render(){

const {name= "d", department= "dd"} = this.props
    return(
        <li className="item">
            <img src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-llama-avatar-with-a-yellow-background-png-image_1770354.jpg" className="ui mini rounded image"/>
            <div className="content">
                <h4 className="header">{name}</h4>
                <div className="description">{department}</div>
            </div>
        </li>
    )
}

}

