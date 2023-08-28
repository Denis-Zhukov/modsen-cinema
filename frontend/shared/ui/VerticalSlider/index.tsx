'use client';

import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import { Urls } from '@/shared/api/Urls';

import { Controls } from './Controls';
import { MainSlide } from './MainSlide';
import {
    StyledControls,
    StyledSideSlides,
    StyledVerticalSlider,
} from './styled';

type Props = {
    slides: {
        id: number,
        preview: string,
        name: string
        badges: string[]
        slug: string,
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

    if (slides.length === 0) return null;
    return (
        <StyledVerticalSlider>

            <MainSlide
                link={`film/${slides[activeSlide].slug}`}
                title={slides[activeSlide].name}
                badges={slides[activeSlide].badges ?? []}
                image={`${Urls.BASE_URL}/${slides[activeSlide].preview}`}
            />

            <StyledSideSlides>
                {visibleSideSlidesIndexes.map((index, i) => (
                    <Image
                        key={`${slides[index].id}${i}`}
                        src={`${Urls.BASE_URL}/${slides[index]?.preview}`}
                        alt="slide"
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
