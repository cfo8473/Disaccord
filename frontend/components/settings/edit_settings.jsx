import React from 'react';
import { Link } from 'react-router-dom';
import {merge} from 'lodash'

class EditSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null,
      userInfo: {username: this.props.username, email: this.props.email},
      iconInfo: {membership_type: "User"}
    };
    this.logoutModal = this.logoutModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.closeWindow = this.closeWindow.bind(this);

    this.close = false;

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  closeWindow() {
    this.close = true;

    setTimeout(() => {
      this.props.closeModal();
      this.close = false;
    }, 150)

    this.forceUpdate();
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeWindow();
    }
  }

  logoutModal(e) {
    this.props.logout();
    this.props.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState(({ userInfo: { [field]: e.target.value } }))
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
    formData.append('user[id]', this.props.id)
    if (!this.state.userInfo.username) {
      formData.append('user[username]', this.props.username)
    } else {
      formData.append('user[username]', this.state.userInfo.username)
    }
    if (!this.state.userInfo.email) {
      formData.append('user[email]', this.props.email)
    } else {
      formData.append('user[email]', this.state.userInfo.email)
    }
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    this.props.editUser(formData);
    this.props.closeModal()
  }

  render() {

    const menuBar = (
      <div className="menu-contents" >
        <h5 className="settings-input-title-text">USER SETTINGS</h5>
        <h2 className="settings-selected-menu-text">My Account</h2>
        <h2><a href="https://cfong.io">Portfolio</a></h2>
        <h2><a href="https://github.com/cfo8473">Github</a></h2>
        <h2><a href="https://www.linkedin.com/in/chris-fong-33b6b3197/">LinkedIn</a></h2>
        <h2><a href="https://angel.co/chris-fong-7">AngelList</a></h2 >
      </div >
    )

    const flavorText = (
      <div className="settings-flavor-text-edit">
        <h1 className="settings-two-factor-edit">TWO-FACTOR-AUTHENTICATION</h1>
        <br></br>
        <h2>...does not exist on this server so heres a lorem ipsum block.</h2>
        <br></br>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    )


    const preview = this.props.photo ? 
      <img className="settings-icon-preview" src={this.props.photo} /> :
      <div className="settings-icon-preview">
        <div className="messages-icon-picture-default"
        />

      </div>;

    return (
      <div ref={this.setWrapperRef} className={`modal-settings` + (this.close ? `-reverse` : ``)}>
        <nav className="menu-bar">
          {menuBar}
          <Link className="settings-logout" to="/" onClick={this.logoutModal}>Log Out</Link>
        </nav>
        <div className="modal-settings-edit-user-info">
          {flavorText}
          <span className="settings-account-header-text">My account</span>
          <div className="settings-edit-input-fields">
          
          <form onSubmit={this.handleSubmit.bind(this)} >
              <div className="settings-form">
                
                <div className="settings-user-icon">
                    <div className="settings-icon-edit-preview" >
                      {preview}
                    <input className="settings-icon-edit-preview-upload" type="file"
                      onChange={this.handleFile.bind(this)} />
                    </div>
                  </div>
                <input type="file"
                  onChange={this.handleFile.bind(this)} className="settings-icon-upload-button"/>
              </div>
              
              <div className="settings-edit-input-fields-float">
                <h5 className="settings-input-title-text">USERNAME <span className="settings-input-title-text-star">*</span></h5>
                <input className="settings-input" type="text" placeholder={this.state.userInfo.username} value={this.state.userInfo.username} onChange={this.update('username')} />

                <h5 className="settings-input-title-text">EMAIL <span className="settings-input-title-text-star">*</span></h5>
                <input className="settings-input" type="text" placeholder={this.state.userInfo.email} value={this.state.userInfo.email} onChange={this.update('email')} />
{/* 
                <h5 className="settings-input-title-text">CURRENT PASSWORD <span className="settings-input-title-text-star">*</span></h5>
                <input className="settings-input" type="text" defaultValue="test"/> */}
              </div>
          </form>
            <span className="settings-icon-edit-preview-dimensions-text">Minimum Size: <strong>128x128</strong></span>
            
          </div>
          
          <div className="modal-settings-user-info-text-edit">

            

          </div>
          {/* <button className="settings-delete-button" onClick={this.props.openServerModal} type="submit" value="Edit">
            Delete Account
          </button>

          <button className="settings-disable-button" onClick={this.props.openServerModal} type="submit" value="Edit">
            Disable Account
          </button> */}

          <span className="settings-edit-cancel-text" onClick={this.props.openSettingsModal} type="submit" value="Edit">
            Cancel
          </span>
          <button className="settings-submit-button" onClick={this.handleSubmit} type="submit" value="Edit" >
            Save
          </button>
          <div className="settings-edit-bar"></div>
        </div>
        

        <p className="settings-exit" onClick={() => this.closeWindow()}>X</p>

        

      </div>
    )
  }
}

export default EditSettings;