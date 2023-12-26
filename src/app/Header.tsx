import React, { Component } from 'react'

const styles = {
    container: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '20vh'
    }
}

export default class Header extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div className="header">
                    Hey
                </div>
            </div>
        )
    }
}