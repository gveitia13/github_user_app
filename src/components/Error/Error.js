import {Component} from "react";

export class Error extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="alert alert-danger d-inline-block" role="alert">
          <i className='bx bxs-error'></i>&nbsp;

          <span>{this.props.message}</span>
        </div>
      </div>
    )
  }
}