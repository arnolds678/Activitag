//first login screen

const CLIENT_ID = "326978703631-0f5u8bhqftmr3884ug1ar0o36pc12c1h.apps.googleusercontent.com";

handleLogin = (res) => {
    console.log(res);
};

<GoogleLogin
    clientId={CLIENT_ID}
    buttonText="Login"
    onSuccess={this.handleLogin}
    onFailure={(err) => console.log(err)}
    className="initial-link initial-login"
/>

