import react from "react"
import "./warehouseForm.scss"
import axios from "axios"
import ArrowBack from '../../assets/icons/arrow_back-24px.svg';
import {Link} from "react-router-dom";
class warehouse extends react.Component {

    state = {
        nameValid: true,
        addressValid: true,
        cityValid: true,
        countryValid: true,
        contactValid: true,
        positionValid:true,
        phoneNumberValid: true,
        emailValid:true,
    }

    render(){
        
        const validation = e => {
            e.preventDefault();

            let nameValid = true;
            if (e.target.name.value === ""){
                nameValid = false;
            }
            let addressValid = true;
            if(e.target.address.value === ""){
                addressValid = false;
            }
            let cityValid = true;
            if(e.target.city.value === ""){
                cityValid = false;
            }
            let countryValid = true;
            if(e.target.country.value === ""){
                countryValid = false;
            }
            let contactValid = true;
            if(e.target.contact.value === ""){
                contactValid = false;
            }
            let positionValid = true;
            if(e.target.position.value === ""){
                positionValid = false;
            }
            let phoneNumberValid = true;
            if (e.target.phone.value.length < 10){
                phoneNumberValid = false;
            }
            let emailValid = true;
            if(!e.target.email.value.includes('@')){
                emailValid= false;
            }
            const validation = [nameValid, addressValid, cityValid, countryValid, 
                contactValid, positionValid, phoneNumberValid, emailValid ]

            function CheckValidation(validation){
                return validation === false
            }
            if (validation.find(CheckValidation) === undefined){
                this.props.warehouseReq(e)
                .catch(err => {alert("Error when processing form."); 
                console.log(err)});
            }
                this.setState({
                nameValid,
                addressValid, 
                cityValid,
                countryValid,
                contactValid,
                positionValid,
                phoneNumberValid,
                emailValid
            })

            
            this.props.handleSubmit(e);
        };

    return(
        <main>
            <div className="add-warehouse__wrapper">
            <div className="add-warehouse__header"> 
            <div className="add-warehouse__header--back">
             <Link to="/warehouses">  
            <img  src={ArrowBack} alt='arrow back icon'></img>   
            </Link>
            </div>
            <div>
            <h1 className="add-warehouse__header--title">{this.props.title}</h1>
            </div>
            </div>  
            <div className="add-warehouse__container">
                <form onSubmit={validation} className="add-warehouse__form">
                        <div className="add-warehouse__form--container">
                        <div className="add-warehouse__form--section-1">
                    <h2 className="add-warehouse__form--title">Warehouse Details</h2>
                        <div className="add-warehouse__line">                   
                        <label className="add-warehouse__form--name-label"> Warehouse Name</label>
                        <input className={`add-warehouse__form--input ${this.state.nameValid ? "" : "add-warehouse__error"}`} name="name" type="text" placeholder="Warehouse Name" defaultValue={this.props.warehouseName ? this.props.warehouseName: ""} />
                        </div> 
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--address-label"> Street Address</label>
                        <input className={`add-warehouse__form--input ${this.state.addressValid ? "" : "add-warehouse__error"}`} name="address" type="text" placeholder="Street Address" defaultValue={this.props.warehouseAddress ? this.props.warehouseAddress: ""}></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--city-label"> City</label>
                        <input className={`add-warehouse__form--input ${this.state.cityValid ? "" : "add-warehouse__error"}`} name="city" type="text" placeholder="City" defaultValue={this.props.warehouseCity ? this.props.warehouseCity: ""}></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--country-label"> Country</label>
                        <input className={`add-warehouse__form--input ${this.state.countryValid ? "" : "add-warehouse__error"}`} name="country" type="text" placeholder="Country" defaultValue={this.props.warehouseCountry ? this.props.warehouseCountry: ""}></input>
                        </div>
                        </div>
                        <div className="add-warehouse__form--section-2">
                    <h2 className="add-warehouse__form--title">Contact Details</h2>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--contact-label"> Contact Name</label>
                        <input className={`add-warehouse__form--input ${this.state.contactValid ? "" : "add-warehouse__error"}`} name="contact" type="text" placeholder="Contact Name" defaultValue={this.props.contactName ? this.props.contactName: ""}></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--position-label"> Position</label>
                        <input className={`add-warehouse__form--input ${this.state.positionValid ? "" : "add-warehouse__error"}`} name="position" type="text" placeholder="Position" defaultValue={this.props.contactPosition ? this.props.contactPosition: ""}></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--phone-label"> Phone Number</label>
                        <input className={`add-warehouse__form--input ${this.state.phoneNumberValid ? "" : "add-warehouse__error"}`} name="phone" type="text" placeholder="Phone Number" defaultValue={this.props.contactPhone ? this.props.contactPhone: ""}></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--email-label"> Email</label>
                        <input className={`add-warehouse__form--input ${this.state.emailValid ? "" : "add-warehouse__error"}`} name="email" type="text" placeholder="Email" defaultValue={this.props.contactEmail ? this.props.contactEmail: ""}></input>
                        </div>
                        </div>
                        </div>
                        <div className="add-warehouse__button">
                            <button className="add-warehouse__button--cancel" type="reset">Cancel</button> 
                            <button className="add-warehouse__button--submit" type="submit">{this.props.btnText}</button>
                        </div>
                </form>
            </div>
        </div>
        </main>
    )
    }

}
export default warehouse