import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function OrderTypeButtons({ onClickFunction }) {
  return (
    <React.Fragment>
      <Stack spacing={2} direction="row" sx={{ mt: 1    , }}>
        <Button
          onClick={onClickFunction}
          value="Dine In"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          Dine In
        </Button>
        <Button
          onClick={onClickFunction}
          value="Pickup"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          Pickup
        </Button>
        <Button
          onClick={onClickFunction}
          value="Delivery"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          Delivery
        </Button>
      </Stack>
    </React.Fragment>
  );
}
