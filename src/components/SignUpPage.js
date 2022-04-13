import {Button, styled, TextField} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";


const Form = styled('form')`
  display: flex;
  flex-direction: column;
`
export function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [validate, setValidate] = useState([
        {
            text:"Password length must be more than 8 symbols",
            validation: false
        },
        {
            text:"Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + ",
            validation:false
        },
        {
            text:"Password need at least one capital letter",
            validation:false
        },
        {
            text:"Password need at least one lowercase letter",
            validation:false
        },
        {
            text:"Password need at least one number",
            validation:false
        },
    ]);
    const [validate2, setValidate2] = useState([
        {
            text:"Password length must be more than 8 symbols",
            validation: false
        },
        {
            text:"Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + ",
            validation:false
        },
        {
            text:"Password need at least one capital letter",
            validation:false
        },
        {
            text:"Password need at least one lowercase letter",
            validation:false
        },
        {
            text:"Password need at least one number",
            validation:false
        },
    ])
    const [validationState, setValiationState] = useState(false);


    const validateForm = (e) => {
        e.preventDefault();
        let count = 0;
        
        validate.map(item => {
            if (item.validation === true){
                count++;
            }
        })
        validate2.map(item => {
            if (item.validation === true){
                count++;
            }
        })

        if (count < 10){
            setValiationState(false);
            alert("Not all requirements are succesfull")
        }else{
            setValiationState(true);
            const data = {
                email,
                password,
            }
            sendUserData(data)
            alert("Your succesfully registrate");
        }

        if (cPassword !== password) {
            alert("PASSWORDS ARE NOT SAME!")
            return;
        }
        // onSuccess(data)
    }

    const passwordHandler = (e) => {
        const text = e.target.value;
        setPassword(text);
        checkPassword(text);    
    } 

    const passwordConfirmHandler = (e) => {
        const text = e.target.value;
        setCPassword(text);
        checkPasswordConfirm(text);
    } 

    const checkPasswordConfirm = (text) => {
        if (text.length > 8){
            setValidate(validate2.map(item => {
                if (item.text === "Password length must be more than 8 symbols"){
                    item.validation = true;
                }
                return item;
            }))
        }else{
            setValidate(validate2.map(item => {
                if (item.text === "Password length must be more than 8 symbols"){
                    item.validation = false;
                }
                return item;
            }))
        }
        if (text.includes("!") || text.includes("@") || text.includes("#") || text.includes("$") || text.includes("%") || text.includes("^") || text.includes("&") || text.includes("*") || text.includes("?") || text.includes("_") || text.includes("+")){
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + "){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + "){
                    item.validation = false;
                }
                return item;
            }))
        }
        if (/[A-Z]/.test(text)){
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one capital letter"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one capital letter"){
                    item.validation = false;
                }
                return item;
            })) 
        }
        if (/[a-z]/.test(text)){
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one lowercase letter"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one lowercase letter"){
                    item.validation = false;
                }
                return item;
            })) 
        }
        if (/\d/.test(text)){
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one number"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate2.map(item => {
                if (item.text === "Password need at least one number"){
                    item.validation = false;
                }
                return item;
            })) 
        }
    }

    const checkPassword = (text) => {
        if (text.length > 8){
            setValidate(validate.map(item => {
                if (item.text === "Password length must be more than 8 symbols"){
                    item.validation = true;
                }
                return item;
            }))
        }else{
            setValidate(validate.map(item => {
                if (item.text === "Password length must be more than 8 symbols"){
                    item.validation = false;
                }
                return item;
            }))
        }
        if (text.includes("!") || text.includes("@") || text.includes("#") || text.includes("$") || text.includes("%") || text.includes("^") || text.includes("&") || text.includes("*") || text.includes("?") || text.includes("_") || text.includes("+")){
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + "){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one special symbol. List of special symbols: ! @ # $ % ^ & * ? _ + "){
                    item.validation = false;
                }
                return item;
            }))
        }
        if (/[A-Z]/.test(text)){
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one capital letter"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one capital letter"){
                    item.validation = false;
                }
                return item;
            })) 
        }
        if (/[a-z]/.test(text)){
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one lowercase letter"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one lowercase letter"){
                    item.validation = false;
                }
                return item;
            })) 
        }
        if (/\d/.test(text)){
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one number"){
                    item.validation = true;
                }
                return item;
            })) 
        }else{
            setValidate(validate.map(item => {
                if (item.text === "Password need at least one number"){
                    item.validation = false;
                }
                return item;
            })) 
        }
    }

    function sendUserData(userData) {
        axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbGWUCJJQILofUJ5_vnm_ZfRjeywWGfWw`,
            {
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }
        )
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log({...error})
            alert(`User not registered. Error message: ${error.response.data.error.message}`)
        })
    }



    return (
        <Form onSubmit={validateForm}>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small" type="email" label="Email" placeholder="Enter email" required
            />
            <br />
            <TextField
                value={password}
                onChange={(e) => passwordHandler(e)}
                size="small" type="password" label="Password" placeholder="Enter password" required />
            <ul style={{margin:password.length > 0 ? 16 : 0 }}>
            {
                password.length > 0 && validate.map(item =>  (
                    <li style={{color: item.validation ? "green" : "red", margin:0, fontSize:14}}>{item.text}</li>
                ))
            }  
            </ul>  
            <br />
            <TextField
                value={cPassword}
                onChange={(e) => passwordConfirmHandler(e)}
                size="small" type="password" label="Confirm Password" placeholder="Enter password" required />
            <ul style={{margin:cPassword.length > 0 ? 16 : 0 }}>
                    {
                        cPassword.length > 0 && validate2.map(item =>  (
                            <li style={{color: item.validation ? "green" : "red", margin:0, fontSize:14}}>{item.text}</li>
                        ))
                    }  
            </ul>
                
            <br />
            <Button type="submit" variant="contained">Sign Up</Button>
        </Form>
    )
}