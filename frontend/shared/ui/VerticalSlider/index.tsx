'use client';

import {
    ForwardedRef,
    useCallback, useMemo, useState,
} from 'react';

import { constFade, slideRight } from '@/shared/lib/animations';
import { nunitoSansFont } from '@/shared/lib/fonts';
import { SideSlides } from '@/shared/ui/VerticalSlider/subcomponents/SideSlides';

import { StyledText, StyledVerticalSlider } from './styled';
import { Controls } from './subcomponents/Controls';
import { MainSlide } from './subcomponents/MainSlide';

type Props = {
    slides: {
        id: number
        preview: string
        name: string
        badges: string[]
        url: string
    }[]
};

export const VerticalSlider = ({ slides }: Props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrev = useCallback(() => {
        setActiveSlide((prev) => {
            if ((prev + 1) >= slides.length) return 0;
            return prev + 1;
        });
    }, [slides]);

    const handleNext = useCallback(() => {
        setActiveSlide((prev) => {
            if ((prev - 1) < 0) return (slides.length - 1) < 0 ? 0 : slides.length - 1;
            return prev - 1;
        });
    }, [slides]);

    const visibleSideSlides = useMemo(() => {
        if (slides.length < 1) return [];
        const prevSlideIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
        const nextSlideIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
        return [slides[prevSlideIndex], slides[activeSlide], slides[nextSlideIndex]].map(({
            id,
            preview,
        }) => ({
            id,
            preview,
            active: id === slides[activeSlide].id,
        }));
    }, [activeSlide, slides]);

    const handleSetActiveSlide = useCallback((id: number) => () => {
        const index = slides.findIndex((slide) => slide.id === id);
        setActiveSlide(index);
    }, [slides]);

    if (slides.length === 0) {
        return (
            <StyledText
                variants={constFade}
                initial="hidden"
                whileInView="visible"
                className={nunitoSansFont.className}
            >No slides to display
            </StyledText>
        );
    }

    return (
        <StyledVerticalSlider
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
        >
            <MainSlide
                id={slides[activeSlide].id}
                link={slides[activeSlide].url}
                title={slides[activeSlide].name}
                badges={slides[activeSlide].badges}
                image={slides[activeSlide].preview}
            />

            <SideSlides slides={visibleSideSlides} setActiveSlide={handleSetActiveSlide}/>

            <Controls onPrev={handlePrev} onNext={handleNext}/>
        </StyledVerticalSlider>
    );
};
