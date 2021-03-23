import * as React from "react";
import { AppHeader } from "./AppHeader";
import {CardComponent} from "./CardComponent";
import {ProductComponent} from "./ProductComponent";

export class App extends React.Component {
  constructor() {
      super();

    this.state = {
    cardVisable: false,
        productVisable: false

    };
  }

    onNavClick = (cardVisable) => {

     this.setState(state => ({
         cardVisable: !state.cardVisable
     }))

    }


  render() {

    return (
        <div className="grid">
            <div className="appHeader">
          <AppHeader onNavClick={this.onNavClick} />

            </div>


            <div>

                <ProductComponent  />
            </div>
         <div>

                <ProductComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>


            <div>

                <ProductComponent  />
            </div>
         <div>

                <ProductComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>


            <div>

                <ProductComponent  />
            </div>
         <div>

                <ProductComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>


            <div>

                <ProductComponent  />
            </div>
         <div>

                <ProductComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>


            <div>

                <ProductComponent  />
            </div>
         <div>

                <ProductComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>

            <div>

                <CardComponent  />
            </div>




        </div>
    );
  }
}
