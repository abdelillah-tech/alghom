import React, { Component } from 'react';
import Linkedin from '../svg/Linkedin.svg';
import Facebook from '../svg/Facebook.svg';
import Github from '../svg/Github.svg';
import axios from "axios";

const API_PATH = 'http://localhost:3000/alghom/src/API/index.php';

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
            message: this.state.message
        }

        axios.post('API_URI', data)
            .then(res => {
                this.setState({ mailsSent: true }, this.resetForm())
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
            <div className="contact">
                <form className="formulaire">
                    <input type="text" className="first-name" placeholder="first Name" value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })}></input>
                    <input type="text" className="last-name" placeholder="last name" value={this.state.lname} onChange={e => this.setState({ lname: e.target.value })}></input>
                    <input type="text" className="email" placeholder="email address" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                    <input type="text" className="company" placeholder="company" value={this.state.company} onChange={e => this.setState({ company: e.target.value })}></input>
                    <textarea className="message" placeholder="message" value={this.state.message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                    <input type="submit" className="send-mail" onClick={e => this.handleFormSubmit(e)} ></input>
                </form>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/abdelillah-ghomari/" ><img src={Linkedin} alt="linkedin" width="50" height="50"></img></a>
                    <a href="https://github.com/abdelillah-tech" ><img src={Github} alt="github" width="50" height="50"></img></a>
                    <a href="https://www.facebook.com/abdelillah.ghomari.7" ><img src={Facebook} alt="facebook" width="50" height="50"></img></a>
                </div>
            </div>
        );
    }
}
export default ContactContent;