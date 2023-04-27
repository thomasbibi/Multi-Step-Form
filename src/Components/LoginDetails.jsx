import {useForm} from 'react-hook-form'
import {useFormContext} from './FormContext'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginDetails = () => {
  const [state , setState] = useFormContext()
  const navigate = useNavigate()
  const {handleSubmit,register,watch,formState : {errors}} = useForm({defaultValues : state, mode : 'onSubmit'})
  const watchPassword = watch("password");

  const saveData = (data)=>{
    setState({ ...state, ...data });
    navigate("/more-details");
  }
 return <>
     <Form onSubmit={handleSubmit(saveData)}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control {...register('firstname',{required : 'First name is required'})} placeholder="Firstname" />

      </Form.Group>
      <p style={{color : 'red'}}>{errors.firstname?.message}</p>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control {...register('lastname',{required : 'lastname is required'})}  placeholder="Lastname" />
      </Form.Group>
      <p style={{color : 'red'}}>{errors.lastname?.message}</p>


      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control {...register('email',{required : 'email is required'})} type='email' placeholder="Enter Email" />
      </Form.Group>

      <p style={{color : 'red'}}>{errors.email?.message}</p>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control {...register('password',{required : 'Password is required'},
         {...register('password',{
          minLength: {
            value: 8,
            message: 'Min 8 chars required' 
          }
        })}
        )} type = 'password' placeholder="Enter Username" />
      </Form.Group>

      <p style={{color : 'red'}}>{errors.password?.message}</p>

      <Form.Group className="mb-3" controlId="conpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control {...register("confirmPassword", {
              required: "Confirm the password",
              validate: (value) =>
                value === watchPassword || "The passwords do not match",
            })} type = 'password' placeholder="Confirm Password" />
      </Form.Group>

      <p style={{color : 'red'}}>{errors.confirmPassword?.message}</p>



      <Button variant="success" type="submit" className='center'>
        Next
      </Button>
    </Form>
 </>
}

export default LoginDetails