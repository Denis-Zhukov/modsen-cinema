import type { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import type { QueryDefinition } from '@reduxjs/toolkit/query';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import React from 'react';

import { poppinsFont } from '@/shared/fonts';
import type { GetMyBookingsResponse } from '@/shared/typing/api/responses/GetMyBookingsResponse';
import { Loader } from '@/shared/ui/Loader';
import { StyledItems, StyledText, StyledTitle } from '@/widgets/ui/BookingsSection/styled';

type Props = {
    title: string,
    useData: UseQuery<QueryDefinition<{}, BaseQueryFn, 'seats', GetMyBookingsResponse, 'api'>>
    children: (bookings: GetMyBookingsResponse[0]) => React.ReactNode
};

export const BookingsSection = ({ title, useData, children: render }: Props) => {
    const { data, isLoading, isSuccess } = useData({});

    return (
        <div className={poppinsFont.className}>
            <StyledTitle>{title}</StyledTitle>
            {isLoading && <Loader/>}
            <StyledItems>
                {isSuccess && !data.length
                    ? <StyledText>Empty</StyledText> : data?.map((booking) => render(booking))}
            </StyledItems>
        </div>
    );
};
