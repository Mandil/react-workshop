import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div className='projectCard float-left'>
      <img className="photo" src="https://i.pinimg.com/736x/87/35/f0/8735f09361805f96103937a89eaf24ea--retro-photography-registered-nurses.jpg" alt="Jamie"/>
      <h2>Jamie Degnan</h2>
      <p>Born in sunny Southern California, I slowly made my way up the coast and call Seattle my home.  I love the mountains, my family, and cold brew coffee.</p>
      </div>)
  }
}

export default ProfileCard;
