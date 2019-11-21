import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Note = props => (
    <tr>
        <td>{ props.note.username }</td>
        <td>{ props.note.title } </td>
        <td>{ props.note.content }</td>
        <td>
            <Link to = {"/edit/" + props.note._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteNote(props.note._id) }}>Delete</a>
        </td>
    </tr>
)

export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.deleteNote = this.deleteNote.bind(this);

        this.state = {notes: []};

    }   
    
    componentDidMount(){
        axios.get('http://localhost:5000/notes/')
            .then(response => {
                this.setState({ notes: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteNote(id) {
        axios.delete('http://localhost:5000/notes/' + id)
            .then(res => console.log(res.data));

        this.setState({
            notes: this.state.notes.filter(el => el.id !== id)
        })
        window.location = '/';
    }
    
    NoteList() {
        return this.state.notes.map(currentNote => {
            return <Note note = { currentNote } deleteNote = { this.deleteNote } key = { currentNote._id }></Note>
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Notes</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.NoteList() }
                    </tbody>
                </table>
            </div>
        )
    }
}