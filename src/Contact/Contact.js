import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Contact = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const validateEmail = () => {
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setError(null);
        if (re.test(email)) {
            sendEmail();
        } else {
            setError('Email is invalid format');
        }
    };

    const sendEmail = () => {
        emailjs
            .send(
                'service_ipuswby',
                'template_kuyt36q',
                {
                    to_name: 'Donovan',
                    message: message,
                    from_name: name,
                    email: email,
                    subject: subject,
                },
                'user_vFmt0Qupzc14LMl2n42hN'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    cancelEmail();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const cancelEmail = () => {
        setName(null);
        setEmail(null);
        setSubject(null);
        setMessage(null);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    };

    return (
        <StyledWrapper>
            <div className='contact-page'>
                <div className='left-side'>
                    <div className='form-title'>
                        <span>Contact</span>
                        <span style={{ textDecoration: 'underline' }}>Me</span>
                    </div>
                    <div className='form-contact'>
                        CONTACT INFO: donovanle18@gmail.com
                    </div>
                </div>
                <div className='right-side'>
                    <div className='email-error'>
                        <span>{error}</span>
                    </div>
                    <div className='app-form-group'>
                        <input
                            className='app-form-control'
                            id='name'
                            placeholder='NAME'
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className='app-form-group'>
                        <input
                            type='email'
                            className='app-form-control'
                            id='email'
                            placeholder='EMAIL'
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError(null);
                            }}
                        ></input>
                    </div>
                    <div className='app-form-group'>
                        <input
                            className='app-form-control'
                            id='subject'
                            placeholder='SUBJECT'
                            onChange={(e) => setSubject(e.target.value)}
                        ></input>
                    </div>
                    <div className='app-form-group'>
                        <input
                            className='app-form-control'
                            id='message'
                            placeholder='MESSAGE'
                            onChange={(e) => setMessage(e.target.value)}
                        ></input>
                    </div>

                    <div className='app-form-group buttons'>
                        <button
                            className='app-form-button'
                            onClick={cancelEmail}
                        >
                            CANCEL
                        </button>
                        <button
                            className='app-form-button'
                            onClick={() => validateEmail()}
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default Contact;

const StyledWrapper = styled.div`
    .left-side {
        color: white;

        .form-title {
            width: 10rem;
            margin: 7rem 0rem 3rem 2rem;
            font-size: 2.5rem;
            display: flex;
            flex-direction column;
            color: #b9134f;
        }

        .form-contact{
            margin-left: 2rem;
            color: #b9134f;
        }
    }

    .right-side{
        margin-top: 2rem;

        .email-error{
            color: red;
            margin-left: 1rem;
        }

        .app-form-group {
            margin-bottom: 15px;
        }

        .app-form-control {
            width: 90%;
            padding: 10px 0;
            margin: 1rem;
            background: none;
            border: none;
            border-bottom: 1px solid white;
            color: #8fc0a9;
            font-size: 1.1rem;
            text-transform: uppercase;
            outline: none;
            transition: border-color .2s;
        }
        
        .app-form-control::placeholder {
            color: white;
        }
        
        .app-form-control:focus {
            border-bottom-color: #ddd;
        }

        .app-form-group.buttons{
            text-align: center;
            margin-top: 2rem;
        }

        .app-form-button {
            background: none;
            border: none;
            color: #ea1d6f;
            font-size: 1.5rem;
            cursor: pointer;
            outline: none;
            margin: auto;
            margin-right: 1rem;
            margin-left: 1rem;
        }
        
        .app-form-button:hover {
            color: #b9134f;
        }
    }

    @media all and (min-width: 930px){
        .contact-page{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;

            .left-side{
                grid-area: 1 / 1 / 2 / 2;

                .form-title{
                    font-size: 4rem;
                }

                .form-contact{
                    margin-left: 2rem;
                    margin-top: 60%;
                    color: #b9134f;
                }
            }

            .right-side{
                grid-area: 1 / 2 / 2 / 3; 
                margin-top: 15rem;


                .app-form-control::placeholder{
                    color: #666;
                }

                .app-form-control{
                    border-bottom: 1px solid #666;
                }

                .app-form-control{
                    width: 70%;
                }

                .app-form-group.buttons{
                    text-align: left;
                }

            }
        }
    }
`;
