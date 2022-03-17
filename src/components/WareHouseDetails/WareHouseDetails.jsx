import "./WareHouseDetails.scss";
import { Component } from "react";
import ArrowBack from '../../assets/icons/arrow_back-24px.svg';
import Editbtn from '../../assets/icons/edit-24px.svg';
import DeleteIcon from '../../assets/icons/delete_outline-24px.svg';
import EditIcon from '../../assets/icons/edit-24px.svg';
import ChevronRight from '../../assets/icons/chevron_right-24px.svg';


class WarehouseDetails extends Component {

  render() {
    return (
      <div className="warehouseDetails">
        <header className="warehouseDetails__header">
          <img className="warehouseDetails__back" src={ArrowBack} alt='arrow back icon'></img>
          <h1 className="warehouseDetails__title">King West</h1>
          <img className="warehouseDetails__edit" src={Editbtn} alt='edit icon'></img>
        </header>
        <section className="warehouseDetails__info">
          <div className="warehouseDetails__left">
          <div className="warehouseDetails__address">
            <h4 className="warehouseDetails__address-title">WAREHOUSE ADDRESS:</h4>
            <p2 className="warehouseDetails__address-address">469 King Street West,</p2>
            <p2 className="warehouseDetails__address-address">Toronto, CAN</p2>
          </div>
          <div className="warehouseDetails__contact">
            <h4 className="warehouseDetails__contact-title">CONTACT NAME:</h4>
            <p2 className="warehouseDetails__contact-name">Graeme Lyon</p2>
            <p2 className="warehouseDetails__contact-position">Warehouse Manager</p2>
          </div>
          </div>
          <div className="warehouseDetails__right">
          <div className="warehouseDetails__contact">
            <h4 className="warehouseDetails__contact-title">CONTACT INFORMATION:</h4>
            <p2 className="warehouseDetails__contact-name">+1 (647) 504-0911</p2>
            <p2 className="warehouseDetails__contact-position">glyon@instock.com</p2>
          </div>
          </div>
        </section>

        <li className='inventoryCard'>
            <div className='inventoryCard__container'>
                    <div className='inventoryCard__left'>    
                        <div className='inventoryCard__left-item'>    
                            <h4 className='inventoryCard__left-itemTitle'>INVENTORY ITEM</h4>
                            <p className='inventoryCard__left-product'>Television<img className='inventoryCard__left-productimg' src={ChevronRight} alt='drop down icon'></img></p>
                        </div>
                        <div className='inventoryCard__left-category'>
                            <p className='inventoryCard__left-categoryTitle'>CATEGORY</p>
                            <p className='inventoryCard__left-category'>Eletronics</p>
                        </div>
                    </div>
                    <div className='inventoryCard__right'>
                        <div className='inventoryCard__right-item'>    
                            <p className='inventoryCard__itemTitle'>STATUS</p>
                            <p className='inventoryCard__item'>IN STOCK</p>
                        </div>
                        <div className='inventoryCard__left-category'>
                            <p className='inventoryCard__categoryTitle'>QTY</p>
                            <p className='inventoryCard__category'>500</p>
                        </div>
                    </div>
            </div>
                <div className='inventoryCard__icons'>
                    <img className='inventoryCard__left-icon' src={DeleteIcon} alt='delete icon'></img>
                    <img className='inventoryCard__left-icon' src={EditIcon} alt='edit icon'></img>
                </div>
            </li>
            <li className='inventoryCardtableandDesktop__container'>
                <div className='inventoryCardtableandDesktop__list'>
                   <h3 className='inventoryCardtableandDesktop__item'>Television<img className='inventoryCard__left-productimg' src={ChevronRight} alt='drop down icon'></img></h3>
                   <h3 className='inventoryCardtableandDesktop__category'>Category</h3> 
                   <h3 className='inventoryCardtableandDesktop__status'>IN STOCK</h3> 
                   <h3 className='inventoryCardtableandDesktop__qty'>500</h3>  
                   <div className='inventoryCardtableandDesktop__icons'>
                        <img className='inventoryCardtableandDesktop__icon' src={DeleteIcon} alt='delete icon'></img>
                        <img className='inventoryCardtableandDesktop__icon' src={EditIcon} alt='edit icon'></img>
                   </div> 
                </div>
            </li>
      </div>
    );
  }
}

export default WarehouseDetails;