import React from 'react';

function Item() {
       
      
          return(
                    <form action="#" >
                              <label>First Name</label>
                              <input type="text" id="fname" name="firstname" placeholder="Your name.."
                              value={this.state.fname}
                              onChange={e => this.setState({ fname: e.target.value })}
                              />
                              <label>Last Name</label>
                              <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
                              value={this.state.lname}
                              onChange={e => this.setState({ lname: e.target.value })}
                              />
                              <label>Email</label>
                              <input type="email" id="email" name="email" placeholder="Your email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
                              />
                              <label>Message</label>
                              <textarea id="message" name="message" placeholder="Write something.."
                              onChange={e => this.setState({ message: e.target.value })}
                              value={this.state.message}
                              ></textarea>
                              <input type="submit"  value="Submit" />

                              <div>
                                        {this.state.mailSent &&
                                                  <div>Thank you for contcting us.</div>
                                        }
                              </div>
                    </form >
          )
}

export default Item