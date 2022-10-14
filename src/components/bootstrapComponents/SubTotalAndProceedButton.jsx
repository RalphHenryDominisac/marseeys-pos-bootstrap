import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function SubTotalAndProceedButton({subTotalPriceOrderSide, buttonFunctionProceedToConfirm}) {
  return (
    <React.Fragment>
      <Typography
        sx={{
          ml: 2,
          mt: 9,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Sub Total:
      </Typography>
      <Typography
        sx={{
          ml: 11,
          mt: -3.4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Php {subTotalPriceOrderSide}
      </Typography>
      <Button
        onClick={buttonFunctionProceedToConfirm}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 32,
          mt: -7,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "300px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px",
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Proceed
      </Button>
    </React.Fragment>
  );
}
