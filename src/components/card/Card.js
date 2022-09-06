import React, { useEffect, useRef, useState } from "react";
import "./card.css";

import onam_poster from '../../images/onam-poster.jpg'

const Card = (props) => {
  const [img, setImg] = useState();
  const [desc, setDesc] = useState();
  const showRef = useRef();
  const { game, description, person } = props.item;
  const [sortperson, setPerson] = useState([]);

  

  useEffect(() => {
    const setimg = () => {
      switch (game) {
        case "Gaming Arcade":
          setImg(onam_poster);
          setDesc("Gaming Arcade");
          break;
        case "Web Design":
          // img = web;
          setImg(onam_poster);
          setDesc(" A webpage is a brainchild of a good programmer and a creative thinker, and what lies between is your creativity and html skills.")
          break;
        case "Typing Competition":
          // img = typing;
          setImg(onam_poster);
          setDesc("Test your typing skils and win a prize. If you can make it to the top you get Rs 1000 >_<")
          break;
        case "Bug Smash":
          // img = bug;
          setImg(onam_poster);
          setDesc("Bug Smash challenges your hunting capabilities and rewards you well if you prove yourself good.")
          break;
        case "Blind Coding":
          // img = blind;
          setImg(onam_poster);
          setDesc("A programmer works on code without running it until completion. Normally this is a terrible idea but it makes for a very fun challenge.")
          break;
        case "Cascade Coding":
          // img = web;
          setImg(onam_poster);
          setDesc("A team coding event prepared in such a way it would test your coordination skills and ability to adapt to the coding style of your teammate.")
          break;
        case "Code Jam":
          // img = codejam;
          setImg(onam_poster);
          setDesc("It's high time for you to jam with other programmers. A good programmer is a good debugger, So to survive you need coding as well as debugging crafts.")
          break;

        default:
          setImg(onam_poster);
          setDesc("Come and play the exciting that we have prepared to blow your minds. ");
          break;
      }
    };
    setimg();
  });

  const show = () => {
    setPerson(
      person
        .sort((a, b) => {
          return a.score - b.score;
        })
        .reverse()
    );

    console.log(game, description, sortperson);
    showRef.current.style.opacity = 1;
    showRef.current.style.visibility = "visible";
  };

  const hide = () => {
    showRef.current.style.opacity = 0;
    showRef.current.style.visibility = "hidden";
  };

  return (
    <div className="card">
      <div className="card-details">
        <div className="top">
          <img src={img} alt="" />
        </div>
        <div className="bottom">
          <div className="title">{game}</div>
          <div className="desc">{desc}</div>
          <button onClick={show}>LEADERBOARD</button>
        </div>
      </div>

      <div className="leaderboard" ref={showRef}>
        <div className="title">{game}</div>
        <div className="details">
          <div className="title det-title">LEADERBOARD</div>
          <table>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Points</th>
            </tr>
            {sortperson[0] && (
              <tr>
                <td>1</td>
                <td>{sortperson[0].name} </td>
                <td>{sortperson[0].score}</td>
              </tr>
            )}
            {sortperson[1] && (
              <tr>
                <td>2</td>
                <td>{sortperson[1].name}</td>
                <td>{sortperson[1].score}</td>
              </tr>
            )}
            {sortperson[2] && (
              <tr>
                <td>3</td>
                <td>{sortperson[2].name}</td>
                <td>{sortperson[2].score}</td>
              </tr>
            )}
          </table>
        </div>
        <div className="close" onClick={hide}>
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default Card;