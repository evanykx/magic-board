import React, { Component } from 'react';

interface PetProps {
    name: string
}

export class Pet extends Component<PetProps, {}> {
    render() {
        return (
            <div>
                hi, {this.props.name}
            </div>
        )
    }
}