import React, { Component }  from 'react';
import './Pill.css';
import Button from '../UI/Button/Button';


class Pill extends Component {
    state = {
        opened: false
    }

   togglePillHandler = () => {
    this.setState({opened: !this.state.opened});
   }

    render(){
        const excerpt = this.state.opened ? <h1 className="excerpt">Go to DevOps-Pills.com</h1> : null;
        let openClose = this.state.opened ? 'Close' : 'Open';
        let turnPill1 = this.state.opened ? 'opened1' : null;
        let turnPill2 = this.state.opened ? 'opened2' : null;
        return(
            <div className="app">
                <h1 className="pill-title">{openClose} the pill!</h1>
                <div className="flex-container">
                    <div className={`pill-left ${turnPill1}`}></div>
                    {excerpt}
                    <div className={`pill-right ${turnPill2}`}></div>
                </div>
                <Button clicked={this.togglePillHandler}>{openClose} Pill</Button>
            </div> 
            )      
    }  
}




export default Pill;