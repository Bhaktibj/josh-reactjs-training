import React from 'react';
import { Jumbotron, Button, } from 'reactstrap';

const DashboardComponent = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          <Button color="primary">Logout</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default DashboardComponent;
