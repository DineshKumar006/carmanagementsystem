import React, { Component } from 'react';
import CarService from '../services/CarService';

class UpdateCarComponent extends Component {
 
        state = {

            id: this.props.location.state.id,
            make: '',
            model: '',
            variant: '',
            date_of_registration: '',
            vin_number: '',
            reg_number: '',
            cc: '',
            fuel: ''

        }
   

    componentDidMount(){
      CarService.getCardetailById().then((data) => {
        this.setState({ cardetail: data })
        console.log(this.state.data)
      })
      .catch(function (ex) {
          console.log('Response parsing failed. Error: ', ex);
      });;
      
        // CarService.getCardetailById(this.state.id).then( (res) =>{
        //     let cardetail = res.data;
        //     this.setState({
        //         make: cardetail.make,
        //         model: cardetail.model,
        //         variant: cardetail.variant,
        //         date_of_registration: cardetail.date_of_registration,
        //         vin_number: cardetail.vin_number,
        //         reg_number: cardetail.reg_number,
        //         color: cardetail.color,
        //         cc: cardetail.cc,
        //         fuel: cardetail.fuel

                
        //     });
        // });
    }

    updateCardetail =async (e) => {
        e.preventDefault();
        let cardetail = {make: this.state.make, model: this.state.model, variant: this.state.variant, date_of_registration: this.state.date_of_registration,
                          vin_number: this.state.vin_number, reg_number: this.state.reg_umber, color: this.state.color, cc: this.state.cc
                          , fuel: this.state.fuel};
        console.log('cardetail => ' + JSON.stringify(cardetail));
        console.log('id => ' + JSON.stringify(this.state.id));
       let res= await CarService.updateCardetail(cardetail,this.state.id)
       if(res && res.status===200){
        this.props.navigate('/cardetails');
       }

       
    }
    
    changemakeHandler= (event) => {
        this.setState({make: event.target.value});
    }

    changemodelHandler= (event) => {
        this.setState({model: event.target.value});
    }

    changevariantHandler= (event) => {
        this.setState({variant: event.target.value});
    }
    changedate_of_registrationHandler= (event) => {
        this.setState({date_of_registration: event.target.value});
    }
    changereg_numberHandler= (event) => {
        this.setState({reg_number: event.target.value});
    }
    changevin_numberHandler= (event) => {
        this.setState({vin_number: event.target.value});
    }
    changecolorHandler= (event) => {
        this.setState({color: event.target.value});
    }
    changeccHandler= (event) => {
        this.setState({cc: event.target.value});
    }
    changefuelHandler= (event) => {
        this.setState({fuel: event.target.value});
    }

    cancel(){
        this.props.navigate('/cardetails');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" >
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update details</h3>
                                <div className = "card-body">
                                    <form >
                                        <div className = "form-group">
                                            <label> MAKE: </label>
                                            <input placeholder="Make" name="make" className="form-control" 
                                                value={this.state.make} onChange={this.changemakeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> MODEL: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changemodelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> VARIANT: </label>
                                            <input placeholder="Variant" name="variant" className="form-control" 
                                                value={this.state.variant} onChange={this.changevariantHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DATE OF REGISTRATION: </label>
                                            <input placeholder="Date Of Registration" name="dateOfRegistration" className="form-control" 
                                                value={this.state.date_of_registration} onChange={this.changedate_of_registrationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> VIN NUMBER: </label>
                                            <input placeholder="Vin Number" name="vinNumber" className="form-control" 
                                                value={this.state.vin_number} onChange={this.changevin_numberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> REG NUMBER: </label>
                                            <input placeholder="Reg Number" name="regNumber" className="form-control" 
                                                value={this.state.reg_number} onChange={this.changereg_numberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> COLOR: </label>
                                            <input placeholder="Color" name="color" className="form-control" 
                                                value={this.state.color} onChange={this.changecolorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ENGINE CAPACITY: </label>
                                            <input placeholder="Engine Capacity" name="engineCapacity" className="form-control" 
                                                value={this.state.cc} onChange={this.changeccHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> FUEL TYPE: </label>
                                            <input placeholder="Fuel Type" name="fuelType" className="form-control" 
                                                value={this.state.fuel} onChange={this.changefuelHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateCardetail}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCarComponent































