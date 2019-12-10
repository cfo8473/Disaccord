import React from 'react'
import { Link, withRouter } from "react-router-dom"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LoadingContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
    // debugger
   return (
     <div className="modal-serverLoading">
    <div className="loading-icon">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
    <div className="loading-text">
      LOADING
    </div>
    <div className="loading-text-sub">
      Loading assets and making an excuse for the lack of a proper spinny logo
    </div>
     </div>
   );
  }

}

export default withRouter(LoadingContainer);