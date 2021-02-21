import React from 'react'
import {Form} from "react-bootstrap";
const Variant = ({type,vari,arr,Change,value}) => {
    // console.log(arr)
    switch (type) {
        case 'dropdown':
          return (
            <>
              <Form.Control id="data2" onChange={(event)=>Change(event,vari)} className="mr-sm-2" as="select" custom value={value}>
                {arr.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Form.Control>
            </>
          );
        case 'radio':
            return (
              <>
                <Form id="data2" onChange={(event)=>Change(event,vari)} className="justify-content-md-center">
                  <div key={`inline-radio`} className="mb-3">
                    {arr.map((x) => (
                      <Form.Check
                      onChange={(event)=>{}}
                      value={x}
                      checked={x===value}
                        key={x+1}
                        inline
                        label={x}
                        name="exampleRadios"
                        type="radio"
                        id={x}
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