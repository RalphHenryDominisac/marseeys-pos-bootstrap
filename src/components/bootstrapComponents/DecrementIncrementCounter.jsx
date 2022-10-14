import React from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../styles.css";


export default function DecrementIncrementCounter({onClickRemoveFunctionCounter, onClickAddFunctionCounter,  itemQtyCounter}) {
  return (
    <div>
      <Button
        onClick={onClickRemoveFunctionCounter}
        sx={{
          ":hover": {
            bgcolor: "#D33131", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#9E3F3F",
          ml: 22,
          mt: 1,
          width: 3,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "50px",
        }}
        size="small"
      >
        <RemoveIcon />
      </Button>

      <h1 className="counterResult">{itemQtyCounter} 1</h1>

      <Button
        onClick={onClickAddFunctionCounter}
        sx={{
          ":hover": {
            bgcolor: "#55CE6B", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#5D9B68",
          ml: 32,
          mt: -11.9,
          width: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "50px",
        }}
        size="small"
      >
        <AddIcon />
      </Button>
    </div>
  );
}
