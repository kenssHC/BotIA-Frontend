import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { RiSearchLine, RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';

const BusquedaBar = ({ placeHolder, value, onChange }) => 
{
    return(
        <InputGroup className="mb-4 search-input">
            <InputGroup.Text  className="search-icon">
                <RiSearchLine />
            </InputGroup.Text>
            <Form.Control
                type="text"
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {onChange(e.target.value)}}
            />
        </InputGroup>

    )

}
export default BusquedaBar;