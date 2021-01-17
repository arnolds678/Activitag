//first login screen

//allows user to enter username and record username
class username extends React.Component {
    render () {
        return (
            <loginTitle title={"Login"}>
                <div className="container">
                    <div className="row">
                        <div className="m-16">
                            <h2>login</h2>
                            <hr />
                        </div>
                        <LoginForm />
    
                    </div>
                </div>
            </loginTitle>

        );
        
    }
}
