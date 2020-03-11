/**
 * SVG or PNG
 *
 * width : height = 21 : 15
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { getFlagByDollarCode } from 'react-native-svg-flagkit'

export default class Flag extends Component {
    static propTypes = {
        id: PropTypes.string,
        size: PropTypes.number,

        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.object,
        shape: PropTypes.string,

        onPress: PropTypes.func
    };

    static defaultProps = {
        size: 1,
        width: 210,
        height: 150
    };
    _renderIcon() {
        const { size, width, height, id, style, shape } = this.props
        const flag = getFlagByDollarCode(id)
        if (typeof flag === 'function') {
            const SvgComponent = flag
            return <SvgComponent width={width * size} height={height * size} shape={shape}/>
        }
        return (
            <Image
                style={{ width: width * size, height: height * size, ...style }}
                source={flag}
            />
        )
    }
    _onPress = () => {
        this.props.onPress && this.props.onPress(this.props.id)
    }
    render() {
        return (
            <TouchableOpacity
                disabled={!this.props.onPress}
                onPress={this._onPress}
            >
                { this._renderIcon() }
            </TouchableOpacity>
        )
    }
}

