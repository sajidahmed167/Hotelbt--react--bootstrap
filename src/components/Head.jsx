import {Link} from "react-router-dom"

const Head = () => {
    return (
        <div>
            <p className="placeholder2"></p>
            <section id="" className="">
                <div id="showcase" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/showcase.jpg)`}} className="w-100 d-grid justify-content-center align-items-center">
                    <div className="textalign">
                        <h1 className="headingabout m-4 headingfont"><span className="text-primary1">Enjoy</span> Your Stay</h1>
                        <p className="headingabout p2 m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque hic ratione, a molestiae cum voluptates.</p>
                        <Link to="/about" className="btn white p-3 m-4 hov p2">About our hotel</Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid g-0">
                    <div className="row g-0">
                    <div className="col-sm dispnone g-0">
                        <img src="./img/e38feb8a_z.jpg" className="img3" alt="" />
                    </div>
                    <div className="col-sm d-grid align-items-center white g-0">
                        <div className="textalign">
                            <h2 className="m-4"><span className="text-primary1">The History</span> Of our Hotel</h2>
                            <p className="p1 m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque hic ratione, a molestiae cum voluptates.</p>
                            <Link to="/about" className="btn white2bg p-3 hov m-4 p2">Read more</Link>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Head
