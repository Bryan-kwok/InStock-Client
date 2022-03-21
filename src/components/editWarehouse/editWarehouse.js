import react from "react";
import axios from "axios";
import WarehouseForm from '../warehouseForm/warehouseForm';
import Header from '../Header/Header'


class editWarehouse extends react.Component {

    state = {
        currentWarehouse: {}
    }

    
    title = "Edit Warehouse"
    btnText = "Save"
   
    currentWarehouseDetails = (id) => {
       axios.get (`http://localhost:8080/warehouses/${id}`)
       .then((response) => {
           const warehouseDetails = response.data;
           console.log(warehouseDetails)
           this.setState({
               currentWarehouse: warehouseDetails,
               warehouseName:warehouseDetails[0][0].name,
               warehouseAddress:warehouseDetails[0][0].address,
               warehouseCity:warehouseDetails[0][0].city,
               warehouseCountry:warehouseDetails[0][0].country,
               contactName:warehouseDetails[0][0].contact.name,
               contactPosition:warehouseDetails[0][0].contact.position,
               contactPhone:warehouseDetails[0][0].contact.phone,
               contactEmail:warehouseDetails[0][0].contact.email,
           });
       })
        .catch((err) => console.log(err));
    };

    componentDidMount(){
        
        const warehouseId = this.props.rProps.match.params.warehouseId;
        this.currentWarehouseDetails(warehouseId)
        axios.put(`http://localhost:8080/warehouses/${warehouseId}`)
    }

    render(){
        const warehouseId = this.props.rProps.match.params.warehouseId;
        const handlePut = (e) => {

            e.preventDefault(e);
            axios.put(`http://localhost:8080/warehouses/${warehouseId}/edit`,{
                name: e.target.name.value,
                address: e.target.address.value,
                city: e.target.city.value,
                country: e.target.country.value,
                contact: e.target.contact.value,
                position: e.target.position.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            })
            .catch(err =>  console.log(err))

        };

        return(
            <>
            <WarehouseForm  
            warehouseName={this.state.warehouseName}
            warehouseAddress={this.state.warehouseAddress}
            warehouseCity={this.state.warehouseCity}
            warehouseCountry={this.state.warehouseCountry}
            contactName={this.state.contactName}
            contactPosition={this.state.contactPosition}
            contactPhone={this.state.contactPhone}
            contactEmail={this.state.contactEmail}
            handleSubmit={handlePut}
             title={this.title} btnText={this.btnText} />
            </>
        )


    }
}
export default editWarehouse
