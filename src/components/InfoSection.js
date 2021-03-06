import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import styles from "../styles/infoSectionStyle.js";
import Button from "./Button.js";
import CreateIcon from '@material-ui/icons/Create';
import TelegramIcon from '@material-ui/icons/Telegram';
import {links} from "../links.js" ;

const useStyles = makeStyles(styles);

export default function InfoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>SUTD Virtual Run</h1>
          <h3 className={classes.description}>
            The SUTD inaugural Virtual Run has begun! Run far, run fast, and most importantly run safe! Remember to log your runs here post instagram
            stories for a chance at the lucky draw. Also, if you haven't already, join our telegram group for the latest notifications. Happy Running!
          </h3>
        </GridItem>
        <GridItem xs={12} sm={8} md={4}>
          <Button className={classes.navlink} href = "https://t.me/joinchat/SMJYoOIsHSczOWRl" color = 'danger' size = 'lg'> <TelegramIcon></TelegramIcon>Telegram</Button>
        </GridItem>
        
      </GridContainer>
      
    </div>
  );
}
