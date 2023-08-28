'use client';

import React from 'react';

import { Card } from '@/shared/ui/Card';

type Props = {
    author: string,
    body: string,
};

export const ReviewCard = ({
    author,
    body,
}: Props) => (
    <Card
        title="Review"
        subtitle={`From ${author}`}
        body={body}
    />
);
