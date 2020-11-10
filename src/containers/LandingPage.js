import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  
  return (
    <Segment className="acnh-text" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <h1>Login</h1>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
            />

            <NavLink to="/home">
              <Button content="Login" primary />
            </NavLink>
          </Form>
        </Grid.Column>

        <Grid.Column id="sign-up-column" verticalAlign="middle">
          <h1>Sign-Up</h1>
          <Form className="acnh-text">
            <Form.Field>
              <label>Name</label>
              <input name="name" placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input name="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Island Name</label>
              <input name="town_name" placeholder="Island Name" />
            </Form.Field>
            <Form.Field label="Island Hemisphere" control="select">
              <option value="">Choose a Hemisphere</option>
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </Form.Field>
            <Button content="Sign-up" primary />
          </Form>
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
};

export default LandingPage;
