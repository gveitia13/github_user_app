import React, {Component} from 'react';

export class CardRepository extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='col-6'>
                <p>{this.props.repo.name}</p>
            </div>
        )
    }
}
