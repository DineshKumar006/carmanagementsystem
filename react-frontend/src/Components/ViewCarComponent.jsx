import React, { Component } from 'react';
import CarService from '../services/CarService';

class ViewCarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.location.id,
            cardetail: {}
        }
    }

    componentDidMount(){
        CarService.getCardetailById(this.state.id).then( res => {
            this.setState({cardetail: res.data});
        })
    }




    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{position:"absolute" , top:"10px" , left:"0px" , right:"0px" , overflow:"hidden",zIndex:-1,marginTop:50,minHeight:300}}>

                    <h3 className = "text-center"> View Car Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Cardetail Make: </label>
                            <div> { this.state.cardetail.make }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Model: </label>
                            <div> { this.state.cardetail.model }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Variant: </label>
                            <div> { this.state.cardetail.variant }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Date of Registratiom: </label>
                            <div> { this.state.cardetail.dateOfRegistration }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Vin Number: </label>
                            <div> { this.state.cardetail.vinNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail REG Number: </label>
                            <div> { this.state.cardetail.regNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Color: </label>
                            <div> { this.state.cardetail.color }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Engine Capacity: </label>
                            <div> { this.state.cardetail.engineCapacity }</div>
                        </div>
                        <div className = "row">
                            <label> Cardetail Fuel Type: </label>
                            <div> { this.state.cardetail.fuelType }</div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewCarComponent;