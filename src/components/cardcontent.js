import React from 'react';
import { Card, CardText, CardBody, CardHeader, CardFooter,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardContent = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick CardContent text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
        <CardFooter>
          <Button>Button</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardContent;
