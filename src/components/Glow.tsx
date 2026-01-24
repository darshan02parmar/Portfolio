const Glow = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <svg width="0" height="0">
                <filter id="glow">
                    <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="glow_lite">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </svg>
            <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-purple-400/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-400/20 rounded-full blur-[120px]" />
        </div>
    );
};

export default Glow;
