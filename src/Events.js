import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Events extends Component {
  render() {
    const { name, location, url, mainPic, desc, spec } = this.props.events[0];
    console.log(this.props);
    return (
      <Card className="card" raised={true}>
        <CardHeader title={name} subheader={location} />
        <CardMedia className="cardImg" component="img" src={mainPic} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {spec} <br />
            {desc}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href={url}
            target="_blank"
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Events;
