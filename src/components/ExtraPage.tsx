import React, {FC} from 'react';
import Card, { CardVarient } from "./Card";
import EventsExample from './EventsExample';

const ExtraPage:FC = () => {
    return (
        <>
        <EventsExample />
        <Card
          onClick={(num) => console.log("clicked", num)}
          variant={CardVarient.outlined}
          width="300px"
          height="200px"
        >
          <button>Button</button>
          <div>text</div>
        </Card>
        </>
    );
};

export default ExtraPage;