import React from "react"

export default () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.bajalibros.com/qlEnFHpx-d7e1qjCFYH2RL6J8rg=/fit-in/1024x300/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/7c717ba93c63fc8ee03309801e2a1500.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.bajalibros.com/jmsmWt3mi2WyuMneqZv58OeQNys=/fit-in/1024x300/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/62f4821555bd28a156f7dcdda1632716.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.bajalibros.com/LMBhDgXgv7viEUCJQnA-0YHXAfI=/fit-in/1024x300/filters:fill(f8f8f8):quality(90)/d2d6tho5fth6q4.cloudfront.net/d13f4907514e2ab30758486a173b39e5.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};
