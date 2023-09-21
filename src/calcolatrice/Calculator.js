import React, { useState, useEffect } from "react";
import gifImage from "./sticky.gif";
import devilgif from "./littledevil.gif";
import gameboy from "./gameboy.gif";
import fontpixel from "./VT323-Regular.ttf";
import './calcstyle.css';

const Calculator=()=> {
  const [count, setCount] = useState("");
  const [decimalPressed, setDecimalPressed] = useState(false);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [isRed, setIsRed] = useState(false);
  const [isPixel, setPixel] = useState(false);

  const phrases = [
    "Hello stranger, welcome to The Calculator!!  :)",
    "This is an amazing day to do some math!",
    "Math Math MATH!!",
    "109 97 116 104",
    "The Calculator is a cozy place!",
    "You are doing a great job with those calculations!",
    "Such a genius!",
    "Calculator made by Alessio Santillo!",
    "I'm Sticky! Nice to meet you.",
    "Glad to see you friend!",
    "Beep boop boop beep -_-",
    "Breathtaking!",
    "Hey there, I'm using The Calculator.",
    "Welcome back master.",
    "Back to the MATHuture!",
    "Sticky's here to support you!",
    "Need a coffee?",
    "Use me for your tests, ok?",
    "Are you single? Asking for a friend, promise!",
    "DON'T TYPE 666, JUST DON'T!!! DON'T YOU DARE!",
    "Uhhhhh my back.",
    "You're the best, keep it up!",
    "Tip: Typing 2+2 is equal 4!",
    "Tap me to see more messages or reload the page :)",
    "Yes, I'm always here...",
    "I live on this giant rectangle :)",
    "Have you seen James?.. also, who's James?",
    "I can't give you any suggestions, sorry hehe",
    "Hello Sir ^_^",
    "This is Sticky, your best friend!",
    "How's your day going?",
    "STOP! Look at me for 5 seconds!...",
    "I never sit down because I just don't need it :)",
    "LOOK BEHIND YOU!",
    "I'm born on 06/30/2023!",
    "Who needs a break?",
    "Peaches peaches peaches peaches PEAAAAAACHESSS",
    "Come on, tell me your secret :)",
    "Here's so dark...",
    "Need a bonfire to level up here...",
    "Found all the easter eggs!",
    "Have you found the easter eggs?",
    "Don't tap 666!!",
    "Try typing 666...",
    "Try typing 10101010..."
  ];

  useEffect(() => {
      generateRandomPhrase();
   
  });

  const generateRandomPhrase = () => {
    const random = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[random]);
    setImageSource(`./sticky.gif?text=${encodeURIComponent(phrases[random])}`);
  };

  //{imageSource && ()} questo era sul bottom immagine st

  const Count = (value) => {
    if (typeof value === "number") {
      setCount(count + value);
    } else {
      switch (value) {
        case "1":
          setCount(count + "1");
          break;
        case "2":
          setCount(count + "2");
          break;
        case "3":
          setCount(count + "3");
          break;
        case "4":
          setCount(count + "4");
          break;
        case "5":
          setCount(count + "5");
          break;
        case "6":
          setCount(count + "6");
          break;
        case "7":
          setCount(count + "7");
          break;
        case "8":
          setCount(count + "8");
          break;
        case "9":
          setCount(count + "9");
          break;
        case "0":
          setCount(count + "0");
          break;
        case ".":
          if (!decimalPressed) {
            setCount(count + ".");
            setDecimalPressed(false);
          }
          break;
        case "+":
          setCount(count + "+");
          break;
        case "-":
          setCount(count + "-");
          break;
        case "*":
          setCount(count + "*");
          break;
        case "/":
          setCount(count + "/");
          break;
        case "=":
          // Esegui il calcolo dell'espressione matematica
          try {
            setCount(eval(count));
          } catch (error) {
            setCount("Error!");
          }
          break;
        default:
          break;
      }
    }
  };

  const equalPix = isPixel
    ? {
        padding: "15px",
        paddingLeft: "23px",
        paddingRight: "25px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "0px",
        margin: "5px",
        border: "3px solid white",
        borderWidth: "3px",
        borderColor: "white",
        backgroundColor: "rgb(433, 123, 5)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.6s",
        cursor: "pointer",
        position: "absolute",
        left: "185px",
        top: "525x",
        textAlign: "center"
      }
    : {};
  const calcPix = isPixel
    ? {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "0px",
        margin: "10px",
        border: "3px solid white",
        backgroundColor: "rgb(33, 133, 39)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.6s",
        cursor: "pointer",
        position: "relative",
        left: "12px",
        top: "-0px"
      }
    : {};
  const countPix = isPixel
    ? {
        padding: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "0px",
        margin: "10px",
        border: "3px solid white",
        backgroundColor: "rgb(0, 92, 92)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.5s",
        animation: "cal 4s infinite alternate-reverse",
        position: "relative",
        cursor: "pointer",
        left: "30px",
        top: "166px"
      }
    : {};
  const countoPix = isPixel
    ? {
        padding: "30px",
        width: "250px",
        height: "30px",
        fontWeight: "bold",
        borderRadius: "0px",
        margin: "30px",
        backgroundColor: "rgb(15, 2, 30)",
        color: "rgb(235, 120, 325)",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        borderColor: "rgb(255, 255, 255)",
        borderStyle: "solid",
        borderWidth: "1px",
        border: "3px solid white",
        justifyContent: "space-around",
        marginLeft: "30px",
        marginRight: "30px",
        top: "-615px",
        fontSize: "20px",
        position: "relative"
      }
    : {};
  const evilStylePix = isPixel
    ? {
        fontSize: "11px",
        color: "white",
        position: "absolute",
        top: "90px",
        left: "75px",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        overflow: "hidden",
        backgroundColor: "rgb(2, 92, 62)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: "2px",
        paddingLeft: "3px",
        paddingRight: "6px",
        padding: "6px",
        borderRadius: "0px 0px 0px 0px",
        display: "inline-block",
        fontWeight: "bold",
        listStyleType: "none",
        border: "1px solid white"
        // altre proprietà CSS desiderate
      }
    : {};

  const newxpix = isPixel
    ? {
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        position: "absolute",
        left: "250px",
        display: "inline-flex",
        top: "45px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        padding: "2px",
        marginBottom: "40px",
        backgroundColor: "rgb(35, 133, 113)",
        fontSize: "11px",
        cursor: "pointer",
        paddingLeft: "2px",
        paddingRight: "2px"
      }
    : {};

  const resetPix = isPixel
    ? {
        padding: "5px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "0px",
        margin: "10px",
        border: "3px solid white",
        backgroundColor: "rgb(525, 52, 52)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: " 0.6s",
        paddingLeft: "30px",
        paddingRight: "30px",
        cursor: "pointer",
        position: "absolute",
        top: "620px",
        left: "46px",
        paddingTop: "20px",
        paddingBottom: "20px"
      }
    : {};

  const equalx = isRed
    ? {
        padding: "15px",
        paddingLeft: "23px",
        paddingRight: "25px",
        fontSize: "25px",
        fontWeight: "bold",
        borderRadius: "10px",
        margin: "5px",
        border: "none",
        backgroundColor: "rgb(130, 22, 22)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.6s",
        cursor: "pointer",
        position: "absolute",
        left: "180px",
        top: "537px",
        textAlign: "center"
      }
    : {};
  const calcx = isRed
    ? {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        fontSize: "25px",
        fontWeight: "bold",
        borderRadius: "10px",
        margin: "10px",
        border: "none",
        backgroundColor: "rgb(130, 22, 22)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.6s",
        cursor: "pointer",
        position: "relative",
        top: "-3px"
      }
    : {};
  const countx = isRed
    ? {
        padding: "20px",
        fontSize: "25px",
        fontWeight: "bold",
        borderRadius: "10px",
        margin: "10px",
        border: "none",
        backgroundColor: "rgb(130, 22, 22)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: "0.5s",
        animation: "cal 4s infinite alternate-reverse",
        position: "relative",
        cursor: "pointer",
        left: "30px",
        top: "165px"
      }
    : {};
  const countox = isRed
    ? {
        padding: "30px",
        width: "250px",
        height: "30px",
        fontWeight: "bold",
        borderRadius: "10px",
        margin: "30px",
        backgroundColor: "rgb(30, 10, 10)",
        color: "orange",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        borderColor: "rgb(255, 255, 255)",
        borderStyle: "solid",
        borderWidth: "1px",
        justifyContent: "space-around",
        marginLeft: "30px",
        marginRight: "30px",
        top: "-620px",
        fontSize: "20px",
        position: "relative"
      }
    : {};

  const evilStyle = isRed
    ? {
        fontSize: "11px",
        color: "white",
        position: "absolute",
        top: "90px",
        left: "75px",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        overflow: "hidden",
        backgroundColor: "rgb(130, 22, 22)",
        borderColor: "rbg(255, 255, 255)",
        borderWidth: "2px",
        paddingLeft: "3px",
        paddingRight: "6px",
        padding: "6px",
        borderRadius: "5px 10px 10px 0px",
        display: "inline-block",
        fontWeight: "bold",
        listStyleType: "none"
        // altre proprietà CSS desiderate
      }
    : {};

  const resetx = isRed
    ? {
        padding: "5px",
        fontSize: "25px",
        fontWeight: "bold",
        borderRadius: "10px",
        margin: "10px",
        border: "none",
        backgroundColor: "rgb(130, 22, 22)",
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        transition: " 0.6s",
        paddingLeft: "30px",
        paddingRight: "30px",
        cursor: "pointer",
        position: "absolute",
        top: "610px",
        left: "46px",
        paddingTop: "20px",
        paddingBottom: "20px"
      }
    : {};

  const newx = isRed
    ? {
        color: "white",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        position: "absolute",
        left: "185px",
        /*rotate: -35deg;*/
        display: "inline-flex",
        top: "45px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        padding: "2px",
        marginBottom: "40px",
        backgroundColor: "rgb(133, 33, 33)",
        fontSize: "11px",
        cursor: "pointer",
        paddingLeft: "2px",
        paddingRight: "2px"
      }
    : {};

  const devilx = isRed
    ? {
        width: "80px",
        position: "absolute",
        top: "610px",
        left: "223px",
        opacity: "1",
        transition: "3s"
      }
    : {};

  const gameboyx = isPixel
    ? {
        opacity: "1",
        position: "absolute",
        width: "80px",
        top: "623px",
        left: "223px",
        transition: "3s",
        backgroundColor: "black"
      }
    : {};

  const styletheCalcOnOffPixel = () => {
    if (isPixel) {
      setPixel(false);
    } else {
      setPixel(true);
      alert(
        "Pixel Mode On: You made all pixelated!!\nYou can also activate this mode typing 10101010!\nTry also typing 666 and see what happen :)"
      );
    }
  };

  const styletheCalcOnOff = () => {
    if (isRed) {
      setIsRed(false);
    } else {
      setIsRed(true);
      alert(
        "Hell Mode On: Now it's all red!!\nYou can also activate this mode typing 666!\nTry also typing 10101010 and see what happen :)"
      );
    }
  };

  const turnRed = () => {
    if (count === "66") {
      setIsRed(true);
      alert("Easter egg found: DarkSticky painted everything in red!!");
    }
  };

  ////
  const turnPixel = () => {
    if (count === "1010101") {
      setPixel(true);
      alert("Easter egg found: 'It looks all so pixelated ^_^' ");
    }
  };
  ////

  const ResetDecimal = () => {
    setDecimalPressed(false);
  };

  const Reset = () => {
    setCount("");
    /* setIsRed(true);*/
    /*setPixel(true);*/
    ResetDecimal("");
  };

  return (
    <div className="calc-main">
      <h1 className="titlep" id="ca">
        THE CALCULATOR
      </h1>
      <div>
        <ul className="minestyle">Enjoy Math With Sticky!</ul>
      </div>

      <button className="buttonp" onClick={generateRandomPhrase}>
        <img className="gif" src={gifImage} alt="Stickman Gif" />
        <ul style={{ ...evilStyle, ...evilStylePix }} className="phrases">
          {randomPhrase}
        </ul>
      </button>

      <button
        style={newx}
        className="new"
        id="stylebeta"
        onClick={() => {
          styletheCalcOnOff();
        }}
      >
        Hell Mode
      </button>

      <button
        style={newxpix}
        className="newpix"
        id="stylebeta"
        onClick={() => {
          styletheCalcOnOffPixel();
        }}
      >
        Pixel Mode
      </button>

      <div>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => {
            Count("1");
            turnPixel();
          }}
        >
          1
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("2")}
        >
          2
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("3")}
        >
          3
        </button>
      </div>
      <div>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("4")}
        >
          4
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("5")}
        >
          5
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => {
            Count("6");
            turnRed();
          }}
        >
          6
        </button>
      </div>
      <div>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("7")}
        >
          7
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("8")}
        >
          8
        </button>
        <button
          style={{ ...countx, ...countPix }}
          className="count"
          onClick={() => Count("9")}
        >
          9
        </button>
      </div>
      <button
        style={{ ...countx, ...countPix }}
        className="count"
        onClick={() => {
          Count("0");
          turnPixel();
        }}
      >
        0
      </button>
      <button
        style={{ ...countx, ...countPix }}
        className="count"
        onClick={() => Count(".")}
      >
        .
      </button>

      <h1>
        <div className="edit">
          <button
            style={{ ...calcx, ...calcPix }}
            className="calc"
            onClick={() => Count("+")}
          >
            +
          </button>
          <button
            style={{ ...calcx, ...calcPix }}
            className="calc"
            onClick={() => Count("-")}
          >
            -
          </button>
          <button
            style={{ ...calcx, ...calcPix }}
            className="calc"
            onClick={() => Count("/")}
          >
            /
          </button>
          <button
            style={{ ...calcx, ...calcPix }}
            className="calc"
            onClick={() => Count("*")}
          >
            *
          </button>
        </div>

        <button
          style={{ ...equalx, ...equalPix }}
          className="equal"
          onClick={() => Count("=")}
        >
          =
        </button>

        <img className="devil" style={devilx} src={devilgif} alt="devil" />

        <img className="gameboy" style={gameboyx} src={gameboy} alt="game" />

        <button
          className="reset"
          id="resett"
          style={{ ...resetx, ...resetPix }}
          onClick={() => {
            Reset();
            ResetDecimal();
            /*  setIsRed(false);
            turnRed();*/
          }}
        >
          Reset
        </button>
      </h1>
      <ul style={{ ...countox, ...countoPix }} className="counto">
      {count}
      </ul>
     
    </div>
  );
}
export default Calculator;