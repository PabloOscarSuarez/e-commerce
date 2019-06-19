import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default function Books({books}) {
  return (
    <div>
      <div style={{ marginTop: 40, padding: 40 }}>
        <Grid container spacing={60} justify="center">
           { books && books.map(book => ( 
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
                  <Button size="small" color="primary">
                    Share
                </Button>
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