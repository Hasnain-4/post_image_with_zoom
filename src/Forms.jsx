import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';


class Forms extends Component {

  state = {
    image: null
  };


  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);

    let url = 'http://localhost:8000/image/';
    axios.post(url, form_data, {
      headers: {
        'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2Mjc0NDk2LCJqdGkiOiJmNTMyZDc3NmYzYTg0YjNjOTVlOTkyMmIzZGFjNDE3YiIsInVzZXJfaWQiOjF9.YT6Jm3NEWe4xhgweXHEiBJBkgddjKvTJax1qCd38dpA',
        'content-type': 'multipart/form-data',
      }
    })
        .then(res => {
          console.log(res.data);
          this.props.history.push('/uploaded_image')
          // window.location.href='/uploaded_image'
          // window.location.reload(false);        // For Page Refresh
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="cardform">
        
            <Form onSubmit={this.handleSubmit}>
                            
               <input type="file"
                  name="image"
                  accept="image/png, image/jpeg" required onChange={this.handleImageChange} /> <br/><br/>
              
               <Button type="submit" variant="info">Submit</Button>
            </Form>
      
        </div>
    );
  }
}

export default withRouter(Forms);     //Redirect to next page on form submit