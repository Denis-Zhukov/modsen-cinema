'use client';

import React from 'react';

import { Card } from '@/shared/ui/Card';

type Props = {
    author: string,
    body: string,
    readMorePath: string
};

export const ReviewCard = ({
    author,
    body,
    readMorePath,
}: Props) => (
    <Card
        title="Review"
        subtitle={`From ${author}`}
        body={body}
        readMoreHref={readMorePath}
    />
);
