import React, { Component } from 'react';
import CarService from '../services/CarService';

class ListCarComponent extends Component {

   

    state = {
        cardetails: []
}
    editCardetail(id){
        this.props.navigate(`/update-cardetail/${id}`,{state:{id:id}});
    }
    deleteCardetail(id){
        CarService.deleteCardetail(id).then( res => {
            this.setState({cardetails: this.state.cardetails.filter(cardetail => cardetail.id !== id)});
        });
    }
    componentDidMount(){
        CarService.getCardetails().then((res) => {
            this.setState({ cardetails: res.data});
        });
    }

    render() {
        return (
            <div style={{position:"absolute" , top:"10px" , left:"0px" , right:"0px" , overflow:"hidden",zIndex:-1,marginTop:50,minHeight:300}}>
                 <h2 className="text-center">CAR DETAILS</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCardetails}> View Details</button>
                 </div>
                 <br></br>
                 <div className = "row" style={{overflowX:'auto',margin:'0px 8px'}}>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Car Make</th>
                                    <th> Car Model</th>
                                    <th> Car Varient</th>
                                    <th> Car Date_Of_Registration</th>
                                    <th> Car Vin_Number</th>
                                    <th> Car REG_Number</th>
                                    <th> Car Color</th>
                                    <th> Car Engine_Capacity</th>
                                    <th> Car Fuel_Type</th>
                                    <th> Actions</th>
                                </tr>+
                            </thead>
                            <tbody>
                                {
                                 this.state.cardetails &&   this.state.cardetails.map(
                                        cardetail => 
                                        <tr key = {cardetail.id}>
                                             <td> {cardetail.make} </td>   
                                             <td> {cardetail.model} </td>  
                                             <td> {cardetail.varient} </td>  
                                             <td> {cardetail.date_of_registration} </td>  
                                             <td> {cardetail.vin_number} </td>  
                                             <td> {cardetail.reg_number} </td>  
                                             <td> {cardetail.color} </td>  
                                             <td> {cardetail.cc} </td>  
                                             <td> {cardetail.fuel} </td>  
                                              
                                             
                                             <td>
                                                 <button onClick={ () => this.editCardetail(cardetail.id)} className="btn btn-info">Update </button>
                                                 
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.deleteCardetail(cardetail.id)} className="btn btn-info">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>




            </div>
        );
    }
}

export default ListCarComponent 