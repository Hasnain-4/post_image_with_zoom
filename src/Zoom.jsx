import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Forms from './Forms';
import ReactImageMagnify from 'react-image-magnify';



const API = 'http://127.0.0.1:8000/image/';      // GET request
// const DEFAULT_QUERY = 'redux';
 
class Zoom extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    this.getData()
  }
  getData(){
    fetch(API,"Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2Mjc0NDk2LCJqdGkiOiJmNTMyZDc3NmYzYTg0YjNjOTVlOTkyMmIzZGFjNDE3YiIsInVzZXJfaWQiOjF9.YT6Jm3NEWe4xhgweXHEiBJBkgddjKvTJax1qCd38dpA")
      .then(response => response.json())
      .then(data => this.setState({ hits: data.data }));
  }

  render() {
    const { hits } = this.state;
    // const baseUrl = 'http http://127.0.0.1:8000/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2MjczODAxLCJqdGkiOiIzM2E4YjU0N2FmZWE0MjNlYjU5YTI3MTVhYjFlMGFkYSIsInVzZXJfaWQiOjF9.Xp5B-Zh2fZMdt2ki0J6jsvq0hni3kNXIL1SfJ87uBKs"'

    // const baseUrl = 'http://127.0.0.1:8000';
    return (
      <div style={{'backgroundColor':'black'}}>
        <div className="container-fluid">

        {hits.map(hit =>  
        <>        
       
       <ReactImageMagnify {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: hit.image,
                srcSet: [
                    // `${anda687} 687w`,
                    // `${anda770} 770w`,
                    // `${anda861} 861w`,
                    // `${anda955} 955w`
                ].join(', '),
                sizes: '(min-width: 480px) 30vw, 80vw'
            },
            largeImage: {
                alt: '',
                src: hit.image,
                width: 1000,
                height: 2000
            }
        }} />
            <div className="card mb-4">

            {/* <img src={(`${baseUrl}${hit.image}`)} alt="img"/>       Display image with baseurl */}
            
            </div>
        </>
        )}
        
        </div>
        
        </div>
     
    );
  }
}

export default Zoom;



// <h2>This is Dashboard.jsx</h2>
// <div className="container mt-5 p-5">
// <Forms/>

// </div>