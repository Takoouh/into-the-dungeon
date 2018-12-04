import React, { Component, Fragment } from "react"
import "./FloorChoice.css"
import { Row, Col, Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap"
import axios from "axios"
class FloorChoice extends Component {

  componentDidMount() {

  }


  render() {


    { console.log(this.props.stats[0], "hello") }
    return (
      <Fragment>
        <Row>
          <Col xs="12">
            <h2>Go to next floor :</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Card onClick={() => console.log('lol')} inverse>
              <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
              <CardImgOverlay>
                {/* <CardTitle>Floor {this.props.floorList[0]}</CardTitle> */}
              </CardImgOverlay>
            </Card>

          </Col>
        </Row>


        <Row>
          <Col xs="12">
            <h2>Visit an previous floor :</h2>
          </Col>
        </Row>

        <Row>
          {console.log(this.props.floorList)}

          <Col xs="3">
            <Card inverse>
              <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Floor </CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>


        </Row>

      </Fragment >
    )
  }
}

export default FloorChoice