const Shimmer = () => {
        const shimmerCount =  15; // Adjust this number to create more shimmer elements
    
        return (
            <div className="shimmer-container">
                {Array.from({ length: shimmerCount }).map((_, index) => (
                    <div key={index} className="shimmer-wrapper">
                        <div className={`shimmer shimmer${index + 1}`}></div>
                    </div>
                ))}
            </div>
        );
    };
    
    export default Shimmer;
    