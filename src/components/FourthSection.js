import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const FourthSection = () => {
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
            <div id='contact'>
                <h1>Lets get in touch</h1>
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
                    <button className='app-form-button' onClick={cancelEmail}>
                        CANCEL
                    </button>
                    <button
                        className='app-form-button'
                        onClick={() => validateEmail()}
                    >
                        SEND
                    </button>
                </div>

                <span>
                    <a
                        href='mailto: donovanle18@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Email: donovanle18@gmail.com
                    </a>
                </span>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    max-width: 900px;
    margin: auto;
    h1 {
        width: 100%;
        text-align: center;
        color: #081588;
        font-family: Roboto Condensed;
        font-size: 3.5rem;
        padding: 3rem 0;
    }

    .app-form-group {
        text-align: center;
    }

    input {
        width: 90%;
        margin: auto;
        margin-top: 2rem;
        height: 3rem;
        background: transparent;
        color: #081588;
        border: none;
        border-bottom: 1.5px solid #081588;
        font-size: 1.2rem;
        padding-left: 0.5rem;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        margin-top: 2rem;
    }

    button {
        width: 8rem;
        height: 3rem;
        border: none;
        background-color: #081588;
        border-radius: 0.5rem;
        color: white;
    }

    span {
        position: absolute;
        left: 1rem;
        bottom: 2rem;
    }

    a {
        text-decoration: none;
        color: #081588;
    }
`;

export default FourthSection;
