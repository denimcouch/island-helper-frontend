import React, {Component} from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class LandingPage extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    town_name: '',
    hemisphere: ''
  }

  handleChange = ({name, value}) => {
    this.setState({
      [name]: value
    })
  }

  render (){
    return (
    <Segment className="acnh-text" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <h1 className="landing-page-title" >Login</h1>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Name"
              name="name"
              placeholder="Name"
              onChange={(e) => this.handleChange(e.target)}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              name="password"
              label="Password"
              type="password"
              onChange={(e) => this.handleChange(e.target)}
            />

            <NavLink to="/home">
              <Button content="Login" onClick={() => this.props.logInUser(this.state)} primary />
            </NavLink>
          </Form>
        </Grid.Column>

        <Grid.Column id="sign-up-column" verticalAlign="middle">
          <h1 className="landing-page-title" >Sign-Up</h1>
          <Form className="acnh-text">
            <Form.Field>
              <label>Name</label>
              <input name="name" placeholder="Name" onChange={(e) => this.handleChange(e.target)} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input name="email" placeholder="Email" onChange={(e) => this.handleChange(e.target)} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name="password" placeholder="Password" type="password" onChange={(e) => this.handleChange(e.target)} />
            </Form.Field>
            <Form.Field>
              <label>Island Name</label>
              <input name="town_name" placeholder="Island Name" onChange={(e) => this.handleChange(e.target)} />
            </Form.Field>
            <Form.Field label="Island Hemisphere" name="hemisphere" control="select" onChange={(e) => this.handleChange(e.target)} >
              <option value="">Choose a Hemisphere</option>
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </Form.Field>
            <NavLink to="/home">
              <Button content="Sign-up" onClick={() => this.props.signUpUser(this.state)} primary />
            </NavLink>
          </Form>
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
  }
  
};

export default LandingPage;
