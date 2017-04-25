import React from 'react';

export default class JobBoardTagItem extends React.Component {
  render() {
    return (
        <button type="button" className="btn btn-default tag_list">
            <a href="#">{this.props.tag}</a>
        </button>
    );
  }
}
