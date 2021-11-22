import { useEffect, useState } from "react";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import video from "./video.mp4";
import { Cards } from "./Cards";
const MainBoardSimplified = () => {
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

  const [playerState, setPlayerState] = useState("Player 1 Turn!");
  const [playerTrue, setPlayerTrue] = useState(true);

  const playerDetails = (e) => {
    e.preventDefault();
    setPlayerState(player1 + " Turn!");
    setModalState(false);
  };

  const [winPlayer, setWinPlayer] = useState(false);

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

  //functions:
  const commonCardClick = (buttonNum , cardNum) => {
    console.log("button",buttonNum);
    console.log("card",cardNum);
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButtonStates({ ...buttonStates, [buttonNum]: true });
    if (checkButtonState) {
      setCardStates({ ...cardStates, [cardNum]: "X" });
    } else {
      setCardStates({ ...cardStates, [cardNum]: "O" });
    }
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
  };

  useEffect(() => {
    const winPlayer = () => {
      if (!playerTrue) {
        setPlayerState(player1 + " wins!");
      } else {
        setPlayerState(player2 + " wins!");
      }
    };
    winPlayer();
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

  useEffect(() => {
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
        setWinPlayer((prev) => !prev);
        setImageBody(imageSet);
        timerFunc();
      } else if (
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
        setWinPlayer((prev) => !prev);
        setImageBody(imageSet);
        timerFunc();
      }
    };
    result();
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
    setPlayerTrue(true);
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
    setCheckButtonState(true);
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
  };

  return (
    <>
      {/* <div
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
        <Row>
        <Cards
            mainItem={cardStates.card1State}
            buttonClick={()=>{commonCardClick("button1","card1State")}}
            playerTurn={playerState}
            disable={buttonStates.button1}
            black={blackColors.blackColor1}
            white={whiteColors.whiteColor1}
          />
          <Cards
            mainItem={cardStates.card2State}
            buttonClick={()=>{commonCardClick("button2","card2State")}}
            playerTurn={playerState}
            disable={buttonStates.button2}
            black={blackColors.blackColor2}
            white={whiteColors.whiteColor2}
          />
          <Cards
            mainItem={cardStates.card3State}
            buttonClick={()=>{commonCardClick("button3","card3State")}}
            playerTurn={playerState}
            disable={buttonStates.button3}
            black={blackColors.blackColor3}
            white={whiteColors.whiteColor3}
          />
          <Cards
            mainItem={cardStates.card4State}
            buttonClick={()=>{commonCardClick("button4","card4State")}}
            playerTurn={playerState}
            disable={buttonStates.button4}
            black={blackColors.blackColor4}
            white={whiteColors.whiteColor4}
          />
          <Cards
            mainItem={cardStates.card5State}
            buttonClick={()=>{commonCardClick("button5","card5State")}}
            playerTurn={playerState}
            disable={buttonStates.button5}
            black={blackColors.blackColor5}
            white={whiteColors.whiteColor5}
          />
          <Cards
            mainItem={cardStates.card6State}
            buttonClick={()=>{commonCardClick("button6","card6State")}}
            playerTurn={playerState}
            disable={buttonStates.button6}
            black={blackColors.blackColor6}
            white={whiteColors.whiteColor6}
          />
          <Cards
            mainItem={cardStates.card7State}
            buttonClick={()=>{commonCardClick("button7","card7State")}}
            playerTurn={playerState}
            disable={buttonStates.button7}
            black={blackColors.blackColor7}
            white={whiteColors.whiteColor7}
          />
          <Cards
            mainItem={cardStates.card8State}
            buttonClick={()=>{commonCardClick("button8","card8State")}}
            playerTurn={playerState}
            disable={buttonStates.button8}
            black={blackColors.blackColor8}
            white={whiteColors.whiteColor8}
          />
          <Cards
            mainItem={cardStates.card9State}
            buttonClick={()=>{commonCardClick("button9","card9State")}}
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

export { MainBoardSimplified };
