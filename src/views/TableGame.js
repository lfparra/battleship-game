import React, { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2/src/sweetalert2.js'


function TableGame() {

    const [game, setGame] = useState({
        setUpGame: false
    });

    /*Quadrants view game   */
    const [cuadrantes, setCuadrantes] = useState([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
    /*Quadrants view choice view   */
    const [ships, setShips] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const playGame = (x, y) => {
        if (cuadrantes[x][y] === null) {
            console.log(x, y)
            cuadrantes[x][y] = ships[x][y];
            setCuadrantes(prevState => {
                return { ...prevState, cuadrantes }
            })
        }
    };
    const setUpShips = (x, y) => {
        if (ships[x][y] === 0) {
            console.log(x, y)
            ships[x][y] = 1;
            setShips(prevState => {
                return { ...prevState, ...ships }
            })
        }
    };

    /* Alert message and show the Ships */
    const showShips = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Battle Ship',
            text: 'You lost',
            showCancelButton: true
        });
        setTimeout(function () {
            game.setUpGame = !game.setUpGame;
            setGame(prevState => {
                return { ...prevState, ...game }
            })
        }, 1000)

        cuadrantes[0] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[1] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[2] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[3] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[4] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[5] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[6] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[7] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[8] = [null, null, null, null, null, null, null, null, null, null];
        cuadrantes[9] = [null, null, null, null, null, null, null, null, null, null];

        setCuadrantes(prevState => {
            return { ...prevState, ...cuadrantes }
        })
    };

    const startGame = (e) => {
        /* Restart Table */
        ships[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ships[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        setShips(prevState => {
            return { ...prevState, ...ships }
        })

        /* Random Row position */
        let countRow = 0;
        while (countRow < 4) {
            let randomNum = Math.floor(Math.random() * 7)
            let indexRow = randomNum
            let indexCol = randomNum
            ships[indexRow][indexCol] = 1
            ships[indexRow][indexCol + 1] = 1
            ships[indexRow][indexCol + 2] = 1
            setShips(prevState => {
                return { ...prevState, ...ships }
            })
            countRow++;
        }
        /* Random Col position */
        let countCol = 0;
        while (countCol < 3) {
            let randomNum = Math.floor(Math.random() * 7)
            let indexRow = randomNum
            let indexCol = randomNum
            ships[indexRow][indexCol] = 1
            ships[indexRow + 1][indexCol] = 1
            ships[indexRow + 2][indexCol] = 1
            setShips(prevState => {
                return { ...prevState, ...ships }
            })
            countCol++;
        }

        game.setUpGame = !game.setUpGame;
        setGame(prevState => {
            return { ...prevState, game }
        })
    }


    if (game.setUpGame === false) {
        return (
            /* Ship choice view */
            <>
                <div className="row mt-3">
                    <div className="col-md-8 offset-md-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="align-middle text-center"> </th>
                                    <th scope="col" className="align-middle text-center">1</th>
                                    <th scope="col" className="align-middle text-center">2</th>
                                    <th scope="col" className="align-middle text-center">3</th>
                                    <th scope="col" className="align-middle text-center">4</th>
                                    <th scope="col" className="align-middle text-center">5</th>
                                    <th scope="col" className="align-middle text-center">6</th>
                                    <th scope="col" className="align-middle text-center">7</th>
                                    <th scope="col" className="align-middle text-center">8</th>
                                    <th scope="col" className="align-middle text-center">9</th>
                                    <th scope="col" className="align-middle text-center">10</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="align-middle text-center">1</th>
                                    <td className={`align-middle text-center ${ships[0][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[0][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">2</th>
                                    <td className={`align-middle text-center ${ships[1][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[1][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">3</th>
                                    <td className={`align-middle text-center ${ships[2][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[2][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">4</th>
                                    <td className={`align-middle text-center ${ships[3][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[3][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">5</th>
                                    <td className={`align-middle text-center ${ships[4][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[4][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">6</th>
                                    <td className={`align-middle text-center ${ships[5][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[5][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">7</th>
                                    <td className={`align-middle text-center ${ships[6][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[6][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">8</th>
                                    <td className={`align-middle text-center ${ships[7][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[7][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">9</th>
                                    <td className={`align-middle text-center ${ships[8][0] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][1] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][2] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][3] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][4] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][5] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][6] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][7] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][8] === 1 ? `bg-danger` : ""}`}></td>
                                    <td className={`align-middle text-center ${ships[8][9] === 1 ? `bg-danger` : ""}`}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">10</th>
                                    <td className={`align-middle text-center ${ships[9][0] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[9][1] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[9][2] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[9][3] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[9][4] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[9][5] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[9][6] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[9][7] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[9][8] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[9][9] === 1 ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 9) }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-2">
                        <button type="button" className="btn btn-lg btn-success" onClick={startGame}>Start Game</button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            /* TableGame view */
            <>
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center mb-3">
                        <h2>The Battle begins</h2>
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="align-middle text-center"> </th>
                                    <th scope="col" className="align-middle text-center">1</th>
                                    <th scope="col" className="align-middle text-center">2</th>
                                    <th scope="col" className="align-middle text-center">3</th>
                                    <th scope="col" className="align-middle text-center">4</th>
                                    <th scope="col" className="align-middle text-center">5</th>
                                    <th scope="col" className="align-middle text-center">6</th>
                                    <th scope="col" className="align-middle text-center">7</th>
                                    <th scope="col" className="align-middle text-center">8</th>
                                    <th scope="col" className="align-middle text-center">9</th>
                                    <th scope="col" className="align-middle text-center">10</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="align-middle text-center">1</th>
                                    <td className={`align-middle text-center ${cuadrantes[0][0] === null ? "" : cuadrantes[0][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][1] === null ? "" : cuadrantes[0][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][2] === null ? "" : cuadrantes[0][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][3] === null ? "" : cuadrantes[0][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][4] === null ? "" : cuadrantes[0][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][5] === null ? "" : cuadrantes[0][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][6] === null ? "" : cuadrantes[0][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][7] === null ? "" : cuadrantes[0][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][8] === null ? "" : cuadrantes[0][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][9] === null ? "" : cuadrantes[0][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(0, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">2</th>
                                    <td className={`align-middle text-center ${cuadrantes[1][0] === null ? "" : cuadrantes[1][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][1] === null ? "" : cuadrantes[1][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][2] === null ? "" : cuadrantes[1][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][3] === null ? "" : cuadrantes[1][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][4] === null ? "" : cuadrantes[1][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][5] === null ? "" : cuadrantes[1][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][6] === null ? "" : cuadrantes[1][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][7] === null ? "" : cuadrantes[1][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][8] === null ? "" : cuadrantes[1][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][9] === null ? "" : cuadrantes[1][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(1, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">3</th>
                                    <td className={`align-middle text-center ${cuadrantes[2][0] === null ? "" : cuadrantes[2][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][1] === null ? "" : cuadrantes[2][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][2] === null ? "" : cuadrantes[2][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][3] === null ? "" : cuadrantes[2][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][4] === null ? "" : cuadrantes[2][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][5] === null ? "" : cuadrantes[2][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][6] === null ? "" : cuadrantes[2][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][7] === null ? "" : cuadrantes[2][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][8] === null ? "" : cuadrantes[2][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][9] === null ? "" : cuadrantes[2][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(2, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">4</th>
                                    <td className={`align-middle text-center ${cuadrantes[3][0] === null ? "" : cuadrantes[3][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][1] === null ? "" : cuadrantes[3][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][2] === null ? "" : cuadrantes[3][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][3] === null ? "" : cuadrantes[3][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][4] === null ? "" : cuadrantes[3][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][5] === null ? "" : cuadrantes[3][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][6] === null ? "" : cuadrantes[3][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][7] === null ? "" : cuadrantes[3][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][8] === null ? "" : cuadrantes[3][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][9] === null ? "" : cuadrantes[3][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(3, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">5</th>
                                    <td className={`align-middle text-center ${cuadrantes[4][0] === null ? "" : cuadrantes[4][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][1] === null ? "" : cuadrantes[4][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][2] === null ? "" : cuadrantes[4][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][3] === null ? "" : cuadrantes[4][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][4] === null ? "" : cuadrantes[4][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][5] === null ? "" : cuadrantes[4][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][6] === null ? "" : cuadrantes[4][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][7] === null ? "" : cuadrantes[4][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][8] === null ? "" : cuadrantes[4][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][9] === null ? "" : cuadrantes[4][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(4, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">6</th>
                                    <td className={`align-middle text-center ${cuadrantes[5][0] === null ? "" : cuadrantes[5][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][1] === null ? "" : cuadrantes[5][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][2] === null ? "" : cuadrantes[5][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][3] === null ? "" : cuadrantes[5][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][4] === null ? "" : cuadrantes[5][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][5] === null ? "" : cuadrantes[5][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][6] === null ? "" : cuadrantes[5][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][7] === null ? "" : cuadrantes[5][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][8] === null ? "" : cuadrantes[5][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][9] === null ? "" : cuadrantes[5][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(5, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">7</th>
                                    <td className={`align-middle text-center ${cuadrantes[6][0] === null ? "" : cuadrantes[6][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][1] === null ? "" : cuadrantes[6][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][2] === null ? "" : cuadrantes[6][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][3] === null ? "" : cuadrantes[6][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][4] === null ? "" : cuadrantes[6][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][5] === null ? "" : cuadrantes[6][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][6] === null ? "" : cuadrantes[6][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][7] === null ? "" : cuadrantes[6][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][8] === null ? "" : cuadrantes[6][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][9] === null ? "" : cuadrantes[6][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(6, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">8</th>
                                    <td className={`align-middle text-center ${cuadrantes[7][0] === null ? "" : cuadrantes[7][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][1] === null ? "" : cuadrantes[7][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][2] === null ? "" : cuadrantes[7][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][3] === null ? "" : cuadrantes[7][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][4] === null ? "" : cuadrantes[7][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][5] === null ? "" : cuadrantes[7][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][6] === null ? "" : cuadrantes[7][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][7] === null ? "" : cuadrantes[7][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][8] === null ? "" : cuadrantes[7][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][9] === null ? "" : cuadrantes[7][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(7, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">9</th>
                                    <td className={`align-middle text-center ${cuadrantes[8][0] === null ? "" : cuadrantes[8][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][1] === null ? "" : cuadrantes[8][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][2] === null ? "" : cuadrantes[8][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][3] === null ? "" : cuadrantes[8][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][4] === null ? "" : cuadrantes[8][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][5] === null ? "" : cuadrantes[8][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][6] === null ? "" : cuadrantes[8][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][7] === null ? "" : cuadrantes[8][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][8] === null ? "" : cuadrantes[8][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][9] === null ? "" : cuadrantes[8][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(8, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">10</th>
                                    <td className={`align-middle text-center ${cuadrantes[9][0] === null ? "" : cuadrantes[9][0] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][1] === null ? "" : cuadrantes[9][1] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][2] === null ? "" : cuadrantes[9][2] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][3] === null ? "" : cuadrantes[9][3] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][4] === null ? "" : cuadrantes[9][4] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][5] === null ? "" : cuadrantes[9][5] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][6] === null ? "" : cuadrantes[9][6] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][7] === null ? "" : cuadrantes[9][7] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][8] === null ? "" : cuadrantes[9][8] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][9] === null ? "" : cuadrantes[9][9] === 1 ? `bg-danger` : `bg-info`}`} onClick={(e) => { playGame(9, 9) }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-2 col-8 d-flex justify-content-center mt-2">
                        <button type="button" className="btn btn-lg btn-danger active" onClick={showShips}>Show Ships</button>
                    </div>
                </div>
            </>
        );
    }
}

export default TableGame;