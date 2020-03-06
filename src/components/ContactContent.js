import React, { Component } from 'react';
import Linkedin from '../svg/Linkedin.svg';
import Facebook from '../svg/Facebook.svg';
import Github from '../svg/Github.svg';
import axios from "axios";

class ContactContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            company: "",
            message: "",
            mailSent: false,
            buttonText: 'Send Message'
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            company: this.state.company,
            message: this.state.message,
            buttonText: 'Message Sent'
        }

        axios.post('https://alghom-mail-services.now.sh/', data)
            .then(res => {
                this.setState({ mailSent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    resetForm = () => {
        this.setState({
            fname: "",
            lname: "",
            email: "",
            company: "",
            message: "",
            buttonText: 'Send Message'
        })
    }

    render() {
        return (
            <div className="contact" >
                <form className="formulaire" onSubmit={e => this.handleFormSubmit(e)}>
                    <input type="text" className="first-name" placeholder="first Name" onChange={e => this.setState({ fname: e.target.value })} required value={this.state.fname}></input>
                    <input type="text" className="last-name" placeholder="last name" onChange={e => this.setState({ lname: e.target.value })} required value={this.state.lname}></input>
                    <input type="text" className="email" onChange={e => this.setState({ email: e.target.value })} placeholder="your@email.com" required value={this.state.email}></input>
                    <input type="text" className="company" placeholder="company" value={this.state.company} onChange={e => this.setState({ company: e.target.value })}></input>
                    <textarea className="message" placeholder="message" onChange={e => this.setState({ message: e.target.value })} maxLength="250" required value={this.state.message}></textarea>
                    <button type="submit" className="send-mail">{this.state.buttonText}</button>
                </form>
                <div className="email-number">
                    <a href="mailto:ghomari.professionnel@email.com">ghomari.professionnel@email.com</a>
                    <p>+33.6.25.89.67.71</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/abdelillah-ghomari/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" width="50" height="50"></img></a>
                    <a href="https://github.com/abdelillah-tech" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github" width="50" height="50"></img></a>
                    <a href="https://www.facebook.com/abdelillah.ghomari.7" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook" width="50" height="50"></img></a>
                </div>
            </div>
        );
    }
}
export default ContactContent;