import { useEffect, useState } from "react";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import video from "./video.mp4";
import { Cards } from "./Cards";
const MainBoard = () => {
  const [modalState, setModalState] = useState(true);

  const [imageBody, setImageBody] = useState();

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const p1Change = (e) => {
    setPlayer1(e.target.value);
  };
  const p2Change = (e) => {
    setPlayer2(e.target.value);
  };

  const [cardStates, setCardStates] = useState({
    card1State: "",
    card2State: "",
    card3State: "",
    card4State: "",
    card5State: "",
    card6State: "",
    card7State: "",
    card8State: "",
    card9State: "",
  });
  notUsable: {
    // const [card1State, setCard1State] = useState("");
    // const [card2State, setCard2State] = useState("");
    // const [card3State, setCard3State] = useState("");
    // const [card4State, setCard4State] = useState("");
    // const [card5State, setCard5State] = useState("");
    // const [card6State, setCard6State] = useState("");
    // const [card7State, setCard7State] = useState("");
    // const [card8State, setCard8State] = useState("");
    // const [card9State, setCard9State] = useState("");
  }
  const [playerState, setPlayerState] = useState("Player 1 Turn!");
  const [playerTrue, setPlayerTrue] = useState(true);

  const playerDetails = (e) => {
    e.preventDefault();
    setPlayerState(player1 + " Turn!");
    setModalState(false);
  };

  const [winPlayer, setWinPlayer] = useState(false);
  notUsable: {
    // const [button1, setButton1State] = useState(false);
    // const [button2, setButton2State] = useState(false);
    // const [button3, setButton3State] = useState(false);
    // const [button4, setButton4State] = useState(false);
    // const [button5, setButton5State] = useState(false);
    // const [button6, setButton6State] = useState(false);
    // const [button7, setButton7State] = useState(false);
    // const [button8, setButton8State] = useState(false);
    // const [button9, setButton9State] = useState(false);
  }
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
    button9: false,
  });

  const [checkButtonState, setCheckButtonState] = useState(true);
  const [blackColors, setBlackColors] = useState({
    blackColor1: "black",
    blackColor2: "black",
    blackColor3: "black",
    blackColor4: "black",
    blackColor5: "black",
    blackColor6: "black",
    blackColor7: "black",
    blackColor8: "black",
    blackColor9: "black",
  });
  const [whiteColors, setWhiteColors] = useState({
    whiteColor1: "white",
    whiteColor2: "white",
    whiteColor3: "white",
    whiteColor4: "white",
    whiteColor5: "white",
    whiteColor6: "white",
    whiteColor7: "white",
    whiteColor8: "white",
    whiteColor9: "white",
  });
  notUsable: {
    // const [blackColor1, setBlackColor1] = useState("black");
    // const [whiteColor1, setWhiteColor1] = useState("white");
    // const [blackColor2, setBlackColor2] = useState("black");
    // const [whiteColor2, setWhiteColor2] = useState("white");
    // const [blackColor3, setBlackColor3] = useState("black");
    // const [whiteColor3, setWhiteColor3] = useState("white");
    // const [blackColor4, setBlackColor4] = useState("black");
    // const [whiteColor4, setWhiteColor4] = useState("white");
    // const [blackColor5, setBlackColor5] = useState("black");
    // const [whiteColor5, setWhiteColor5] = useState("white");
    // const [blackColor6, setBlackColor6] = useState("black");
    // const [whiteColor6, setWhiteColor6] = useState("white");
    // const [blackColor7, setBlackColor7] = useState("black");
    // const [whiteColor7, setWhiteColor7] = useState("white");
    // const [blackColor8, setBlackColor8] = useState("black");
    // const [whiteColor8, setWhiteColor8] = useState("white");
    // const [blackColor9, setBlackColor9] = useState("black");
    // const [whiteColor9, setWhiteColor9] = useState("white");
  }

  //functions:
  const commonCardClick = (buttonNum, cardNum) => {
    console.log("button", buttonNum);
    console.log("card", cardNum);
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButtonStates({ ...buttonStates, [buttonNum]: true });
    if (checkButtonState) {
      setCardStates({ ...cardStates, [cardNum]: "X" });
    } else {
      setCardStates({ ...cardStates, [cardNum]: "O" });
    }
  };
  notUsable: {
    // const card1Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton1State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button1: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card1State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card1State: "O" });
    //   }
    // };
    // const card2Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton2State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button2: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card2State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card2State: "O" });
    //   }
    // };
    // const card3Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton3State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button3: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card3State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card3State: "O" });
    //   }
    // };
    // const card4Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton4State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button4: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card4State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card4State: "O" });
    //   }
    // };
    // const card5Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton5State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button5: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card5State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card5State: "O" });
    //   }
    // };
    // const card6Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton6State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button6: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card6State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card6State: "O" });
    //   }
    // };
    // const card7Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton7State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button7: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card7State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card7State: "O" });
    //   }
    // };
    // const card8Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton8State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button8: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card8State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card8State: "O" });
    //   }
    // };
    // const card9Click = () => {
    //   setPlayerTrue((prev) => !prev);
    //   setCheckButtonState((prev) => !prev);
    //   // setButton9State((prev) => !prev);
    //   setButtonStates({ ...buttonStates, button9: true });
    //   if (checkButtonState) {
    //     setCardStates({ ...cardStates, card9State: "X" });
    //   } else {
    //     setCardStates({ ...cardStates, card9State: "O" });
    //   }
    // };
  }
  const changeAllStates = () => {
    setButtonStates({
      button1: true,
      button2: true,
      button3: true,
      button4: true,
      button5: true,
      button6: true,
      button7: true,
      button8: true,
      button9: true,
    });
    // setButton1State(true);
    // setButton2State(true);
    // setButton3State(true);
    // setButton4State(true);
    // setButton5State(true);
    // setButton6State(true);
    // setButton7State(true);
    // setButton8State(true);
    // setButton9State(true);
  };
  const winner = () => {
    if (!playerTrue) {
      setPlayerState(player1 + " wins!");
    } else {
      setPlayerState(player2 + " wins!");
    }
  };
  useEffect(() => {
    winner();
    //eslint-disable-next-line
  }, [winPlayer]);

  const imageSet = () => {
    return (
      <video width="1650" autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    );
  };

  const timerFunc = () => {
    setTimeout(() => {
      setImageBody(null);
    }, 5000);
  };

  const result = () => {
    if (
      cardStates.card1State === cardStates.card4State &&
      cardStates.card4State === cardStates.card7State &&
      cardStates.card1State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor1: "green",
        blackColor4: "green",
        blackColor7: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor1: "white",
        whiteColor4: "white",
        whiteColor7: "white",
      });
      // setBlackColor1("green");
      // setBlackColor4("green");
      // setBlackColor7("green");
      // setWhiteColor1("white");
      // setWhiteColor4("white");
      // setWhiteColor7("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card1State === cardStates.card2State &&
      cardStates.card2State === cardStates.card3State &&
      cardStates.card1State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor1: "green",
        blackColor2: "green",
        blackColor3: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor1: "white",
        whiteColor2: "white",
        whiteColor3: "white",
      });
      // setBlackColor1("green");
      // setBlackColor2("green");
      // setBlackColor3("green");
      // setWhiteColor1("white");
      // setWhiteColor2("white");
      // setWhiteColor3("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card1State === cardStates.card5State &&
      cardStates.card5State === cardStates.card9State &&
      cardStates.card1State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor1: "green",
        blackColor5: "green",
        blackColor9: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor1: "white",
        whiteColor5: "white",
        whiteColor9: "white",
      });
      // setBlackColor1("green");
      // setBlackColor5("green");
      // setBlackColor9("green");
      // setWhiteColor1("white");
      // setWhiteColor5("white");
      // setWhiteColor9("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card2State === cardStates.card5State &&
      cardStates.card5State === cardStates.card8State &&
      cardStates.card2State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor2: "green",
        blackColor5: "green",
        blackColor8: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor2: "white",
        whiteColor5: "white",
        whiteColor8: "white",
      });
      // setBlackColor2("green");
      // setBlackColor5("green");
      // setBlackColor8("green");
      // setWhiteColor2("white");
      // setWhiteColor5("white");
      // setWhiteColor8("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card4State === cardStates.card5State &&
      cardStates.card5State === cardStates.card6State &&
      cardStates.card4State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor4: "green",
        blackColor5: "green",
        blackColor6: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor4: "white",
        whiteColor5: "white",
        whiteColor6: "white",
      });
      // setBlackColor4("green");
      // setBlackColor5("green");
      // setBlackColor6("green");
      // setWhiteColor4("white");
      // setWhiteColor5("white");
      // setWhiteColor6("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card7State === cardStates.card8State &&
      cardStates.card8State === cardStates.card9State &&
      cardStates.card7State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor7: "green",
        blackColor8: "green",
        blackColor9: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor7: "white",
        whiteColor8: "white",
        whiteColor9: "white",
      });
      // setBlackColor7("green");
      // setBlackColor8("green");
      // setBlackColor9("green");
      // setWhiteColor7("white");
      // setWhiteColor8("white");
      // setWhiteColor9("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      cardStates.card3State === cardStates.card6State &&
      cardStates.card6State === cardStates.card9State &&
      cardStates.card3State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor3: "green",
        blackColor6: "green",
        blackColor9: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor3: "white",
        whiteColor6: "white",
        whiteColor9: "white",
      });
      // setBlackColor3("green");
      // setBlackColor6("green");
      // setBlackColor9("green");
      // setWhiteColor3("white");
      // setWhiteColor6("white");
      // setWhiteColor9("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    } else if (
      //
      cardStates.card3State === cardStates.card5State &&
      cardStates.card5State === cardStates.card7State &&
      cardStates.card3State !== ""
    ) {
      changeAllStates();
      setBlackColors({
        ...blackColors,
        blackColor3: "green",
        blackColor5: "green",
        blackColor7: "green",
      });
      setWhiteColors({
        ...whiteColors,
        whiteColor3: "white",
        whiteColor5: "white",
        whiteColor7: "white",
      });
      // setBlackColor3("green");
      // setBlackColor5("green");
      // setBlackColor7("green");
      // setWhiteColor3("white");
      // setWhiteColor5("white");
      // setWhiteColor7("white");
      setWinPlayer((prev) => !prev);
      setImageBody(imageSet);
      timerFunc();
    }
  };
  const checkPlayer = () => {
    if (playerTrue) {
      if (player1 === "") {
        setPlayerState("Player 1 Turn!");
      } else {
        setPlayerState(player1 + " Turn!");
      }
    } else {
      setPlayerState(player2 + " Turn!");
    }
  };
  useEffect(() => {
    result();

    checkPlayer();
    //eslint-disable-next-line
  }, [checkButtonState]);

  const resetButton = () => {
    setCardStates({
      card1State: "",
      card2State: "",
      card3State: "",
      card4State: "",
      card5State: "",
      card6State: "",
      card7State: "",
      card8State: "",
      card9State: "",
    });
    // setCard1State("");
    // setCard2State("");
    // setCard3State("");
    // setCard4State("");
    // setCard5State("");
    // setCard6State("");
    // setCard7State("");
    // setCard8State("");
    // setCard9State("");
    setPlayerTrue(prev=>prev=true);
    setButtonStates({
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false,
      button7: false,
      button8: false,
      button9: false,
    });
    // setButton1State(false);
    // setButton2State(false);
    // setButton3State(false);
    // setButton4State(false);
    // setButton5State(false);
    // setButton6State(false);
    // setButton7State(false);
    // setButton8State(false);
    // setButton9State(false);
    setCheckButtonState(prev=>!prev);
    setBlackColors({
      blackColor1: "black",
      blackColor2: "black",
      blackColor3: "black",
      blackColor4: "black",
      blackColor5: "black",
      blackColor6: "black",
      blackColor7: "black",
      blackColor8: "black",
      blackColor9: "black",
    });
    setWhiteColors({
      whiteColor1: "white",
      whiteColor2: "white",
      whiteColor3: "white",
      whiteColor4: "white",
      whiteColor5: "white",
      whiteColor6: "white",
      whiteColor7: "white",
      whiteColor8: "white",
      whiteColor9: "white",
    });
    // setBlackColor1("black");
    // setWhiteColor1("white");
    // setBlackColor2("black");
    // setWhiteColor2("white");
    // setBlackColor3("black");
    // setWhiteColor3("white");
    // setBlackColor4("black");
    // setWhiteColor4("white");
    // setBlackColor5("black");
    // setWhiteColor5("white");
    // setBlackColor6("black");
    // setWhiteColor6("white");
    // setBlackColor7("black");
    // setWhiteColor7("white");
    // setBlackColor8("black");
    // setWhiteColor8("white");
    // setBlackColor9("black");
    // setWhiteColor9("white");
  };
  const changeNames = () => {
    setModalState(true);
    resetButton();
  };
  return (
    <>
      {//If we want to show photo on screen when someone win, use this code!
        /* <div
        style={{ position: "absolute", zIndex: "1" , marginTop:"-80px"}}
      >
        {imageBody}
      </div> */}
      <Container className="my-5 p-5" style={{ position: "relative" }}>
        Start Playing!
        <Button
          type="submit"
          variant="dark"
          className="mx-2"
          onClick={resetButton}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="dark"
          className="mx-2"
          onClick={changeNames}
        >
          Change Names?
        </Button>
        <Row>
          <Cards
            mainItem={cardStates.card1State}
            buttonClick={() => {
              commonCardClick("button1", "card1State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button1}
            black={blackColors.blackColor1}
            white={whiteColors.whiteColor1}
          />
          <Cards
            mainItem={cardStates.card2State}
            buttonClick={() => {
              commonCardClick("button2", "card2State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button2}
            black={blackColors.blackColor2}
            white={whiteColors.whiteColor2}
          />
          <Cards
            mainItem={cardStates.card3State}
            buttonClick={() => {
              commonCardClick("button3", "card3State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button3}
            black={blackColors.blackColor3}
            white={whiteColors.whiteColor3}
          />
          <Cards
            mainItem={cardStates.card4State}
            buttonClick={() => {
              commonCardClick("button4", "card4State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button4}
            black={blackColors.blackColor4}
            white={whiteColors.whiteColor4}
          />
          <Cards
            mainItem={cardStates.card5State}
            buttonClick={() => {
              commonCardClick("button5", "card5State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button5}
            black={blackColors.blackColor5}
            white={whiteColors.whiteColor5}
          />
          <Cards
            mainItem={cardStates.card6State}
            buttonClick={() => {
              commonCardClick("button6", "card6State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button6}
            black={blackColors.blackColor6}
            white={whiteColors.whiteColor6}
          />
          <Cards
            mainItem={cardStates.card7State}
            buttonClick={() => {
              commonCardClick("button7", "card7State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button7}
            black={blackColors.blackColor7}
            white={whiteColors.whiteColor7}
          />
          <Cards
            mainItem={cardStates.card8State}
            buttonClick={() => {
              commonCardClick("button8", "card8State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button8}
            black={blackColors.blackColor8}
            white={whiteColors.whiteColor8}
          />
          <Cards
            mainItem={cardStates.card9State}
            buttonClick={() => {
              commonCardClick("button9", "card9State");
            }}
            playerTurn={playerState}
            disable={buttonStates.button9}
            black={blackColors.blackColor9}
            white={whiteColors.whiteColor9}
          />
        </Row>
        <Modal show={modalState} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Enter Player Names:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={playerDetails}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Player 1 Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Player 1 name:"
                  value={player1}
                  onChange={p1Change}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Player 2 Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Player 2 name:"
                  value={player2}
                  onChange={p2Change}
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export { MainBoard };
