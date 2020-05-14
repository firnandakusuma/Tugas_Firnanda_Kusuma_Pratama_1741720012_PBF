import React, { Component } from "react";
import "./NoteForm.css";
import Firebase from "../firebase/config";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  handleDeleteAccount() {
    const user = Firebase.auth().currentUser;
    try {
      user.delete();
      console.log(user.email + " successfully deleted!");
    } catch (error) {
      alert(error);
    }
  }

  handleLogoutAccount() {
    const user = Firebase.auth().currentUser;
    try {
      console.log("Goodbye: " + user.email);
    } catch (e) {
      alert(e);
    }
  }

  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote() {
    if (this.state.newNoteContent.length == 0) {
      alert("Error: Note Empty");
    } else {
      this.props.addNote(this.state.newNoteContent);
    }

    this.setState({
      newNoteContent: "",
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <br></br>
        <br></br>
        <button className="btn-Delete" onClick={this.handleDeleteAccount}>
          Hapus Akun
        </button>
        <button className="noteButton" onClick={this.writeNote}>
          Tambah
        </button>
        <button
          className="btn-Signout"
          onClick={() => {
            Firebase.auth().signOut();
            this.handleLogoutAccount();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default NoteForm;
