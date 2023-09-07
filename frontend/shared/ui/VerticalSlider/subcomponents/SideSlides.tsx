import { motion } from 'framer-motion';
import { useId } from 'react';

import { fade } from '@/shared/lib/animations/fade';

import { StyledSideSlides } from '../styled';

type Props = {
    slides: {
        id: number,
        preview: string,
        active: boolean
    }[]
    setActiveSlide: (id: number) => () => void
};

export const SideSlides = ({
    slides,
    setActiveSlide,
}: Props) => (
    <StyledSideSlides>
        {slides.map((slide) => (
            <motion.img
                layout
                variants={fade}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={slide.id}
                src={slide.preview}
                alt="slide"
                width={slide.active ? 140 : 85}
                height={slide.active ? 180 : 125}
                onClick={setActiveSlide(slide.id)}
            />
        ))}
    </StyledSideSlides>
);
