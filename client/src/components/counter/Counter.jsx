import React from "react";
import styles from "./counter.module.css";
import { FaRegHandshake } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { SiMusicbrainz } from "react-icons/si";
import { MdOutlinePermMedia } from "react-icons/md";
import Image from "next/image";
import CounterCard from "../counterCard/CounterCard";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <div className={styles.container}>
        <div className={styles.bannerThreeBg3}>
          <div className={styles.bannerImgWrapper3}>
            <Image
              className="swayAnimaionX"
              alt="a"
              src="/bannerright.png"
              width={400}
              height={170}
            />
          </div>
        </div>
        <div className={styles.items}>
          <CounterCard
            svgUrl={<FaRegHandshake />}
            count={"3,212+"}
            title={"Satisfied Clients"}
          />
          <CounterCard
            svgUrl={<GiTeamIdea />}
            count={"122+"}
            title={"Finished Projects"}
          />
          <CounterCard
            svgUrl={<SiMusicbrainz />}
            count={"250+"}
            title={"Skilled Experts"}
          />
          <CounterCard
            svgUrl={<MdOutlinePermMedia />}
            count={"590+"}
            title={"Media Posts"}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
