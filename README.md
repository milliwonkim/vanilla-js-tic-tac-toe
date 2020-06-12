1. variable
   1. X_CLASS = 'x' => className에 x를 삽입하기 위해서 씀(틱택토에서 x의 turn 표현)
   2. CIRCLE_CLASS = 'circle' => className에 circle을 삽입하기 위해서 씀(틱택토에서 x의 turn 표현)
   3. WINNING_COMBINATION => 가로일(1)자, 세로일(1)자, 대각선일(1)자 중 하나만이라도 element들이 다 들어가있는 배열과 같을 경우, 끝내게 하기 위한 배열들
   4. cellElements: data-cell이라는 attribute를 모두 선택
   5. board: id가 board인 element를 선택
   6. winningMessageElement: id가 winningMessage인 element를 선택
   7. restartButton: id가 restartButton인 element를 선택
   8. winningMessageTextElement: attribute가 'data-winning-message-text'인 첫 번째 element를 불러온다
   9. circleTurn: circle의 차례인지 아닌지 boolean
2. method
   1. startGame()를 실행함
   2. restartButton.addEventListener("click", startGame)
      1. restartButton 객체를 클릭하면 startGame 메소드실행하게 이벤트등록
   3. startGame()
      1. circleTurn: false => x의 차례로 시작힘
      2. cellElements의 각 element에 대해
         1. X_CLASS와 CIRCLE_CLASS로 등록된 class를 삭제한다
         2. cell을 클릭시에 handleClick이라는 메소드를 등록한 것을 지운다
         3. cell에 클릭시에 handleClick이라는 메소드를 다시 등록하고 이벤트가 한번만 실행하게 한다.
      3. setBoardHoverClass() 메소드를 실행함
      4. winningMessageElement에 있는 show라는 class를 지움
   4. handleClick(e)
      1. cell: 현재의 타겟
      2. currentClass
         1. circleTurn === true?
            1. CIRCLE_CLASS
         2. circleTurn === false?
            1. X_CLASS
         3. placeMark(cell, currentClass)를 실행함
         4. if checkWin(currnetClass)
            1. === true?
               1. endGame(false)를 실행함
            2. === false?
               1. isDraw() === true?
                  1. endGame(true)를 실행함
            3. 아무것도 아니라면
               1. swapTurns()라는 메소드를 실행함
               2. setBoardHoverClass()라는 메소드를 실행함
   5. endGame(draw): 게임이 종료됐을때, 비겼냐 안비겼냐에 따라 결과값이 달라짐
      1. draw가
         1. === true?
            1. winningMessageTextElement의 innerText가 "Draw!!"
         2. === false?
            1. winningMessageTextElement의 innerText가
               1. circleTurn === true?
                  1. "O's Wins!"
               2. circleTurn === false?
                  1. "X's Wins!"
      2. winningMessageElement의 class에 show라는 걸 삽입함
   6. isDraw()
      1. 모든 cellElements들이 들어가있는 새로운 배열을 만든다
         1. 이 새로운 배열의 모든 element들이 X_CLASS 혹은 CIRCLE_CLASS가 들어가있는 cell을 갖고 있다면 true, 아니라면 false를 반환함
   7. placeMark(cell, currentClass)
      1. 현재의 cell의 class에 currentClass를 삽입함
   8. swapTurns()
      1. circleTurn은 현재의 circleTurn의 반대의값
   9. setBoardHoverClass()
      1. board의 class에서 X_CLASS를 제거함
      2. board의 class에서 CIRCLE_CLASS를 제거함
      3. if circleTurn
         1. === true?
            1. board의 class에 CIRCLE_CLASS를 삽입함
         2. === false?
            1. board의 class에 X_CLASS를 삽입함
   10. checkWin(currentClass)
       1. WINNING_COMBINATION의 element들 중에
          1. currentClass를 포함하는 class를 갖고있는 cellElements들을 모두 갖고있는 element array가 하나라도 있다면 그 currentClass가 이긴것이다.
