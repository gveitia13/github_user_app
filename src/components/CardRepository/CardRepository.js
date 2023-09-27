import React, {Component} from 'react';

export class CardRepository extends Component {

  render() {
    return (
      <div className='col-12 col-lg-6'>
        <div className="card h-100">
          <div className="card-body pb-0">
            <p className='mb-2'><a href={this.props.repo.html_url}
                                   className='user-social text-decoration-none'>{this.props.repo.name}</a>
              <span className='badge float-end bg-light rounded-pill text-black-50
                                border-dark border-2'>Public</span>
            </p>
            <p className='mb-2'>{this.props.repo.description}</p>
          </div>
          <div className="card-footer pt-0 bg-white border-0">
            <p className='mb-2'>
              <i className='bx bxs-circle'></i> {this.props.repo.language}&nbsp;&nbsp;
              {this.props.repo.stargazers_count > 0 &&
                <span><i className='bx bx-star'></i> {this.props.repo.stargazers_count}</span>}
              <small
                className='text-muted float-end'>Updated: {new Date(this.props.repo.updated_at).toDateString()}</small>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
