import React from 'react';
import CategoryButtonStyle from './CategoryButtonStyle';
import Stack from "@mui/material/Stack";
import axiosInstance from "../../helpers/axios";


export default function CategoryButton(props) {
  return (

    <React.Fragment>
    
        <CategoryButtonStyle  title={props.categoryName} /> 
  
     

    </React.Fragment>
  );
}
