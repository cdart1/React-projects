import React from "react";

const Receipt = ({ selectedSizeCost, selectedSize, 
                    selectedCrust, selectedCrustCost }) => {

    

    return (
        <div className="container" id="receipt-id">
            <div className="show-order">
                <h3>You Ordered:</h3>
                <p>Size: {selectedSize}</p>
                <p>Crust: {selectedCrust}</p>
                <p>-----------------------------------------------</p>
            </div>
            <div className="total-price">
                <h3>Total: $ -.00</h3>
                <p></p>
            </div>
        </div>
    );
};

export default Receipt;