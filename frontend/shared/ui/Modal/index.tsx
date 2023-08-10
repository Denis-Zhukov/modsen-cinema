import type { ReactNode } from 'react';
import React, { useCallback } from 'react';

import CloseIcon from './images/close-icon.svg';
import {
    StyledCloseButton, StyledModal, StyledTopBlock, StyledWrapperModal,
} from './styled';

type Props = {
    children: ReactNode,
    topElement?: ReactNode
    onClose: () => void
};

export const Modal = ({
    children,
    topElement,
    onClose,
}: Props) => {
    const handleStopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    return (
        <StyledWrapperModal onClick={onClose}>
            <StyledModal onClick={handleStopPropagation}>
                <StyledTopBlock>
                    <div>{topElement}</div>
                    <StyledCloseButton
                        src={CloseIcon}
                        alt="close"
                        width={50}
                        height={50}
                        onClick={onClose}
                    />
                </StyledTopBlock>
                {children}
            </StyledModal>
        </StyledWrapperModal>
    );
};
