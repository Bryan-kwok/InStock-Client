import react from "react"
import axios from "axios"
import WarehouseForm from '../warehouseForm/warehouseForm'

class addwarehouse extends react.Component {
    
    title= "Add New WareHouse";
    btnText = "+ Add Warehouse";
    render(){
        
        const handlePost = e => {

            console.log(e.target)
            axios.post(`http://localhost:8080/warehouses/addWarehouse`,{
                name: e.target.name.value,
                address: e.target.address.value,
                city: e.target.city.value,
                country: e.target.country.value,
                contact: e.target.contact.value,
                position: e.target.position.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            })
            .then((response) => {console.log(response) })
            .catch(err => {alert("Error when processing form.");
             console.log(err)})

        };

    return(
        <main className="add-warehouse">
            <WarehouseForm handleSubmit={handlePost} title={this.title} btnText={this.btnText}/>
        </main>
    )
    }

}
export default addwarehouse
