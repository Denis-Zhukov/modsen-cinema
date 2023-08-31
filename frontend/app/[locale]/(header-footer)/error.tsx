'use client';

const Error = ({
    reset,
}: {
    reset: () => void
}) => (
    <div>
        <h2>Something went wrong!</h2>
        <button
            type="button"
            onClick={reset}
        >
            Try again
        </button>
    </div>
);

export default Error;
