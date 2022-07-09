import React from 'react';
import axios from 'axios';


import './App.css';

class App extends React.Component {

  state = {
    title: '',
    body: '',
    disc:'',
    posts: []
  };

  componentDidMount = () => {
    this.getProduct();
  };


  getProduct = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayProduct = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="productCard">
        <div className='productImg'>ImageHere</div>
        <h3 className="productTitle">{post.title}</h3>
        <div className="productDisc">{post.disc}</div>
        <p className='productCost'>Quantity:  - {post.price}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <div className='container'>
          <div className='header'>
            <h2>CarGo <span>🚚</span> </h2>
            {/* <div>serach bar</div> */}
          </div>
            
          <div className="productBox">
            {this.displayProduct(this.state.posts)}
          </div>
        </div>
      </div>
    );
  }
}


export default App;