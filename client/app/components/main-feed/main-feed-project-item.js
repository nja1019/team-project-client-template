import React from 'react';

export default class MainFeedProjectItem extends React.Component {
  render() {
    return (
        <div className="panel-body job-post">
          <div className="job-title">
            <h3>
              <span className="glyphicon glyphicon-folder-open"></span>
              <a href='#'> {this.props.feedItemName}</a>
            </h3>
          </div>
          <div className="job-desc">
            <p>
               {this.props.postData}
            </p>
          </div>
          <div className="row">

          </div>
        </div>
    )
  }
}
