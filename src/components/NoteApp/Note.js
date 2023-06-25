import React, { Component } from "react";

export default class Note extends Component {
  removeNote(id) {
    this.props.onRemoveNote(id);
  }

  render() {
    return (
      <div
        onClick={this.removeNote.bind(this, this.props.id)}
        className="card shadow-sm rounded"
        style={{ backgroundColor: this.props.inputColor }}
      >
        <p className="card-text p-3">{this.props.noteTitle}</p>
      </div>
    );
  }
}
