import React from 'react'
import { withRouter } from "react-router-dom"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LoadingContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let serverId = this.props.location.pathname.split("/")[2];
   return (
     <div className="modal-serverLoading">
    <div className="loading-icon">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
    <div className="loading-text">
      LOADING
    </div>
    <div className="loading-text-sub">
      Loading assets
    </div>
     </div>
   );
  }

}

export default withRouter(LoadingContainer);