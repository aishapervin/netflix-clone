
import React,{useEffect,useState} from 'react'
import "./Nav.css";




function Nav() {
const [show,handleShow]=useState(false);



useEffect(() => {
    (window.addEventListener("scroll",()=>{
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else
        handleShow(false);
    }))
    return () => {
        window.removeEventListener("scroll");
    }
}, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="data:image/png;base64,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"
            alt="Netflix logo"
            />

            <img
            className="nav__avatar"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC"
            alt="avatar"
            />
        </div>
    )
}

export default Nav
