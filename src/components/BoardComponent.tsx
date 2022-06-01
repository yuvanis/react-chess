import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board :Board, setBoard}) => {
  
  return (
    <div className='board'>
      {Board.cells.map((row :Cell[], index :number) =>
        <React.Fragment key={index}>
          {row.map(cell =>
            <CellComponent 
            cell={cell}
            key={cell.id}
            />
            )}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;
