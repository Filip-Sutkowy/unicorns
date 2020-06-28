import React from 'react';
import classes from './App.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { images as imageList } from './images';

export class App extends React.Component {

  images = [];

  spawn = () => {

    const style = {
      top: Math.random() * this.state.height - 250,
      left: Math.random() * this.state.width - 250,
      transform: 'rotate('+Math.floor(60*Math.random()) * (Math.random() < 0.5 ? -1 : 1)+'deg) scale('+Math.max(Math.random(), 0.2)+')'
    }

    let image = <img
      key={this.images.length}
      className={classes.image}
      style={style}
      src={imageList[Math.floor(Math.random() * imageList.length)]}
      alt=""
    />;

    this.images =[ ...this.images, image];

    this.setState({ unicorns: this.state.unicorns + 1 });
  };

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, unicorns: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    console.log(this.state);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    return (
      <div className={classes.Home}>

        <div>{ this.images }</div>
        <span className={classes.counter+' '+classes.interface}>{this.state.unicorns}</span>

        <p className={classes.interface}>
          Click button to add more unicorns!
        </p>

        <button
          className={classes.PlayLink+' '+classes.interface}
          onClick={this.spawn}
        >Spawn!</button>

        <a href="https://github.com/Filip-Sutkowy/unicorns"
           target="_blank"
           rel="noopener noreferrer"
           className={classes.gitlink+' '+classes.interface}
        >
          <FontAwesomeIcon icon={faGithub} className={classes.gitlogo} /> Github
        </a>
      </div>

    );
  };
};

export default App;
