'use client';

import type { ReactNode } from 'react';
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';

import { fadeIn } from '@/shared/animations/fadeIn';

import CloseIcon from './images/close-icon.svg';
import {
    StyledCloseButton, StyledModal, StyledTopBlock, StyledWrapperModal,
} from './styled';

type Props = {
    children: ReactNode,
    topElement?: ReactNode,
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

    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#modal');
        setMounted(true);
    }, []);

    return (mounted && ref.current) ? (
        <StyledWrapperModal
            onMouseDown={onClose}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <StyledModal onMouseDown={handleStopPropagation}>
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
    ) : null;
};
