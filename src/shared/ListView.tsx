import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '00',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    listItemText: {
        color: 'blue',
      },
  });



const ListView = (props: any) => {
    const {data} = props
    console.log(data);

    // const [list, setList] = React.useState(data)

    
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    
    const classes = useStyles();

    if (data.response && data.response.length >0) {
        console.log(data)
        
        const listItems = data.response.map((item: any, idx: number) =>
        <Card className={classes.root} key={idx}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.question}
          </Typography>
          <Typography variant="body2" component="p">
            {item.answer}
          </Typography>
       
        </CardContent>
        <CardActions>
          {item.articles.map((articles: any, index: number) => 
            <ListItem button key={index} onClick={() => openInNewTab(articles)}>
            <ListItemText 
            classes={{ primary: classes.listItemText }}
             primary={articles} />

{/* <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>MyTitle</Typography>}
      /> */}

          </ListItem>
          )}
        </CardActions>
      </Card>
      )
        return (
            <ul>
                {listItems}
            </ul>
        )
    }

    return (
        <div>
            No Data
        </div>
    )
}

export default ListView
            // <div key={idx}>
            //     <h5>{idx + 1} {item.question}</h5>
            //     <p>{item.answer}</p>
            // </div>