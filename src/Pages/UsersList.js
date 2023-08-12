import React, {useState} from "react";
import Modal from "antd/es/modal/Modal";
import { Link } from "react-router-dom";



const UsersList = ({obj}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const popup = () =>{
    alert("booking confirmed")
  }
  return (
    <div>
          <h3 style={{textAlign:"center",backgroundColor: "dimgrey",
  color: "white",padding:"10px"}}><span style={{marginRight:"2%"}}><img height={50} style={{borderRadius:"5px"}}
   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAgVBMVEX/VQD/////SgD/UQD/RwD/QgD//fz+pIn/eFP/TgD+8u3/yrv+uqr+w7T+n4P/zcL/gV3/dUz/OwD/Xhj/uKP+qJD/XSf+9vP/6+X/18z/rJX+08b+pI//ZDD+5t7/3tX+hmX/mYD/ajr+iW7+sZv/kHD/Vxf+cUP/rJ3/a0L/f1Z+aLuMAAAEzklEQVRoge2bDW+zOAzHUzuhCxQGjAJtH/o2ym77/h/wEjsU6DjpdNqodMpfqkAk8S8vtkHQiJVVWKRvYhm9pUVITGF+QQKAC4GF0ABJwOQwk4thWZCFlhxksDDYogNDTpYHG3SyEuEzwAYdiuJJ5EKky3n1WJiKpeL4Uc/ienl5eXl5eXl5eXl5eXl5/a+EILU5aGUEs0UorX4cLNO2OEvU59horcdFutluLhrxaoti/U8W/qP0xb4p3QOs7fF1PGhsKnNpB/hCb1N/etCqtlYDNUOWGyKe9Yt9mRr8OJlfD8sZMsRU9A6/Q5attR7NkXVGr8k1/g5ZqGR3apWYIQtID6e4xN8iC6BgmiObcFISxZj8r19ropJlZwxrE499sJrAFWUnlWYrYGMV7mQD6zpQyGCK4zvZXC6FukcXQq7fSrSd+yb5FYVVVW/lLYrjiIIV4RzX5mJ4uHWUQC62KNGOrMq2NoWRfTOPH6Yo3oAjK305hVV4endfKeR1e7KGjsW37wcoixXrteinUl9Pq17HVPahEzsPiz5rLgsSEJjas0r15J1rF3Fe21e9oSB++GRyB5vm1MLMehasRrrBA/lQ38tSzeTQkavoXlTYHkdjQ7vJqDHru9T3FbAMJ5eCK07Jo7KjnJLHzT4RtquJNpNEwLOzN5k5dGSXleISxB86O+SP5ATBVU/hgWyaNWyzUB0dwzNAxsvXDPONXLjNTR8anm3JQ95Yz1WMFmpKvilTvaTTVk3JcW4CTB1pPnLKP1VjPQdphTbDfMON2pW2LypicjrqniZz71PykdqzLx3yKZksAXU4xAO1UlSb3Ok03MrYv3jpeVUidSHrXCeveUqmvk3LBTSi05RcqcF5qis1vpElfSar3UCmfP9K9Z1ZnmHXu5zWp52SYyb/NUfOidwQ+ZOWjT/U6C97Xnc4S3ZjXo/JtGL7WfLsmJlM9+qwYTKPOZ0dM8+2ipnMS+/I5HUXNTPbvM7x1MMCHgNNWw3Ubf4SCAn1c/BtNlVZd0II2cPYVT70EO3NlBzajqKkorWcetgV753a5RHPytDP18G38UrtX3OAnG/xEXBXa1QgOTzqx3gubHVy3CDTU/Ixl5DT+FYJz94qsbUvdPo1ekxjzOq43/KJJXODarNuOVvc9GMm2W1brr5TjzksbLcHPilR1q72mi8dx+mTvZ3V522YZFsbkN+zJyvI8Hv2dFqD87RB18ktw+VKo9PGkRFfx2B8vFedwr7s0t+r7h52uDezEytv1WCoSh8e1OWWS3cdZRUbMghJf9M43oDJQWCKDNkeP3gW67OtmwZGllyZYyU5Z1d/mAIfB8eu4ubbt19ZXtpinyr2mT0HAaTrtmiTFwmcGjKjK2LzYo+AN9PirMn9O1v0gYKOGcp0X7SXrl9RVI2pW2zfS/X4UGLjSYMExDfqXeYqIJiLuq+NpP7E/llBwqRsOOK4nWDr0ytOXecep3jI1WL/eTC3ySIV5vksPfUeuRzZDLSunR8c1VLg/tHA6dgt9w8AFKOA2ywINuh3erI2j9brZrmpZrTMlQSVqwX/QeTl5eXl5eXl5eXl5eXl5eU1o+ftx3jSHhSdPnHfzfP2Gj1vf9UT95Q9YR+d5H10S+8dxGHv4Oo5+yX/BnIVRQbEwAJ6AAAAAElFTkSuQmCC"/>
  </span>welcome to room booking <span><Link to={"/"}>LogOut</Link></span></h3>
      
      {obj.map((data)=>{
        return(
            <div className="container content ">
        <div className="border mt-4 p-4">
          
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    data.img
                       }
                  alt="room pic"
                  className="img-thumbnail"
                  height={300}
                  width={1500}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="ms-4">
                <h4>
                  Name :{data.name}
                </h4>
                <h4>
                  Place :{" "}
                  {data.place}
                </h4>
                <h4>
                  Type :{" "}
                  {data.type}
                </h4>
                <h4>
                  Price :{" "}
                  {data.price}
                </h4>
                <p>
                  Accepted Terms And Conditions :{" "}
                  {data.checked ? "YES" : "No"}
                </p>
                <button className="btn btn-primary" onClick={showModal}>Book now</button><br/><br/>
                <button className="btn btn-primary"onClick={()=>popup()}>Order status</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
      })}
         <Modal title="give your details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" placeholder="name" required/><br/>
        <input type="email" placeholder="email" required/><br/>
        <input type="number"placeholder="ph number" required/><br/>
        
      </Modal>
    </div>
  );
};

export default UsersList;
