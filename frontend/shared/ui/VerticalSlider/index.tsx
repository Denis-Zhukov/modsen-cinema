import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import { Controls } from './Controls';
import { MainSlide } from './MainSlide';
import {
    StyledSideSlides,
    StyledVerticalSlider,
} from './styled';

type Props = {
    slides: {
        id: number,
        src: string,
        title: string
        badges: string[]
        link: string,
    }[]
};

export const VerticalSlider = ({ slides }: Props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrev = useCallback(() => {
        setActiveSlide((prev) => {
            if ((prev - 1) < 0) return (slides.length - 1) < 0 ? 0 : slides.length - 1;
            return prev - 1;
        });
    }, [slides.length]);

    const handleNext = useCallback(() => {
        setActiveSlide((prev) => {
            if ((prev + 1) >= slides.length) return 0;
            return prev + 1;
        });
    }, [slides.length]);

    const visibleSideSlidesIndexes = useMemo(() => {
        const prevSlide = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
        const nextSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
        return [prevSlide, activeSlide, nextSlide];
    }, [activeSlide, slides]);

    return (
        <StyledVerticalSlider>
            <MainSlide
                link={slides[activeSlide].link}
                title={slides[activeSlide].title}
                badges={slides[activeSlide].badges}
                image={slides[activeSlide].src}
            />

            <StyledSideSlides>
                {visibleSideSlidesIndexes.map((index) => (
                    <Image
                        key={slides[index].id}
                        src={slides[index].src}
                        alt=""
                        width={index === activeSlide ? 137 : 84}
                        height={index === activeSlide ? 182 : 124}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </StyledSideSlides>

            <Controls onPrev={handlePrev} onNext={handleNext}/>
        </StyledVerticalSlider>
    );
};
