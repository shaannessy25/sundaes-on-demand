import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "msw";
import ScoopOptions from "./ScoopOptions";
import ToppingsOption from './ToppingsOption'
import Row from 'react-bootstrap/Row'
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [ error, setError ] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);
  if(error) {
    return <AlertBanner />
  }
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingsOption;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
}
