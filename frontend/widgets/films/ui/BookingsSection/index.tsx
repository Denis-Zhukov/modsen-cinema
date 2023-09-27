import type { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import type { QueryDefinition } from '@reduxjs/toolkit/query';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import React, { useEffect } from 'react';

import { Colors } from '@/shared/config/constants/Colors';
import { Notice } from '@/shared/config/constants/Notice';
import { slideLeft } from '@/shared/lib/animations';
import { poppinsFont } from '@/shared/lib/fonts';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import { toastError } from '@/shared/lib/utils/ToastUtils';
import type {
    GetMyBookingsResponse,
} from '@/shared/model/store/rtk/typing/responses/GetMyBookingsResponse';
import { Loader } from '@/shared/ui/Loader';

import { StyledItems, StyledText, StyledTitle } from './styled';

type Props = {
    title: string,
    useData: UseQuery<QueryDefinition<{}, BaseQueryFn, 'seats', GetMyBookingsResponse, 'api'>>
    children: (bookings: GetMyBookingsResponse[0], i: number) => React.ReactNode
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
        error,
    } = useData({});

    useEffect(() => {
        if (error && ErrorUtils.isTypedError(error)) {
            toastError(error.data.message);
        } else if (error) toastError(Notice.UNEXPECTED_ERROR);
    }, [error]);

    return (
        <div className={poppinsFont.className}>
            <StyledTitle
                variants={slideLeft}
                initial="hidden"
                animate="visible"
            >{title}
            </StyledTitle>
            {isLoading && <Loader color={Colors.ORANGE}/>}
            <StyledItems>
                {isSuccess && !data.length
                    ? (
                        <StyledText
                            variants={slideLeft}
                            initial="hidden"
                            animate="visible"
                        >Empty
                        </StyledText>
                    ) : data?.map((booking, i) => render(booking, i))}
            </StyledItems>
        </div>
    );
};
