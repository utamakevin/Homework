function checkWhitePosition(pos) {
    const [ row, col ] = pos
    if( row > 7 || row < 0 || col > 7 || col < 0) {
        throw new Error('Queen must be placed on the board')
    }
}
function checkBlackPosition(pos) {
    const [ row, col ] = pos
    if( row > 7 || row < 0 || col > 7 || col < 0) {
        throw new Error('Queen must be placed on the board')
    }
}

function checkBothPosition(whitePos, blackPos) {
    const [ whiteRow, whiteCol ] = whitePos
    const [ blackRow, blackCol ] = blackPos
    if(whiteRow === blackRow && whiteCol === blackCol) {
        throw new Error('Queens cannot share the same space')
    }
}


const queens = {
    QueenAttack: class QueenAttack {
        constructor(arg) {
            if(arg) {
                if(arg.white) {
                    this.white = arg.white
                    checkWhitePosition(this.white)
                }else {
                    this.white = [7, 3]
                }
                
                if(arg.black) {
                    this.black = arg.black
                    checkBlackPosition(this.black)
                } else {
                    this.black = [0, 3]
                }
                
                if(arg.white && arg.black) {
                    checkBothPosition(this.white, this.black)
                }
            
            } else {
                this.white = [7, 3]
                this.black = [0, 3]
            }
        }




        get canAttack() {
            const [ whiteRow, whiteCol ] = this.white
            const [ blackRow, blackCol ] = this.black

            if(whiteRow === blackRow || whiteCol === blackCol) {
                return true
            }

            for(let i = 1; i < 8; i++) {
                if(whiteRow === blackRow + i && whiteCol === blackCol + i) {
                    return true
                }
                if(blackRow === whiteRow + i && blackCol === whiteCol + i) {
                    return true
                }
            }

            for(let i = 1, j = -1; i < 8, j > -8; i++, j--) {
                if(whiteRow === blackRow + j && whiteCol === blackCol + i) {
                    return true
                }
                if(blackRow === whiteRow + j && blackCol === whiteCol + i) {
                    return true
                }
            }

            return false
        }

        toString() {
            const [ whiteRow, whiteCol ] = this.white
            const [ blackRow, blackCol ] = this.black

            let board = []

            let rows
            
            for(let i = 0; i < 8; i++) {
                rows = '_'.repeat(8)
                let splitRow = rows.split('')
                if(i === whiteRow) {
                    splitRow.splice(whiteCol, 1, 'W')
                }
                if(i === blackRow) {
                    splitRow.splice(blackCol, 1, 'B')
                }
                rows = splitRow.join(' ')
                board.push(rows)
            }
            return board.join('\n')

        }

    }

}

const queen = new queens.QueenAttack()
queen.toString()
module.exports = queens