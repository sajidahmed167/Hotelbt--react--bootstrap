const About = () => {
    return (
        <div>
            <p className="placeholder"></p>
            <section>
                <div className="container w-100 mb-5">
                    <div id="contact" className="m-lg-5 m-2 gridaboutbody">
                        <div>
                            <h1 className="mb-5"><span className="text-primary1">About</span> Hotel BT</h1>
                            <p className="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nisi mollitia maiores totam ratione id in iste voluptatem doloremque incidunt et sequi, cum corrupti placeat soluta laborum! Repellendus, id doloremque.</p>
                            <p className="p1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit architecto unde placeat hic nulla laborum corrupti debitis necessitatibus ducimus atque!</p>
                        </div>
                        <div className="">
                            <img src="img/photo-2.jpg" className="img2 center" alt="hotel" /> 
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" style={{backgroundImage: `url(${process.env.PUBLIC_URL}img/test-bg.jpg)`}}>
                <div className="container">
                    <h1 className="mb-5 headingabout">
                        What Our Guests Say
                    </h1>
                    <div className="gridaboutbody2 testimonial bg1-primary">
                        <img src="./img/person-1.jpg" className="testimonialimg center" alt="Samantha" />
                        <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit.  quod quae aperiam expedita asperiores necessitatibus repellat, quos nihil ipsum cum quia nobis iure eos cumque voluptas eum sint deleniti. quos voluptatem sit excepturi in delectus odit quaerat eius. aliquam iure ea ab cum laboriosam ratione quos voluptatem sit excepturi in delectus odit quaerat eius</p>
                    </div>
                    <div className="gridaboutbody2 testimonial bg1-primary">
                        <img src="./img/person-2.jpg" className="testimonialimg center" alt="Jen" />
                        <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. olor sit amet consectetur adipisicing elit. Quo libero harum dolorem eos ipsam vitae reprehenderit deleniti ipsa facere porro, nisi reiciendis! Consequuntur sit tempore culpa dicta tempora soluta asperiores? aliquam iure ea ab cum laboriosam ratione quos voluptatem sit excepturi in delectus odit quaerat eius</p>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default About
