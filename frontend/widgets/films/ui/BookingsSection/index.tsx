import type { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import type { QueryDefinition } from '@reduxjs/toolkit/query';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import React from 'react';

import { Colors } from '@/shared/config/constants/Colors';
import { poppinsFont } from '@/shared/lib/fonts';
import type {
    GetMyBookingsResponse,
} from '@/shared/model/store/rtk/typing/responses/GetMyBookingsResponse';
import { Loader } from '@/shared/ui/Loader';

import { StyledItems, StyledText, StyledTitle } from './styled';

type Props = {
    title: string,
    useData: UseQuery<QueryDefinition<{}, BaseQueryFn, 'seats', GetMyBookingsResponse, 'api'>>
    children: (bookings: GetMyBookingsResponse[0]) => React.ReactNode
};

export const BookingsSection = ({
    title,
    useData,
    children: render,
}: Props) => {
    const {
        data,
        isLoading,
        isSuccess,
    } = useData({});

    return (
        <div className={poppinsFont.className}>
            <StyledTitle>{title}</StyledTitle>
            {isLoading && <Loader color={Colors.ORANGE}/>}
            <StyledItems>
                {isSuccess && !data.length
                    ? <StyledText>Empty</StyledText> : data?.map((booking) => render(booking))}
            </StyledItems>
        </div>
    );
};
