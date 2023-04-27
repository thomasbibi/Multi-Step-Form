import {useForm} from 'react-hook-form'
import {useFormContext} from './FormContext'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Payment = () => {
  const [state , setState] = useFormContext()
  const navigate = useNavigate()
  const {handleSubmit,register,watch,formState : {errors}} = useForm({defaultValues : state, mode : 'onSubmit'})
  const watchPassword = watch("password");

  const saveData = (data)=>{
    setState({ ...state, ...data });
    navigate("/thanks");
  }
 return <>
     <Form onSubmit={handleSubmit(saveData)}>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} {...register('address',{required : 'Address is required'})} />
      </Form.Group>
      <p style={{color : 'red'}}>{errors.address?.message}</p>

      

      <Form.Select aria-label="Default select example" {...register("gender")}
>
      <option>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Others</option>
    </Form.Select>

      <p style={{color : 'red'}}>{errors.gender?.message}</p>

      
      <Button variant="success" type="submit" className='center'>
        Review
      </Button>
    </Form>
 </>
}

export default Payment