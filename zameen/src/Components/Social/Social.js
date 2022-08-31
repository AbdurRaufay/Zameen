import React from 'react'
import "./Style.css"
const Social = () => {
  return (
    <div className='container social'>
      <h5 className="header text-start mb-4">Zameen Social</h5>
        <div className="row">
        <div className="col-md-3 mb-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <span className="icon-img pe-1">
                <img
                  src="https://www.zameen.com/assets/iconNews_noinline.3e0fdc073b383d08d0e2ae70e3232380.svg"
                  alt=""
                />
              </span>
              <span className="title">News</span>
            </div>
            <div>
             <a href="#" style={{textDecoration: "none"}}> <span className="view-all">View All<i className="fa-solid fa-chevron-right ms-2"></i></span></a>
            </div>
          </div>
          <div className="container mt-4 ps-0">
            <a href="#">
            <div className="d-flex">
             
              <span>
                <img
                  src="https://media.zameen.com/thumbnails/173821342-400x300.webp"
                  width="60px"
                  alt=""
                />
              </span>
              <div className="d-block">
                <p className="ms-2 mb-0 country-desc">
                  Pakistan to explore new avenues for cooperation with Korea
                </p>
                <p className="ms-2 date">27 august 2022</p>
              </div>
            
            </div>
          </a>
          <a href="#">
            <div className="d-flex">
              <span>
                <img
                  src="https://media.zameen.com/thumbnails/173821341-400x300.webp"
                  width="60px"
                  alt=""
                />
              </span>
              <div className="d-block">
                <p className="ms-2 mb-0 country-desc">
                  PBIT forms joint working group for tourism promotion in Punjab
                </p>
                <p className="ms-2 date">27 august 2022</p>
              </div>
            </div>
          </a>
          </div>
        </div>

        {/* <!-- COLUMN 2--> */}
        <div className="col-md-6 mb-4">
          <div className="d-flex justify-content-between">
           
            <div className="d-flex">
              <span className="icon-img pe-1">
                <img
                  src="https://www.zameen.com/assets/iconBlogs_noinline.aeba15f148ecbbfe3973fd8f617765ce.svg"
                  alt=""
                />
              </span>
              <span className="title">Blogs</span>
            </div>
            <a href='#'>
            <div className="d-flex">
              <span className="view-all">View All<i className="fa-solid fa-chevron-right ms-2"></i></span>
            </div>
          </a>

          </div>
            
          <div className="d-flex text-start mt-3">
          
            <div className="me-2" style={{width: "18rem"}}>
            <a href='#' >
              <img
                src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/06/Gulistan-e-Jauhar-Cover-25-06.jpg"
                className="card-img-top img-style"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text img-desc">
                  Your Guide to Investing in Gulistan-e-Jauhar, Karachi
                </p>
              </div>
              </a>
            </div>
           
            <div className="me-2" style={{width: "18rem"}}>
                <a href='#'>
              <img
                src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/07/Tips-to-Reduce-Construction-Cost-Cover-20-07.jpg"
                className="card-img-top img-style"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text img-desc">
                  How to Save Money When Building Your Home
                </p>
              </div>
              </a>
            </div>
            
            <div className="" style={{width: "18rem"}}>
            <a href='#'>
              <img
                src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/08/cover-image-84.jpg"
                className="card-img-top img-style"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text img-desc">
                  Here is a Complete Guide on How to File Income Tax Returns in
                  Pakistan
                </p>
              </div>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- COLUMN 3 --> */}
        <div className="col-md-3 mb-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <span className="icon-img pe-1">
                <img
                  src="https://www.zameen.com/assets/iconForums_noinline.f1bc4e8ceef48d4043e928cec6b842e9.svg"
                  alt=""
                />
              </span>
              <span className="title">Forums</span>
            </div>
            <div className="d-flex">
                
              <span className="view-all"><a href='#'>View All<i className="fa-solid fa-chevron-right ms-2"></i></a></span>
            </div>
          </div>
          <div className="container mt-4 ps-0">
            <div className="bg-color mb-3">
                <a href='#'>
              <p className="property-name">Buying Property</p>
              <p className="property-desc">11k Topics | 2 New Topics</p>
              </a>
            </div>
            <div className="bg-color">
                <a href='#'>
              <p className="property-name">Renting Property</p>
              <p className="property-desc">556 Topics | 2 New Topics</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social