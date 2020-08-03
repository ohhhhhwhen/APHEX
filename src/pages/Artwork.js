import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Gallery.css";
import IMG1 from "../extra/images/art1.jpg";
import IMG2 from "../extra//images/art2.jpg";
import IMG3 from "../extra//images/art3.jpg";
import IMG4 from "../extra//images/art4.jpg";
import IMG5 from "../extra//images/art5.jpg";
import IMG6 from "../extra//images/art6.jpg";
import IMG7 from "../extra//images/art8.jpg";
import IMG8 from "../extra//images/img9.jpg";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];

const smallImages = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];

class Artwork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 6, isOpen: true })}
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() => this.setState({ photoIndex: 7, isOpen: true })}
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Artwork;
