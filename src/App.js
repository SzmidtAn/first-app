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
        <div>
          <AppHeader onNavClick={this.onNavClick} />
          <main className="ui main text container">
              {this.state.cardVisable &&
             <CardComponent />
              }
              {!this.state.cardVisable &&
              <ProductComponent />}
          </main>
        </div>
    );
  }
}
