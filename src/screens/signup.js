import React, { Component } from 'react';
import "./images/icons/favicon.ico";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "./vendor/animate/animate.css";	
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import "./css/util.css";
import "./css/main.css";

class SignupScreen extends Component {

    state = {
        username: '',
        password: ''
    };

    constructor(props){
        super(props)
    }

    attempLogin(){
        this.username.current.value
    }

    render(){
        return (
            <div className="App">
                <body>
                    <div class="limiter">
                        <div class="container-login100">
                            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                            
                                <form class="login100-form validate-form" onSubmit={ this.attempLogin() }>
                                    <span class="login100-form-title p-b-33">
                                        Account Login
                                    </span>

                                    <div class="wrap-input100 validate-input" data-validate = "Valid fullname is required: ex@abc.xyz">
                                        <input class="input100" type="text" name="email" placeholder="Email" ref='username'/>
                                        <span class="focus-input100-1"></span>
                                        <span class="focus-input100-2"></span>
                                    </div>


                                    <div class="wrap-input100 validate-input" data-validate = "Valid username is required: ex@abc.xyz">
                                        <input class="input100" type="text" name="email" placeholder="Email" ref='username'/>
                                        <span class="focus-input100-1"></span>
                                        <span class="focus-input100-2"></span>
                                    </div>


                                    <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                        <input class="input100" type="password" name="pass" placeholder="Password" ref='password'/>
                                        <span class="focus-input100-1"></span>
                                        <span class="focus-input100-2"></span>
                                    </div>

                                    
                                    <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                        <input class="input100" type="password" name="pass" placeholder="Password" ref='password'/>
                                        <span class="focus-input100-1"></span>
                                        <span class="focus-input100-2"></span>
                                    </div>

                                    <div class="container-login100-form-btn m-t-20">
                                        <button class="login100-form-btn">
                                            Sign up
                                        </button>
                                    </div>

                                    <div class="text-center">
                                        <span class="txt1">
                                            Create an account?
                                        </span>

                                        <a href="#" class="txt2 hov1">
                                            Sign up
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        );
    
    }

  
}

export default LoginScreen;
