import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path, ClipPath, Circle } from 'react-native-svg'

const SvgAt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AT_svg__b">
                <Stop stopColor="#F64253" offset="0%" />
                <Stop stopColor="#EA2D3F" offset="100%" />
            </LinearGradient>
            <ClipPath id="clip">
              <Circle cx="50%" cy={15 / 2} r={15 / 2}/>
            </ClipPath>
        </Defs>
        <G fill="none" fillRule="evenodd" clipPath={props.shape === 'circle' ? "url(#clip)" : undefined}>
            <Path fill="url(#AT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AT_svg__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
            <Path fill="url(#AT_svg__a)" d="M0 5h21v5H0z" />
        </G>
    </Svg>
)

export default SvgAt
