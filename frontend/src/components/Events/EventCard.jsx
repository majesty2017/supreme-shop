import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? 'unset' : 'mb-12' } lg:flex p-2 mb-12`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-flex lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 8/256 gb ssd
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          laborum, quod distinctio earum quos reprehenderit, possimus aliquid
          incidunt cupiditate rem minus ipsam accusamus tenetur voluptate.
          Consectetur harum magnam laborum necessitatibus? Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Libero laborum, quod
          distinctio earum quos reprehenderit, possimus aliquid incidunt
          cupiditate rem minus ipsam accusamus tenetur voluptate. Consectetur
          harum magnam laborum necessitatibus?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              GHS1099.00
            </h5>
            <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
              GHS999.00
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            80 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
