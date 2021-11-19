import { useEffect, useState } from "react";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import { Cards } from "./Cards";
const MainBoard = () => {
  const [modalState, setModalState] = useState(true);
  const closeBFunc = () => {
    setModalState(false);
  };

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const p1Change = (e) => {
    setPlayer1(e.target.value);
  };
  const p2Change = (e) => {
    setPlayer2(e.target.value);
  };

  const [card1State, setCard1State] = useState("");
  const [card2State, setCard2State] = useState("");
  const [card3State, setCard3State] = useState("");
  const [card4State, setCard4State] = useState("");
  const [card5State, setCard5State] = useState("");
  const [card6State, setCard6State] = useState("");
  const [card7State, setCard7State] = useState("");
  const [card8State, setCard8State] = useState("");
  const [card9State, setCard9State] = useState("");

  const [playerState, setPlayerState] = useState("Player 1 Turn!");
  const [playerTrue, setPlayerTrue] = useState(true);

  const playerDetails = (e) => {
      e.preventDefault();
      setPlayerState(player1 + " Turn!");
      setModalState(false);
  };

  const [winPlayer, setWinPlayer] = useState(false);

  const [button1, setButton1State] = useState(false);
  const [button2, setButton2State] = useState(false);
  const [button3, setButton3State] = useState(false);
  const [button4, setButton4State] = useState(false);
  const [button5, setButton5State] = useState(false);
  const [button6, setButton6State] = useState(false);
  const [button7, setButton7State] = useState(false);
  const [button8, setButton8State] = useState(false);
  const [button9, setButton9State] = useState(false);

  const [checkButtonState, setCheckButtonState] = useState(true);
  const [blackColor1, setBlackColor1] = useState("black");
  const [whiteColor1, setWhiteColor1] = useState("white");
  const [blackColor2, setBlackColor2] = useState("black");
  const [whiteColor2, setWhiteColor2] = useState("white");
  const [blackColor3, setBlackColor3] = useState("black");
  const [whiteColor3, setWhiteColor3] = useState("white");
  const [blackColor4, setBlackColor4] = useState("black");
  const [whiteColor4, setWhiteColor4] = useState("white");
  const [blackColor5, setBlackColor5] = useState("black");
  const [whiteColor5, setWhiteColor5] = useState("white");
  const [blackColor6, setBlackColor6] = useState("black");
  const [whiteColor6, setWhiteColor6] = useState("white");
  const [blackColor7, setBlackColor7] = useState("black");
  const [whiteColor7, setWhiteColor7] = useState("white");
  const [blackColor8, setBlackColor8] = useState("black");
  const [whiteColor8, setWhiteColor8] = useState("white");
  const [blackColor9, setBlackColor9] = useState("black");
  const [whiteColor9, setWhiteColor9] = useState("white");
  //functions:
  const card1Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton1State((prev) => !prev);
    if (checkButtonState) {
      setCard1State(() => "X");
    } else {
      setCard1State(() => "O");
    }
  };
  const card2Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton2State((prev) => !prev);
    if (checkButtonState) {
      setCard2State(() => "X");
    } else {
      setCard2State(() => "O");
    }
  };
  const card3Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton3State((prev) => !prev);
    if (checkButtonState) {
      setCard3State(() => "X");
    } else {
      setCard3State(() => "O");
    }
  };
  const card4Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton4State((prev) => !prev);
    if (checkButtonState) {
      setCard4State(() => "X");
    } else {
      setCard4State(() => "O");
    }
  };
  const card5Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton5State((prev) => !prev);
    if (checkButtonState) {
      setCard5State(() => "X");
    } else {
      setCard5State(() => "O");
    }
  };
  const card6Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton6State((prev) => !prev);
    if (checkButtonState) {
      setCard6State(() => "X");
    } else {
      setCard6State(() => "O");
    }
  };
  const card7Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton7State((prev) => !prev);
    if (checkButtonState) {
      setCard7State(() => "X");
    } else {
      setCard7State(() => "O");
    }
  };
  const card8Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton8State((prev) => !prev);
    if (checkButtonState) {
      setCard8State(() => "X");
    } else {
      setCard8State(() => "O");
    }
  };
  const card9Click = () => {
    setPlayerTrue((prev) => !prev);
    setCheckButtonState((prev) => !prev);
    setButton9State((prev) => !prev);
    if (checkButtonState) {
      setCard9State(() => "X");
    } else {
      setCard9State(() => "O");
    }
  };

  const changeAllStates = () => {
    setButton1State(true);
    setButton2State(true);
    setButton3State(true);
    setButton4State(true);
    setButton5State(true);
    setButton6State(true);
    setButton7State(true);
    setButton8State(true);
    setButton9State(true);
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

  useEffect(() => {
    const result = () => {
      if (
        card1State === card4State &&
        card4State === card7State &&
        card1State !== ""
      ) {
        changeAllStates();
        setBlackColor1("green");
        setBlackColor4("green");
        setBlackColor7("green");
        setWhiteColor1("white");
        setWhiteColor4("white");
        setWhiteColor7("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card1State === card2State &&
        card2State === card3State &&
        card1State !== ""
      ) {
        changeAllStates();
        setBlackColor1("green");
        setBlackColor2("green");
        setBlackColor3("green");
        setWhiteColor1("white");
        setWhiteColor2("white");
        setWhiteColor3("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card1State === card5State &&
        card5State === card9State &&
        card1State !== ""
      ) {
        changeAllStates();
        setBlackColor1("green");
        setBlackColor5("green");
        setBlackColor9("green");
        setWhiteColor1("white");
        setWhiteColor5("white");
        setWhiteColor9("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card2State === card5State &&
        card5State === card8State &&
        card2State !== ""
      ) {
        changeAllStates();
        setBlackColor2("green");
        setBlackColor5("green");
        setBlackColor8("green");
        setWhiteColor2("white");
        setWhiteColor5("white");
        setWhiteColor8("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card4State === card5State &&
        card5State === card6State &&
        card4State !== ""
      ) {
        changeAllStates();
        setBlackColor4("green");
        setBlackColor5("green");
        setBlackColor6("green");
        setWhiteColor4("white");
        setWhiteColor5("white");
        setWhiteColor6("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card7State === card8State &&
        card8State === card9State &&
        card7State !== ""
      ) {
        changeAllStates();
        setBlackColor7("green");
        setBlackColor8("green");
        setBlackColor9("green");
        setWhiteColor7("white");
        setWhiteColor8("white");
        setWhiteColor9("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card3State === card6State &&
        card6State === card9State &&
        card3State !== ""
      ) {
        changeAllStates();
        setBlackColor3("green");
        setBlackColor6("green");
        setBlackColor9("green");
        setWhiteColor3("white");
        setWhiteColor6("white");
        setWhiteColor9("white");
        setWinPlayer((prev) => !prev);
      } else if (
        card3State === card5State &&
        card5State === card7State &&
        card3State !== ""
      ) {
        changeAllStates();
        setBlackColor3("green");
        setBlackColor5("green");
        setBlackColor7("green");
        setWhiteColor3("white");
        setWhiteColor5("white");
        setWhiteColor7("white");
        setWinPlayer((prev) => !prev);
      }
    };
    result();
    const checkPlayer = () => {
      if (playerTrue) {
        setPlayerState(player1 + " Turn!");
      } else {
        setPlayerState(player2 + " Turn!");
      }
    };
    checkPlayer();
    //eslint-disable-next-line
  }, [checkButtonState]);

  const resetButton = () => {
    setCard1State("");
    setCard2State("");
    setCard3State("");
    setCard4State("");
    setCard5State("");
    setCard6State("");
    setCard7State("");
    setCard8State("");
    setCard9State("");
    setPlayerState("Player 1 Turn!");
    setPlayerTrue(true);
    setButton1State(false);
    setButton2State(false);
    setButton3State(false);
    setButton4State(false);
    setButton5State(false);
    setButton6State(false);
    setButton7State(false);
    setButton8State(false);
    setButton9State(false);
    setCheckButtonState(true);
    setBlackColor1("black");
    setWhiteColor1("white");
    setBlackColor2("black");
    setWhiteColor2("white");
    setBlackColor3("black");
    setWhiteColor3("white");
    setBlackColor4("black");
    setWhiteColor4("white");
    setBlackColor5("black");
    setWhiteColor5("white");
    setBlackColor6("black");
    setWhiteColor6("white");
    setBlackColor7("black");
    setWhiteColor7("white");
    setBlackColor8("black");
    setWhiteColor8("white");
    setBlackColor9("black");
    setWhiteColor9("white");
  };

  return (
    <>
      <Container className="my-5 p-5">
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
            mainItem={card1State}
            buttonClick={card1Click}
            playerTurn={playerState}
            disable={button1}
            black={blackColor1}
            white={whiteColor1}
          />
          <Cards
            mainItem={card2State}
            buttonClick={card2Click}
            playerTurn={playerState}
            disable={button2}
            black={blackColor2}
            white={whiteColor2}
          />
          <Cards
            mainItem={card3State}
            buttonClick={card3Click}
            playerTurn={playerState}
            disable={button3}
            black={blackColor3}
            white={whiteColor3}
          />
          <Cards
            mainItem={card4State}
            buttonClick={card4Click}
            playerTurn={playerState}
            disable={button4}
            black={blackColor4}
            white={whiteColor4}
          />
          <Cards
            mainItem={card5State}
            buttonClick={card5Click}
            playerTurn={playerState}
            disable={button5}
            black={blackColor5}
            white={whiteColor5}
          />
          <Cards
            mainItem={card6State}
            buttonClick={card6Click}
            playerTurn={playerState}
            disable={button6}
            black={blackColor6}
            white={whiteColor6}
          />
          <Cards
            mainItem={card7State}
            buttonClick={card7Click}
            playerTurn={playerState}
            disable={button7}
            black={blackColor7}
            white={whiteColor7}
          />
          <Cards
            mainItem={card8State}
            buttonClick={card8Click}
            playerTurn={playerState}
            disable={button8}
            black={blackColor8}
            white={whiteColor8}
          />
          <Cards
            mainItem={card9State}
            buttonClick={card9Click}
            playerTurn={playerState}
            disable={button9}
            black={blackColor9}
            white={whiteColor9}
          />
        </Row>
        <Modal
          show={modalState}
          onHide={closeBFunc}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
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
