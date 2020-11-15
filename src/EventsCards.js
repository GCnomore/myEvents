import React, { Component } from 'react';
import Events from './Events';
import Grid from '@material-ui/core/Grid';

class EventsCards extends Component {
  state = {
    events: [
      {
        name: 'Chardonnay Cottage',
        location: 'Temecula, California, United States',
        url:
          'https://www.airbnb.com/rooms/40114601?adults=8&check_in=2020-12-31&check_out=2021-01-02&source_impression_id=p3_1605428896_M8LSKSVh9znbJ0WY',
        mainPic:
          'https://a0.muscache.com/im/pictures/a4561547-403b-4ab0-92c8-b58fdaea4d99.jpg',
        spec: '10 guests · 5 bedrooms · 5 beds · 2 baths',
        desc: '가능한 놀이: 노래방, 비어퐁, 랜덤 게임',
        price: '$575',
        pricePerPerson: ' (일단은 8명 기준)',
      },
    ],
  };

  render() {
    const { events } = this.state;
    return (
      <Grid container justify="center" spacing={2}>
        <Grid key={events.name} item>
          <Events events={events} />
        </Grid>
        <Grid key={events.name} item>
          <Events events={events} />
        </Grid>
        <Grid key={events.name} item>
          <Events events={events} />
        </Grid>
        <Grid key={events.name} item>
          <Events events={events} />
        </Grid>
      </Grid>
    );
  }
}

export default EventsCards;
