import { Component } from "react";
import "./InventoryItemDetails.scss";
import back_arrow from "../../assets/icons/arrow_back-24px.svg";
import pencil from "../../assets/icons/edit-24px-white.svg";
import { Link } from "react-router-dom";
import axios from "axios";

class InventoryItemDetails extends Component {
  state = {
    itemDetail: null,
  };

  componentDidMount() {
    axios
      .get(`https://instock-api.onrender.com/inventory/${this.props.match.params.itemId}`)
      .then((response) => {
        this.setState({
          itemDetail: response.data,
        });
      });
  }

  render() {
    return (
      this.state.itemDetail && (
        <div className="bigger__wrapper">
          <div className="itemDetails__container">
            <div className="header__wrapper">
              <Link to="/inventory">
                <img
                  className="header__backArrow"
                  src={back_arrow}
                  alt="Back arrow icon"
                />
              </Link>
              <h1 className="header__title">
                {this.state.itemDetail.itemName}
              </h1>
              <Link className="link__editButton-mobile" to="/editItem">
                <button className="header__editButton-mobile">
                  <img className="header__editButton-icon" src={pencil} alt=""/>
                </button>
              </Link>
              <Link className="link__editButton-tablet" to="/editItem">
                <button className="header__editButton-tablet">
                  <img className="header__editButton-icon" src={pencil} alt=""/>
                  Edit
                </button>
              </Link>
            </div>
            <section className="info__container">
              <div className="info__card left">
                <div className="info__card-wrapper">
                  <label className="info__card-label">Item Description:</label>
                  <h3 className="info__card-description">
                    {this.state.itemDetail.description}
                  </h3>
                </div>
                <div className="info__card-wrapper">
                  <label className="info__card-label">CATEGORY:</label>
                  <h3 className="info__card-description">
                    {this.state.itemDetail.category}
                  </h3>
                </div>
              </div>
              <div className="info__card right">
                <div className="info__card-container">
                  <div className="info__card-wrapper info__card-wrapper-right">
                    <label className="info__card-label">STATUS:</label>
                    <h3 className="info__card-description info__card-description-instock">
                      {this.state.itemDetail.status}
                    </h3>
                  </div>
                  <div className="info__card-wrapper info__card-wrapper-right">
                    <label className="info__card-label">QUANTITY:</label>
                    <h3 className="info__card-description">
                      {this.state.itemDetail.quantity}
                    </h3>
                  </div>
                </div>
                <div className="info__card-container">
                  <div className="info__card-wrapper info__card-wrapper-right">
                    <label className="info__card-label">WAREHOUSE:</label>
                    <h3 className="info__card-description">
                      {this.state.itemDetail.warehouseName}
                    </h3>
                  </div>
                  <div className="info__card-wrapper info__card-wrapper-right empty"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    );
  }
}

export default InventoryItemDetails;
