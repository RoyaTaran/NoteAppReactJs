import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
        this.seveNote=this.seveNote.bind(this)
        this.setColorHandler=this.setColorHandler.bind(this)
        this.createNote=this.createNote.bind(this)
        this.emptyInput=this.emptyInput.bind(this)
        this.removeNoteHandler=this.removeNoteHandler.bind(this)
    }

    seveNote(event){
        this.setState({
            noteTitle:event.target.value
        })
    }

    setColorHandler(color){
       this.setState({
        inputColor:color
       })
    }

    createNote(){
        let {inputColor,noteTitle}=this.state
       let noteObject={
        id:this.state.notes.length+1,
        noteTitle,
        inputColor
       }
       if(this.state.noteTitle.length){
        this.setState({
            notes:[...this.state.notes,noteObject],
            noteTitle: ''
           })
       } 
   
    }

    emptyInput(){
        this.setState({
            noteTitle: '' 
        })
    }

    removeNoteHandler(noteId){
       let newNotes=this.state.notes
       let mainIndex=newNotes.findIndex(note=>note.id==noteId)
       newNotes.splice(mainIndex,1)
     this.setState({
        notes:newNotes
     })
    }
    

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper"> Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input onChange={this.seveNote} id="input-field"value={this.state.noteTitle} className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map((color,index)=><ColorBox onSetColor={this.setColorHandler} key={index} colorName={color}/>)}
                                            {/* <ColorBox /> */}
                                             
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button onClick={this.createNote} id="btn-save" type="button" className="btn btn-outline-info"><span className="fa fa-plus" ></span></button>
                                        <button onClick={this.emptyInput} id="btn-delete" type="button" className="btn btn-outline-danger"><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note=><Note onRemoveNote={this.removeNoteHandler} key={note.id} {...note}/>)}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
