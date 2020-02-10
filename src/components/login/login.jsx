import React from 'react';
import './login.css';
export default () => {
    return (
        <div>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                    <label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <form action="http://localhost:4500/login" method="post" className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="userin" className="label">Username</label>
                                <input id="userin" name="username" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="passin" className="label">Password</label>
                                <input id="passin" name="password" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked />
                                <label htmlFor="check">
                                    <span className="icon"></span>Keep me Signed in
                              </label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="http://localhost:4500/auth/google" className="btn">
                                    <div>
                                        <span className="svgIcon t-popup-svg">
                                            <svg
                                                className="svgIcon-use"
                                                width="25"
                                                height="37"
                                                viewBox="0 0 25 25"
                                            >
                                                <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                                                        fill="#4285F4"
                                                    />
                                                    <path
                                                        d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                                                        fill="#34A853"
                                                    />
                                                    <path
                                                        d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                                                        fill="#FBBC05"
                                                    />
                                                    <path
                                                        d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                                                        fill="#EA4335"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="button-label">Sign in with Google</span>
                                    </div>
                                </a>
                            </div>
                        </form>
                        <form className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="userup" className="label">Username</label>
                                <input id="userup" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="passup" className="label">Password</label>
                                <input id="passup" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="passup2" className="label">Repeat Password</label>
                                <input id="passup2" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="label">Email Address</label>
                                <input id="email" type="email" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
