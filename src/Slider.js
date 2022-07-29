import React, {useState} from "react"

function Slider () {
 
    const slides=[
        {url: "https://blogs.iadb.org/integration-trade/wp-content/uploads/sites/13/2021/12/Telemedicina_Blog_BLOG_HEADER.png", title: "Telemedicine"},
        {url: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/transportation-technology-pillar-page-overview_0.jpeg", title: "Transport"},
        {url: "https://www.asme.org/getmedia/fc2f6d70-790d-42e0-b228-c2955ec9331a/062221_navysetssail_header02.jpg?width=970&height=720&ext=.jpg", title: "Mechanical Engineering"},
        {url: "https://www.analyticsinsight.net/wp-content/uploads/2021/12/The-Future-of-Robotics-Its-Implications-in-2021-and-Beyond.jpg", title: "Robotics"},
        {url: "https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg", title: "Cybersecurity"},
        {url: "https://kenyanwallstreet.com/wp-content/uploads/2022/03/Blockchain.jpeg", title: "Blockchain"},
        {url: "https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2021-12/gps_on_phone.jpg?itok=oCW2o0MN", title: "GPS"},
        {url: "http://ecotechschool.com/wp-content/uploads/2022/04/10081_00_N57_web.jpg", title: "Surgical"},
        {url: "https://d1jbg4la8qhw2x.cloudfront.net/wp-content/uploads/2020/02/Skills.-ICT.-IOT..jpg", title: "Communication"}
    ]

    return (
        <div>
            <div className="left">Prev</div>
            <div className="right">Next</div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Slider