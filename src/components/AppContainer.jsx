import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = () => {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(26)
  const [isUppercase, setCheckUppercase] = useState(false);
  const [isLowercase, setCheckLowercase] = useState(false);
  const [isNumbers, setCheckNumbers] = useState(false);
  const [isSymbols, setCheckSymbols] = useState(false);

  const generatePassword = () => {
    const isValid = isValidPasswordInput();
    if(isValid){
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            let choice = random(0, 3);
            if (isLowercase && choice === 0) {
                password += randomLower();
            } else if (isUppercase && choice === 1) {
                password += randomUpper()
            } else if (isSymbols && choice === 2) {
                password += randomSymbol()
            } else if (isNumbers && choice === 3) {
                password += random(0, 9)
            } else {
                i--
            }
        }
        setPassword(password);
        toast('Password is generated successfully', {
            position: toast.POSITION.TOP_CENTER
        });
    }
  }

  const isValidPasswordInput = () =>{
    let isValid = true;
    if (!isUppercase && !isLowercase && !isNumbers && !isSymbols) {
        toast.error("To generate password you must select at least one checkbox", {
            position: toast.POSITION.TOP_CENTER
        });
        isValid = false;
    } else if (passwordLength === '0') {
        toast.error('Password length cannot be 0', {
            position: toast.POSITION.TOP_CENTER
        });
        isValid = false;
    } else if (passwordLength === '') {
        toast.error('Invalid password length', {
            position: toast.POSITION.TOP_CENTER
        });
        isValid = false;
    } else if (passwordLength > 80) {
        toast.error('Password length cannot exceed 80 characters', {
            position: toast.POSITION.TOP_CENTER
        });
        isValid = false;
    }
    return isValid;
  }

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  const randomLower = () => {
    return String.fromCharCode(random(97, 122))
  }

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90))
  }

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
    return symbols[random(0, symbols.length - 1)]
  }

  const copiedClipboardHandler = () =>{
    if(password.length > 0){
        navigator.clipboard.writeText(password);
        toast('Password successfully copied to clipboard',{
            position: toast.POSITION.TOP_CENTER
        });
    }
  }

  return (
    <div className='app'>
      <div className="container">
        <div className="generator">
            <h2 className='generator__header'>Password Generator</h2>
            <div className='generator__password'>
                <h3>{password}</h3>
                <span class="far fa-clipboard" aria-hidden="true" onClick={copiedClipboardHandler}></span>
            </div>
        <div className='form-group'>
            <label>Password length</label>
            <input
                type='number'
                name='length'
                min='4'
                max='50'
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Include Uppercase Letters</label>
            <input
            type='checkbox'
            name='isUppercase'
            defaultChecked={isUppercase}
            onChange={(e) => setCheckUppercase(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Lowercase Letters</label>
            <input
            type='checkbox'
            name='isLowercase'
            defaultChecked={isLowercase}
            onChange={(e) => setCheckLowercase(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Numbers</label>
            <input
            type='checkbox'
            name='isNumbers'
            defaultChecked={isNumbers}
            onChange={(e) => setCheckNumbers(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Symbols</label>
            <input
            type='checkbox'
            name='symbols'
            defaultChecked={isSymbols}
            onChange={(e) => setCheckSymbols(e.target.checked)}
            />
        </div>
        <button
            className='generator__btn'
            type='submit'
            name='generate'
            onClick={generatePassword}
        >Generate Password
        </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AppContainer;