function Gallery(){
    return (
        <div id='gallery'>
            <div className ='gallery-item'>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="first-gallery" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className ='gallery-item'>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="second-gallery" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className ='gallery-item'>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="third-gallery" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className ='gallery-item'>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="fourth-gallery" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Gallery;