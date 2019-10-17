import React from 'react';
import { Link } from 'react-router-dom';
import EditSettingsContainer from './edit_settings_container'

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null
    };
    this.logoutModal = this.logoutModal.bind(this);
  }

  logoutModal(e) {
    this.props.logout();
    this.props.closeModal();
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
    formData.append('post[title]', this.state.title);
    if (this.state.photoFile) {

      formData.append('post[photo]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/posts',
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

  render () {

    const menuBar = (
      <div className="menu-contents" >
        <h5 className="settings-input-title-text">USER SETTINGS</h5>
        <h2 className="settings-selected-menu-text">My Account</h2>
        <h2>Placeholder </h2>
        <h2>Placeholder </h2>
        <h2>Placeholder </h2>
        <h2>Placeholder </h2>
      </div >
    )

    const flavorText = (
      <div className="settings-flavor-text">
        <h1 className="settings-two-factor">TWO-FACTOR-AUTHENTICATION</h1>
        <br></br>
        <h2>...does not exist on this server so heres a lorem ipsum block.</h2>
          <br></br>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    )

    const preview = this.props.photo ? <img className="settings-icon-preview" src={this.props.photo} /> : null;

    return (
      <div className="modal-settings">
        
        <nav className="menu-bar">
          {menuBar}
          <Link className="settings-logout" to="/" onClick={this.logoutModal}>Log Out</Link>
        </nav>
        
        <div className="modal-settings-user-info">
          {flavorText}
          <span className="settings-account-header-text">My account</span>
          <div className="settings-form">
           
            <div className="settings-user-icon">
              <div className="settings-icon-edit-preview">
                {preview}
              </div>
            </div>
            
          </div>
          <div className="modal-settings-user-info-text">

              
             

            <h5 className="settings-input-title-text">USERNAME</h5>
            <h6 className="settings-info-text">{this.props.username}#{this.props.id}</h6>

            <h5 className="settings-input-title-text">EMAIL</h5>
            <h6 className="settings-info-text">{this.props.email} </h6>
          </div>

          <button className="settings-edit-button" onClick={this.props.openServerModal} type="submit" value="Edit">
            Edit

          </button>
        </div>
        

         <p className="settings-exit" onClick={this.props.closeModal}>X</p>

      </div>
    )
  }
}

export default Settings;