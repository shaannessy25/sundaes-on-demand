import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import '../../App.css'
export default function SummaryForm() {
  const [ checked, setChecked ] = useState(false)
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check 
            className="checkbox-confirm"
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
