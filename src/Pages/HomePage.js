import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const HomePage = ({addRoom}) => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const [name, setname] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [img, setimg] = useState();
  const [checked, setchecked] = useState(false);

  //covert img
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  //handle img
  const handleImg = (e) => {
   const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
   setimg(localStorage["img"])
  };

  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name Is Required");
    } else if (place === "") {
      toast.error("Email Is Required");
    } else if (price === "") {
      toast.error("Password is Required");
    } else {
      const myRoom = {name,place,price,type,checked,img}
      addRoom(myRoom)
    
    }
    setname("");
    setPlace("");
    setPrice("");
    setType("");
    setchecked("");
    setimg("");
  };

  return (
    <>
  <h3 style={{textAlign:"center",backgroundColor: "dimgrey",
  color: "white",padding:"10px"}}><span style={{marginRight:"2%"}}><img height={50} style={{borderRadius:"5px"}}
   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAgVBMVEX/VQD/////SgD/UQD/RwD/QgD//fz+pIn/eFP/TgD+8u3/yrv+uqr+w7T+n4P/zcL/gV3/dUz/OwD/Xhj/uKP+qJD/XSf+9vP/6+X/18z/rJX+08b+pI//ZDD+5t7/3tX+hmX/mYD/ajr+iW7+sZv/kHD/Vxf+cUP/rJ3/a0L/f1Z+aLuMAAAEzklEQVRoge2bDW+zOAzHUzuhCxQGjAJtH/o2ym77/h/wEjsU6DjpdNqodMpfqkAk8S8vtkHQiJVVWKRvYhm9pUVITGF+QQKAC4GF0ABJwOQwk4thWZCFlhxksDDYogNDTpYHG3SyEuEzwAYdiuJJ5EKky3n1WJiKpeL4Uc/ienl5eXl5eXl5eXl5eXl5/a+EILU5aGUEs0UorX4cLNO2OEvU59horcdFutluLhrxaoti/U8W/qP0xb4p3QOs7fF1PGhsKnNpB/hCb1N/etCqtlYDNUOWGyKe9Yt9mRr8OJlfD8sZMsRU9A6/Q5attR7NkXVGr8k1/g5ZqGR3apWYIQtID6e4xN8iC6BgmiObcFISxZj8r19ropJlZwxrE499sJrAFWUnlWYrYGMV7mQD6zpQyGCK4zvZXC6FukcXQq7fSrSd+yb5FYVVVW/lLYrjiIIV4RzX5mJ4uHWUQC62KNGOrMq2NoWRfTOPH6Yo3oAjK305hVV4endfKeR1e7KGjsW37wcoixXrteinUl9Pq17HVPahEzsPiz5rLgsSEJjas0r15J1rF3Fe21e9oSB++GRyB5vm1MLMehasRrrBA/lQ38tSzeTQkavoXlTYHkdjQ7vJqDHru9T3FbAMJ5eCK07Jo7KjnJLHzT4RtquJNpNEwLOzN5k5dGSXleISxB86O+SP5ATBVU/hgWyaNWyzUB0dwzNAxsvXDPONXLjNTR8anm3JQ95Yz1WMFmpKvilTvaTTVk3JcW4CTB1pPnLKP1VjPQdphTbDfMON2pW2LypicjrqniZz71PykdqzLx3yKZksAXU4xAO1UlSb3Ok03MrYv3jpeVUidSHrXCeveUqmvk3LBTSi05RcqcF5qis1vpElfSar3UCmfP9K9Z1ZnmHXu5zWp52SYyb/NUfOidwQ+ZOWjT/U6C97Xnc4S3ZjXo/JtGL7WfLsmJlM9+qwYTKPOZ0dM8+2ipnMS+/I5HUXNTPbvM7x1MMCHgNNWw3Ubf4SCAn1c/BtNlVZd0II2cPYVT70EO3NlBzajqKkorWcetgV753a5RHPytDP18G38UrtX3OAnG/xEXBXa1QgOTzqx3gubHVy3CDTU/Ixl5DT+FYJz94qsbUvdPo1ekxjzOq43/KJJXODarNuOVvc9GMm2W1brr5TjzksbLcHPilR1q72mi8dx+mTvZ3V522YZFsbkN+zJyvI8Hv2dFqD87RB18ktw+VKo9PGkRFfx2B8vFedwr7s0t+r7h52uDezEytv1WCoSh8e1OWWS3cdZRUbMghJf9M43oDJQWCKDNkeP3gW67OtmwZGllyZYyU5Z1d/mAIfB8eu4ubbt19ZXtpinyr2mT0HAaTrtmiTFwmcGjKjK2LzYo+AN9PirMn9O1v0gYKOGcp0X7SXrl9RVI2pW2zfS/X4UGLjSYMExDfqXeYqIJiLuq+NpP7E/llBwqRsOOK4nWDr0ytOXecep3jI1WL/eTC3ySIV5vksPfUeuRzZDLSunR8c1VLg/tHA6dgt9w8AFKOA2ywINuh3erI2j9brZrmpZrTMlQSVqwX/QeTl5eXl5eXl5eXl5eXl5eU1o+ftx3jSHhSdPnHfzfP2Gj1vf9UT95Q9YR+d5H10S+8dxGHv4Oo5+yX/BnIVRQbEwAJ6AAAAAElFTkSuQmCC"/>
  </span>Admin Page<span><Link to={"/"}>LogOut</Link></span></h3>
      <div className="container content mt-4">
        <h5> 📝 Add New Rooms</h5>

        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Hotel Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Place
              </label>
              <input
                type="email"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              type :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value="AC"
                  defaultChecked={type === "AC"}
                  onClick={(e) => setType(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  AC
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value="Non-AC"
                  defaultChecked={type === "Non-AC"}
                  onClick={(e) => setType(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Non-AC
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={checked}
                onChange={(e) => setchecked(e.target.value)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Room Picture :</p>
              <img
                src={profilePIcDefault}
                alt="room"
                name="file"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input
                className="form-control"
                
                type="file"
                onChange={handleImg}
                name="file"
                id="formFile"
                multiple accept="img/png, img/jpeg, img/webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
