<template>
    <div class="quill-wrap">
      <!-- Toolbar -->
      <div id="toolbar">
        <span class="ql-formats">
          <select class="ql-header">
            <option value="1">Heading</option>
            <option value="2">Subheading</option>
            <option selected>Normal</option>
          </select>
          <select class="ql-font">
            <option selected>Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <select class="ql-align">
            <option selected></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-blockquote"></button>
          <button class="ql-link"></button>
          <button class="ql-image"></button>
          <button class="ql-code-block"></button>
          <button class="ql-video"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-clean"></button>
        </span>
      </div>
  
      <!-- Editor -->
      <div id="editor" class="quill-editor"></div>
    </div>
  </template>
  
  <script>
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  
  export default {
    name: 'QuillEditor',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    mounted() {
      // Initialize Quill editor
      this.editor = new Quill('#editor', {
        modules: {
          toolbar: '#toolbar'
        },
        theme: 'snow'
      });
  
      // Set initial content
      this.editor.clipboard.dangerouslyPasteHTML(this.content);
  
      // Emit content changes
      this.editor.on('text-change', () => {
        this.$emit('update:content', this.editor.root.innerHTML);
      });
    },
    beforeUnmount() {
      this.editor = null; // Cleanup editor instance
    }
  };
  </script>
  
  <style scoped>
  .quill-wrap {
    /* max-width: 900px; */
    width: 100%;
    /* margin: 20px auto; */
    border-radius: 10px;
  }
  
  .quill-wrap .ql-active {
    border: 1px solid #ccc !important;
    border-radius: 10px;
  }
  
  .quill-wrap button,
  .quill-wrap .ql-picker {
    margin-right: 2px;
  }
  
  .quill-editor {
    min-height: 100px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }
  .ql-toolbar.ql-snow {
    border-radius: 8px;
  }
  </style>
  