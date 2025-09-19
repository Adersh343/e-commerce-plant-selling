import React from "react";
import about from "../../assets/images/about.svg";
import group_plant from "../../assets/icons/group_plant.svg";
import hand_plant from "../../assets/icons/hand_plant.svg";
import box_plant from "../../assets/icons/box_plant.svg";
import CustomHeading from "../CustomHeading";
const About = () => {
  return (
    <div className="container mx-auto  pt-20">
      <div className=" bg-greenbg  pt-20  flex justify-around">
        <div className="">
          <img src={about} />
        </div>
        <div className="">
          <div>
            <CustomHeading title={"Why Choose Us?"} />

            <p className="text-xl pt-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
          <div className=" flex pt-10 gap-6">
            <div className="h-20">
              <img src={group_plant} width={70} height={70} />
            </div>
            <div className="">
              <h3 className="text-primary font-bold text-xl">Grow Plant</h3>

              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the <br />
                1500s
              </p>
            </div>
          </div>
          <div className=" flex pt-6 gap-6">
            <div className="h-20">
              <img src={hand_plant} width={70} height={70} />
            </div>
            <div className="">
              <h3 className="text-primary font-bold text-xl">Hand Plant</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the <br />
                1500s
              </p>
            </div>
          </div>
          <div className=" flex pt-6 gap-6">
            <div className="h-20">
              <img src={box_plant} width={70} height={70} />
            </div>
            <div className="">
              <h3 className="text-primary font-bold text-xl">Box Plant</h3>

              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the <br />
                1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
