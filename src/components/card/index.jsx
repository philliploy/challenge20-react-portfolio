function Card({project}){
    console.log(project)
    return<>
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="feature-item bg-light rounded p-4">
                            <img style={{width:"100%"}} src={project.image} />
                            {/* <div class="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i class="fa fa-eye text-white fs-4"></i>
                            </div> */}
                            <h5 class="mb-3">{project.title}</h5>
                          <a href={project.liveLink} target="_blank">
                            <p class="m-0">Live Link </p>

                            </a>
                        </div>
                    </div>
    </>
}

export default Card