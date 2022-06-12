import axios from 'axios';

const CAR_API_BASE_URL = "http://localhost:8080/api/v1/cardetails";

class CarService {

    getCardetails(){
        return axios.get(CAR_API_BASE_URL);
    }
    createCardetail(cardetail){
        return axios.post(CAR_API_BASE_URL, cardetail);
    }

    getCardetailById =async( cardetailId) =>{
        try{
            let res=await axios.get(CAR_API_BASE_URL + '/' + cardetailId);
            console.log(res)

            return res

        }catch(error){
            console.log(error)
            return error
        }
        
    }
    updateCardetail=async(cardetail, cardetailId)=>{
        try {
            let res=await axios.put(CAR_API_BASE_URL + '/' + cardetailId, cardetail);
            console.log(res)

            return res

        } catch (error) {
            console.log(error)
            return error
        }
    }

    deleteCardetail(cardetailId){
        return axios.delete(CAR_API_BASE_URL + '/' + cardetailId);
    }
    // getCardetails(){
    //     return fetch(CAR_API_BASE_URL,{ 
    //         method: 'get',
    //             headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json',
    //             },
    //             'credentials': 'same-origin'
    //     })
    //     .then(res => res.json());        
    // }



}
export default new CarService()