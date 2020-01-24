import React from 'react';
import { Link, Redirect} from 'react-router-dom';
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

    this.closeWindow = this.closeWindow.bind(this);
    
    this.close = false;

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

  }

  logoutModal(e) {
    this.props.closeModal();
    
    this.props.logout();
    
    
    
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


  render () {
    $('.button').click(function () {
      var buttonId = $(this).attr('id');
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
    })

    $('#modal-container').click(function () {
      $(this).addClass('out');
      $('body').removeClass('modal-active');
    });

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
      <div className="settings-flavor-text">
        <h1 className="settings-two-factor">TWO-FACTOR-AUTHENTICATION</h1>
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
          <Link className="settings-logout" to="#" onClick={this.logoutModal}>Log Out</Link>
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

          <button className="settings-edit-button button" id="four" onClick={this.props.openServerModal} type="submit" value="Edit">
            Edit

          </button>
        </div>
        

         <p className="settings-exit" onClick={() => this.closeWindow()}>X</p>

      </div>
    )
  }
}

export default Settings;