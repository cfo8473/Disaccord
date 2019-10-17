import React from 'react';

class CreateUserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON)
      }
    );
  }

  render() {
      
        console.log(this.state);
         const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
          <div className="modal-createServer">
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="file"
            onChange={this.handleFile.bind(this)} />
          <h3>Image preview </h3>
          {preview}
          <button>Upload user icon</button>
        </form>
      </div>
    );
  }
      
}

export default CreateUserIcon;