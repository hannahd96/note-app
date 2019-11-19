import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            title : '',
            content : '',
            users: []
        }
    }

    componentDidMount() {
     axios.get('http://localhost:5000/users/')
        .then(response => {
            if(response.data.length > 0) {
               this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
               })
            }
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const note = {
            username: this.state.username,
            title: this.state.title,
            content: this.state.content
        }

        console.log(note);

        axios.post('http://localhost:5000/notes/add', note)
            .then(res => console.log(res.data));
        
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Note</h3>
                <form onSubmit = { this.onSubmit }>
                    <div className = "form-group">
                        <label>
                            Username:
                        </label>
                        <select ref = "userInput"
                            required
                            className = "form-control"
                            value = { this.state.username }
                            onChange = { this.onChangeUsername }>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key = {user}
                                        value = {user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type = "text" 
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Content: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={ this.state.content }
                            onChange={ this.onChangeContent }
                            />
                    </div>
                    <div className = "form-group">
                        <input type="submit" value = "Submit" className = "btn btn-primary"></input>
                    </div>
                </form>
                </div>
        )
    }
}
