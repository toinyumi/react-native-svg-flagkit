import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path, ClipPath, Circle } from 'react-native-svg'

const SvgSa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SA_svg__b">
                <Stop stopColor="#128C4B" offset="0%" />
                <Stop stopColor="#0B6C38" offset="100%" />
            </LinearGradient>
            <ClipPath id="clip">
              <Circle cx="50%" cy={15 / 2} r={15 / 2}/>
            </ClipPath>
        </Defs>
        <G fill="none" fillRule="evenodd" clipPath={props.shape === 'circle' ? "url(#clip)" : undefined}>
            <Path fill="url(#SA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SA_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M5 9h8v-.992c0-.28.193-.412.453-.281L14 8v1h1.495c.279 0 .505.214.505.505V10c0 .552-.443 1-.999 1h-1.506a.503.503 0 0 1-.495-.5V10H6.503c-.278 0-.66-.156-.853-.35L5 9zM5 6.252c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138A.69.69 0 0 1 5 4.748v-.496C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536A.459.459 0 0 1 6.748 4h1.004C7.89 4 8 4.116 8 4.25c0 .138-.107.25-.252.25h-.496A.254.254 0 0 0 7 4.75c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51A.245.245 0 0 1 7.748 7h-.496A.249.249 0 0 1 7 6.748v-.496C7 6.113 7.116 6 7.25 6c.138 0 .25-.116.25-.25a.247.247 0 0 0-.252-.25h-.496a.255.255 0 0 0-.252.248v1.004A.251.251 0 0 1 6.25 7 .247.247 0 0 1 6 6.748v-.496A.254.254 0 0 0 5.75 6a.247.247 0 0 0-.25.252v.496c0 .139-.116.252-.25.252A.247.247 0 0 1 5 6.748v-.496zM13 6.252c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.69.69 0 0 1-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536A.459.459 0 0 1 14.748 4h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 0 0-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 0 1-.252.245h-.496A.249.249 0 0 1 15 6.748v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 0 0-.252-.25h-.496a.255.255 0 0 0-.252.248v1.004a.251.251 0 0 1-.25.248.247.247 0 0 1-.25-.252v-.496A.254.254 0 0 0 13.75 6a.247.247 0 0 0-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 0 1-.25-.252v-.496zM12 4.748c0 .139-.078.33-.18.433l-.14.138c-.1.1-.102.26 0 .362l.14.138c.1.1.18.288.18.433v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 11 6.748v-.496c0-.139-.046-.16-.116-.02l-.268.536a.459.459 0 0 1-.364.232H9.248A.251.251 0 0 1 9 6.75c0-.138.107-.25.252-.25h.496c.139 0 .252-.116.252-.25A.247.247 0 0 0 9.748 6h-.496A.247.247 0 0 1 9 5.755v-1.51C9 4.11 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.116.252-.25.252a.253.253 0 0 0-.25.25c0 .138.107.25.252.25h.496c.139 0 .252-.118.252-.248V4.248c0-.137.116-.248.25-.248.138 0 .25.107.25.252v.496c0 .139.116.252.25.252.138 0 .25-.107.25-.252v-.496c0-.139.116-.252.25-.252.138 0 .25.107.25.252v.496z"
                fill="url(#SA_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgSa
