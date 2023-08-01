'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useMemo, useState } from 'react';

import { poppinsFont } from '@/shared/fonts';
import { Badge } from '@/shared/ui/Badge';
import { Controls } from '@/shared/ui/VerticalSlider/Controls';
import {
    StyledBadges,
    StyledMainSlide,
    StyledSideSlides,
    StyledVerticalSlider,
} from '@/shared/ui/VerticalSlider/styled';

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
        <StyledVerticalSlider >
            <StyledMainSlide className={poppinsFont.className}>
                <Link href={slides[activeSlide].link}><Image src={slides[activeSlide].src} alt="" width={260} height={350}/></Link>
                <h3>{slides[activeSlide].title}</h3>
                <StyledBadges>
                    {slides[activeSlide].badges.map((text) => <Badge key={text}>{text}</Badge>)}
                </StyledBadges>
            </StyledMainSlide>

            <StyledSideSlides>
                {visibleSideSlidesIndexes.map((index) => (
                    <Image
                        key={slides[index].id}
                        src={slides[index].src}
                        alt=""
                        width={85}
                        height={125}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </StyledSideSlides>

            <Controls onPrev={handlePrev} onNext={handleNext}/>
        </StyledVerticalSlider>
    );
};
