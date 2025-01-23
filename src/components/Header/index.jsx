import React, {useState} from 'react'
import { validate } from 'email-validator';

export default function Header() {
    const[email, setEmail] = useState('');
    const[emailError, setEmailError] = useState('');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () =>{
        if(validate(email)){
            console.log("Vaild email : ", email);
            setEmailError('');
        } else {
            console.log("Invalid email");
            setEmailError('Please enter a valid email, example - test@email.com');
        }
    };

  return (
    <div>
        <div style={{
            position:'relative',
            backgroundImage:'url(/images/background.svg)',
            backgroundSize: 'cover', // Покрывает весь контейнер
            backgroundPosition: 'center', // Центрирует изображение
            height: '100vh' // Устанавливаем высоту контейнера на всю высоту экрана
        }}>                 
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col gap-[75px]'>
            <div className='flex items-center justify-between p-9'>
                <div className='pl-[8%]'> 
                    <img className='h-[30px] w-[133px]' src='public\images\logoPlane.png'/>
                </div>

                <div className='flex row gap-2 pr-[8%] font-medium'>
                    <a className='text-[#696969]'>New to plan?</a>
                    <a className='text-[rgba(63,118,255,1)] hover:underline' href='https://app.plane.so/sign-up/'>Create an account</a>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <div className='flex flex-col h-[472.1px] w-[440px] gap-5'>
                    <div className='flex items-center justify-center font-bold'>
                        <h3 className='font-bolt text-3xl ml-0'>Log in or sign up</h3>
                    </div>

                    <div className='flex flex-col gap-2.5'>
                        <label className='text-sm font-medium text-[rgba(82,82,82)]'>Email</label>
                        <input 
                            type='email' 
                            placeholder='name@company.com' 
                            className='p-2.5 border-[1px] rounded-md outline-none'
                            value={email}
                            onChange={handleEmailChange}></input>
                            {emailError && <p className="text-red-500 font-medium text-sm">{emailError}</p>} {/* Отображаем ошибку, если она есть */}
                        <button onClick={handleSubmit} className='border-solid p-1.5 bg-[rgba(140,173,255,1)] rounded-md w-[full] text-[white]'>Continue</button>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                        <hr className='w-full'/>
                        <p className='text-sm text-[rgba(163,163,163)] mb-[5px]' >or</p>
                        <hr className='w-full'/>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <button onClick={'https://www.google.com'} className='flex items-center justify-center gap-[5px] border-[1px] p-2 text-sm rounded-md hover:bg-[rgba(217,228,255)]'>
                            <img className='h-[18px] w-[18px]' src='public\images\googleLogo.png'/>
                            <a>Continue with Google</a>
                        </button>

                        <button onClick="https://github.com/mentalroma" className='flex items-center justify-center gap-[5px] border-[1px] p-2 text-sm rounded-md hover:bg-[rgba(217,228,255)]'>
                            <img className='h-[18px] w-[18px]' src='public\images\githubLogo.png'/>
                            <a>Continue with Github</a>
                        </button>
                    </div>

                    <div className='flex flex-col text-[rgba(58,58,58)] text-sm'>
                        <div className='flex items-center justify-center'>
                            <p>By signing in, you agree to our</p>
                        </div>

                        <div className='flex items-center justify-center gap-[5px]'>
                            <a href='https://plane.so/legals/terms-and-conditions'> 
                                <u>Terms of Service</u> 
                            </a> 
                            <p>and</p>
                            <a href='https://plane.so/legals/privacy-policy'>
                                <u>Privacy Policy.</u>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
