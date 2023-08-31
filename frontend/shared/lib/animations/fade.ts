export const constFade = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const fade = {
    hidden: (custom: number = 1) => ({
        opacity: 0,
        transition: { delay: custom * 0.2 },
    }),
    visible: (custom: number = 1) => ({
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};
