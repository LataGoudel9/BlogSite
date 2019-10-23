import React,{Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ThreadDisplay from './Threads.jsx';
import './style.css';




class Page1 extends Component {

  constructor(props) {
      super(props);

      console.log(this.props)
  }
  render(){

  return (
    <div >

<div className="panel panel-default post-editor">
  <div className="panel-body">
  <h2><strong>Stop Staring at that Scale and Start Living</strong></h2>
  <Typography>
  By: Lata Goudel
  </Typography>
  <Typography textAlign="left" variant="subtitle1" paragraph>
  October 22, 2019
  </Typography>
<Typography textAlign="left" variant="subtitle1" paragraph>
I myself once wanted to get super fit. I wanted abs, I wanted to be my best, but then I realized there is no way to be your best if you can't enjoy your life. Yes it's important to be healthy, and it's best that we maintain our bodies with good exercise and nutrients. BUT, I LOVE ICE CREAM, and cupcakes, and choclate, and cheesecake, and candy. I have a major sweet tooth as you can probably guess, so I decided those things make me happy, and no amount of definition of my muscles make me happy. SO the point im making is, just eat, because food is the greatest of pleasures, and what's the point in looking great if your not happy?
</Typography>
<Typography> TL;DR: Eat ya ice cream, its never that deep (:</Typography>
<p>&nbsp;</p>

<Typography> Don't forget to save this link into your bookmarks and share it with your friends.</Typography>

</div>
</div>


    <ThreadDisplay database = {this.props.database2}/>
    </div>
  );
}
}
export default Page1;
