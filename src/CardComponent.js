import * as React from "react";


export class CardComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (



            <article className="card" onClick={this.handleClick}>
                <aside className="top">&hearts;<span>9</span></aside>
                &hearts;
                <aside className="bottom">&hearts;<span>9</span></aside>

            </article>



        );
    }

    handleClick = () => {

    }
}
