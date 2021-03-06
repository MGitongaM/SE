import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";


import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function Module_Item(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
  const history = useHistory();
  const to_modules = () => history.push('/segment_que');
  const to_module = () => history.push('/module1_item');
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
        <div className={classes.container}>
          <GridContainer width="90%">
          <GridItem xs={12} sm={12} md={12}>
            <Button 
              onClick={to_module}
              style = {{backgroundColor:"purple"}}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12}>
            <Button color="primary">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button onClick={to_modules} color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
          </GridItem>
         
          <GridItem className={classes[cardAnimaton]}><h3 style={{color:"black"}}><b>Market Types</b></h3></GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody>
                    <h5>
                    To eventually understand who you are targeting with your product, we first need to
                    distinguish between market types. Each market type will need a different strategy and
                    approach, hence making it necessary to understand them.
                    </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody style={{backgroundColor:"black",color:"white"}}>
                  
                  <b>B2C (Business to Customer):</b> These are businesses that sell directly to their end users
                    <br />
                <br />
                <b>B2B (Business to Business):</b> These are businesses that sell to other businesses.
                   <br />
                <br />
                <b>B2M (Business to Many):</b> Business to many is simply a collective term for businesses that
                    operate on both b2b and b2c models. These businesses sell to both businesses and directly to consumers concurrently
                    <br></br>
                <br></br>


                <br></br>
                <b>B2B2C (Business to Business to Customer):</b>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=V1fALSzZXlI"
                  />
                </div>
                <br></br>
                {' '}
                <Link to="https://www.forbes.com/sites/forbescommunicationscouncil/2018/05/18/the-challenges-of-b2b2c-marketing-in-major-corporations/#16b4149a776a">
                  <b>B2B2C</b>
                </Link>
                {' '}
                   is close to a fusion of b2b and b2c. In b2b2c, businesses sell
                    their product to other businesses to leverage on the access to customers that the second company has. Sticking to our
                     previous example, if the cereals and grains wholesaler is struggling to acquire customers, they could sell their product
                      to an established chain of supermarkets that will in turn sell the cereals and grains to the end user.

                    While b2c faces the major challenge of entering and dominating competitive markets, b2b struggles with lead
                    generation and more often than not, a very slow sales pipeline, b2b offers a middle ground to both challenges.
                     Eventually, the net effect of partnering with an established distribution channel allows you to slowly build a
                      loyal customer base.
                    
                </CardBody>
              </Card>
              <Button onClick={to_modules} color="primary">
                Next
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer>
          
        </GridContainer>
        </div>
      </div>
    // </div>
  );
}
