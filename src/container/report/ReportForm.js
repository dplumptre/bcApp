import React, { Component } from 'react';
import Aux from '../../Hoc/Aux/Aux';
// remember date picker and css
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
class ReportForm extends Component {

    render(){

        let mainForm = (<form className="form-signin" noValidate>
        <div className="">
        <div><strong>FROM:</strong></div>
        <DatePicker
          selected={this.props.myForm.dateOne}
          className="form-control mr-3" 
          name="dateOne"
          dateFormat="yyyy-MM-dd"
          onChange={date => this.props.changeDateOne(date)}
        />

        <div><strong>TO:</strong></div>
        <DatePicker
          selected={this.props.myForm.dateTwo}
          className="form-control mr-3" 
          name="dateTwo"
          dateFormat="yyyy-MM-dd"
          onChange={date2 => this.props.changeDateTwo(date2)}
        />
        </div>   

        <button type="submit" className={["mt-3", "btn btn-secondary ", "text-uppercase" ].join(' ')} 
        onClick={this.props.submit}>Download Report</button>
        </form> 
      );



        return (
            <Aux>
                <h4 className="text-danger">Download Report </h4>
                {mainForm}
            </Aux>
            
            )
    }
}

export default ReportForm;