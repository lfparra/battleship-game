import React, { useState } from 'react';

function TableGame() {

    const [game, setGame] = useState({
        setUpGame: false
    });

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

    const [ships, setShips] = useState([
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
        ["no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship", "no ship"],
    ]);

    const setValor = (x, y) => {
        if (cuadrantes[x][y] === null) {
            console.log(x, y)
            cuadrantes[x][y] = ships[x][y];
            setCuadrantes(prevState => {
                return { ...prevState, cuadrantes }
            })
        }
    };

    const setUpShips = (x, y) => {
        if (ships[x][y] === "no ship") {
            console.log(x, y)
            ships[x][y] = "ship";
            setShips(prevState => {
                return { ...prevState, ...ships }
            })
        }
    };

    const startGame = (e) => {
        game.setUpGame = true;
        setGame(prevState => {
            return { ...prevState, game }
        })
    };


    if (game.setUpGame === false) {
        return (
            /* Ship choice view */
            <>
               
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <h1>Ship Choice</h1>
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
                                    <td className={`align-middle text-center ${ships[0][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[0][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[0][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[0][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[0][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[0][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[0][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[0][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[0][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[0][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(0, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">2</th>
                                    <td className={`align-middle text-center ${ships[1][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[1][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[1][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[1][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[1][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[1][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[1][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[1][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[1][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[1][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(1, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">3</th>
                                    <td className={`align-middle text-center ${ships[2][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[2][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[2][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[2][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[2][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[2][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[2][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[2][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[2][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[2][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(2, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">4</th>
                                    <td className={`align-middle text-center ${ships[3][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[3][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[3][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[3][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[3][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[3][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[3][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[3][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[3][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[3][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(3, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">5</th>
                                    <td className={`align-middle text-center ${ships[4][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[4][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[4][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[4][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[4][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[4][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[4][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[4][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[4][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[4][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(4, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">6</th>
                                    <td className={`align-middle text-center ${ships[5][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[5][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[5][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[5][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[5][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[5][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[5][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[5][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[5][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[5][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(5, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">7</th>
                                    <td className={`align-middle text-center ${ships[6][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[6][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[6][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[6][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[6][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[6][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[6][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[6][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[6][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[6][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(6, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">8</th>
                                    <td className={`align-middle text-center ${ships[7][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[7][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[7][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[7][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[7][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[7][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[7][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[7][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[7][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[7][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(7, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">9</th>
                                    <td className={`align-middle text-center ${ships[8][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[8][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[8][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[8][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[8][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[8][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[8][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[8][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[8][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[8][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(8, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">10</th>
                                    <td className={`align-middle text-center ${ships[9][0] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 0) }}></td>
                                    <td className={`align-middle text-center ${ships[9][1] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 1) }}></td>
                                    <td className={`align-middle text-center ${ships[9][2] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 2) }}></td>
                                    <td className={`align-middle text-center ${ships[9][3] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 3) }}></td>
                                    <td className={`align-middle text-center ${ships[9][4] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 4) }}></td>
                                    <td className={`align-middle text-center ${ships[9][5] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 5) }}></td>
                                    <td className={`align-middle text-center ${ships[9][6] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 6) }}></td>
                                    <td className={`align-middle text-center ${ships[9][7] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 7) }}></td>
                                    <td className={`align-middle text-center ${ships[9][8] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 8) }}></td>
                                    <td className={`align-middle text-center ${ships[9][9] === "ship" ? `bg-primary` : ""}`} onClick={(e) => { setUpShips(9, 9) }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-3">
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
                                    <td className={`align-middle text-center ${cuadrantes[0][0] === null ? "" : cuadrantes[0][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][1] === null ? "" : cuadrantes[0][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][2] === null ? "" : cuadrantes[0][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][3] === null ? "" : cuadrantes[0][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][4] === null ? "" : cuadrantes[0][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][5] === null ? "" : cuadrantes[0][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][6] === null ? "" : cuadrantes[0][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][7] === null ? "" : cuadrantes[0][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][8] === null ? "" : cuadrantes[0][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[0][9] === null ? "" : cuadrantes[0][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(0, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">2</th>
                                    <td className={`align-middle text-center ${cuadrantes[1][0] === null ? "" : cuadrantes[1][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][1] === null ? "" : cuadrantes[1][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][2] === null ? "" : cuadrantes[1][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][3] === null ? "" : cuadrantes[1][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][4] === null ? "" : cuadrantes[1][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][5] === null ? "" : cuadrantes[1][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][6] === null ? "" : cuadrantes[1][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][7] === null ? "" : cuadrantes[1][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][8] === null ? "" : cuadrantes[1][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[1][9] === null ? "" : cuadrantes[1][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(1, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">3</th>
                                    <td className={`align-middle text-center ${cuadrantes[2][0] === null ? "" : cuadrantes[2][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][1] === null ? "" : cuadrantes[2][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][2] === null ? "" : cuadrantes[2][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][3] === null ? "" : cuadrantes[2][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][4] === null ? "" : cuadrantes[2][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][5] === null ? "" : cuadrantes[2][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][6] === null ? "" : cuadrantes[2][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][7] === null ? "" : cuadrantes[2][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][8] === null ? "" : cuadrantes[2][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[2][9] === null ? "" : cuadrantes[2][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(2, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">4</th>
                                    <td className={`align-middle text-center ${cuadrantes[3][0] === null ? "" : cuadrantes[3][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][1] === null ? "" : cuadrantes[3][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][2] === null ? "" : cuadrantes[3][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][3] === null ? "" : cuadrantes[3][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][4] === null ? "" : cuadrantes[3][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][5] === null ? "" : cuadrantes[3][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][6] === null ? "" : cuadrantes[3][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][7] === null ? "" : cuadrantes[3][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][8] === null ? "" : cuadrantes[3][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[3][9] === null ? "" : cuadrantes[3][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(3, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">5</th>
                                    <td className={`align-middle text-center ${cuadrantes[4][0] === null ? "" : cuadrantes[4][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][1] === null ? "" : cuadrantes[4][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][2] === null ? "" : cuadrantes[4][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][3] === null ? "" : cuadrantes[4][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][4] === null ? "" : cuadrantes[4][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][5] === null ? "" : cuadrantes[4][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][6] === null ? "" : cuadrantes[4][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][7] === null ? "" : cuadrantes[4][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][8] === null ? "" : cuadrantes[4][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[4][9] === null ? "" : cuadrantes[4][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(4, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">6</th>
                                    <td className={`align-middle text-center ${cuadrantes[5][0] === null ? "" : cuadrantes[5][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][1] === null ? "" : cuadrantes[5][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][2] === null ? "" : cuadrantes[5][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][3] === null ? "" : cuadrantes[5][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][4] === null ? "" : cuadrantes[5][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][5] === null ? "" : cuadrantes[5][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][6] === null ? "" : cuadrantes[5][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][7] === null ? "" : cuadrantes[5][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][8] === null ? "" : cuadrantes[5][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[5][9] === null ? "" : cuadrantes[5][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(5, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">7</th>
                                    <td className={`align-middle text-center ${cuadrantes[6][0] === null ? "" : cuadrantes[6][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][1] === null ? "" : cuadrantes[6][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][2] === null ? "" : cuadrantes[6][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][3] === null ? "" : cuadrantes[6][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][4] === null ? "" : cuadrantes[6][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][5] === null ? "" : cuadrantes[6][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][6] === null ? "" : cuadrantes[6][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][7] === null ? "" : cuadrantes[6][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][8] === null ? "" : cuadrantes[6][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[6][9] === null ? "" : cuadrantes[6][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(6, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">8</th>
                                    <td className={`align-middle text-center ${cuadrantes[7][0] === null ? "" : cuadrantes[7][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][1] === null ? "" : cuadrantes[7][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][2] === null ? "" : cuadrantes[7][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][3] === null ? "" : cuadrantes[7][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][4] === null ? "" : cuadrantes[7][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][5] === null ? "" : cuadrantes[7][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][6] === null ? "" : cuadrantes[7][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][7] === null ? "" : cuadrantes[7][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][8] === null ? "" : cuadrantes[7][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[7][9] === null ? "" : cuadrantes[7][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(7, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">9</th>
                                    <td className={`align-middle text-center ${cuadrantes[8][0] === null ? "" : cuadrantes[8][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][1] === null ? "" : cuadrantes[8][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][2] === null ? "" : cuadrantes[8][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][3] === null ? "" : cuadrantes[8][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][4] === null ? "" : cuadrantes[8][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][5] === null ? "" : cuadrantes[8][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][6] === null ? "" : cuadrantes[8][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][7] === null ? "" : cuadrantes[8][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][8] === null ? "" : cuadrantes[8][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[8][9] === null ? "" : cuadrantes[8][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(8, 9) }}></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="align-middle text-center">10</th>
                                    <td className={`align-middle text-center ${cuadrantes[9][0] === null ? "" : cuadrantes[9][0] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 0) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][1] === null ? "" : cuadrantes[9][1] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 1) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][2] === null ? "" : cuadrantes[9][2] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 2) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][3] === null ? "" : cuadrantes[9][3] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 3) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][4] === null ? "" : cuadrantes[9][4] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 4) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][5] === null ? "" : cuadrantes[9][5] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 5) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][6] === null ? "" : cuadrantes[9][6] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 6) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][7] === null ? "" : cuadrantes[9][7] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 7) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][8] === null ? "" : cuadrantes[9][8] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 8) }}></td>
                                    <td className={`align-middle text-center ${cuadrantes[9][9] === null ? "" : cuadrantes[9][9] === "ship" ? `bg-danger` : `bg-secondary`}`} onClick={(e) => { setValor(9, 9) }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default TableGame;