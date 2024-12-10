import { styled } from 'solid-styled-components';
import { Text } from '../typography/text';
import { Image } from '../image';
import { media, mediaNotTouch, mediaTouch } from 'src/app/styles/media';
import { WalletImage } from './wallet-image';
import { BorderRadiusConfig } from 'src/app/models/border-radius-config';

const borders: BorderRadiusConfig = {
    m: '16px',
    s: '12px',
    none: '0'
};

const badgeBorders: BorderRadiusConfig = {
    m: '6px',
    s: '6px',
    none: '0'
};

export const WalletItemStyled = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${media('mobile')} {
        padding: 8px 0;
        width: 78px;
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`;

export const ImageStyled = styled(WalletImage)`
    width: 60px;
    height: 60px;
    border-radius: ${props => borders[props.theme!.borderRadius]};

    margin-bottom: 8px;
`;

export const BadgeStyled = styled(Image)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${props => badgeBorders[props.theme!.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`;

export const StyledText = styled(Text)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${media('mobile')} {
        max-width: 80px;
    }
`;

export const StyledSecondLine = styled(Text)<{ colorPrimary: boolean }>`
    font-weight: ${props => (props.colorPrimary ? '510' : '400')};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${props =>
        props.colorPrimary ? props.theme!.colors.text.primary : props.theme!.colors.text.secondary};

    ${media('mobile')} {
        max-width: 80px;
    }
`;
