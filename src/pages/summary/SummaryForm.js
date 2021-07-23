import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger, PopoverContent } from "react-bootstrap";
import "../../App.css";
export default function SummaryForm() {
  const [checked, setChecked] = useState(false);
  const popover = (
    <Popover id='popover-basic'>
      <PopoverContent>
        No ice cream will actually be delivered
      </PopoverContent>
    </Popover>
  );
  const checkboxLabel = (
    <OverlayTrigger trigger='hover' placement='right' overlay={popover}>
      <span>
        I agree to <span style={{ color: "blue" }}> Terms and Conditions</span>
      </span>
    </OverlayTrigger>
  );

  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            className='checkbox-confirm'
            type='checkbox'
            label={checkboxLabel}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!checked}>
          Confirm Order
        </Button>
      </Form>
    </div>
  );
}

