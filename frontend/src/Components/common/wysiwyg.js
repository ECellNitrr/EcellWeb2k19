import React, { Component } from 'react'
import './wysiwyg.scss'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';



export default class summernote extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  set_value = html => {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.setState({editorState})
    }
  }

  get_value = () => draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))

  check_input =()=>{
    return this.state.editorState.getCurrentContent().hasText()
  }


  render() {
    return (
      <div className="wysiwyg">
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={editorState => this.setState({ editorState })}
        />
      </div>
    )
  }
}
