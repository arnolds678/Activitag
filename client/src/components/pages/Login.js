import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./Login.css";

const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Login extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <nav className="loginFormat">
                <div className="activiTag">activiTag</div>
                <div className = "googleLogin">
                    <GoogleLogin
                         clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.props.handleLogin}
                        onFailure={(err) => console.log(err)}
                        className="initial login button"/>
                </div>
            </nav>
    )
}
}

export default Login;