import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AL_svg__b">
                <Stop stopColor="#EE343C" offset="0%" />
                <Stop stopColor="#E2222A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AL_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <ClipPath id="clip">
              <Circle cx="50%" cy={15 / 2} r={15 / 2}/>
            </ClipPath>
        </Defs>
        <G fill="none" fillRule="evenodd" clipPath={this.props.shape === 'circle' ? "url(#clip)" : undefined}>
            <Path fill="url(#AL_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AL_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M9.348 3.348l.804.804a.496.496 0 0 0 .696 0l.804-.804a.631.631 0 0 1 .758-.075L13.5 4l-1.548.774a.892.892 0 0 0-.452.726c0 .268.224.5.5.5.268 0 .699-.1.944-.222l1.112-.556a.734.734 0 0 1 .794.128l.3.3c.194.194.151.45-.094.572l-1.112.556c-.245.122-.26.344-.034.495l.68.454c.226.15.194.316-.072.37l-1.536.307c-.269.053-.3.232-.077.4l1.19.892c.22.166.181.304-.095.304-.268 0-.717-.054-.984-.121l-1.032-.258c-.27-.067-.362.063-.21.289l.453.68c.15.226.046.41-.235.41h-.484a.74.74 0 0 0-.666.475l-.184.55c-.088.266-.229.263-.316 0l-.184-.55A.741.741 0 0 0 9.492 11h-.484c-.287 0-.386-.184-.235-.41l.454-.68c.15-.226.056-.356-.211-.289l-1.032.258A4.85 4.85 0 0 1 7 10c-.268 0-.319-.136-.095-.304l1.19-.892c.22-.166.19-.347-.077-.4l-1.536-.308c-.269-.053-.298-.218-.072-.37l.68-.453c.226-.15.211-.372-.034-.495l-1.112-.556c-.245-.122-.287-.379-.094-.572l.3-.3a.733.733 0 0 1 .794-.128l1.112.556C8.301 5.9 8.724 6 9 6c.268 0 .5-.224.5-.5 0-.268-.199-.6-.444-.722l-1.112-.556c-.245-.122-.26-.344-.034-.495l.68-.454a.626.626 0 0 1 .758.075z"
                fill="url(#AL_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgAl
