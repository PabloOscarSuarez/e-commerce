import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

function Result({bookByTitle}) {
  return (
    <div>
      <div style={{ marginTop: 40, padding: 40 }}>
        <Grid container spacing={60} justify="center">
           { bookByTitle && bookByTitle.map(book => ( 
            <Grid item>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    // image={ }
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     {book.title}
                    </Typography>
                    <Typography component="p">{book.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  
                  <Link to = {`/book/${book.id}`} size="small" color="primary">Ver</Link>
                
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>
            </Grid>
            ))} 
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = function(state){

  return{

    bookByTitle:state.books.bookByTitle
  }
}

export default connect (mapStateToProps, null)(Result)