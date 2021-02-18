import React from 'react'
import {Form} from "react-bootstrap";
const Variant = ({type,vari,arr}) => {
    console.log(arr)
    switch (type) {
        case 'dropdown':
          return (
            <>
              <Form.Control className="mr-sm-2" as="select" custom value={vari}>
                {arr.map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Control>
            </>
          );
        case 'radio':
            return (
              <>
                <Form className="justify-content-md-center">
                  <div key={`inline-radio`} className="mb-3">
                    {arr.map((x) => (
                      <Form.Check
                        inline
                        label={x}
                        name="exampleRadios"
                        type="radio"
                        id={`inline-radio-1`}
                      />
                    ))}
                  </div>
                </Form>
              </>
            );
        default:
          return (
              <></>
          );
      }
}

export default Variant