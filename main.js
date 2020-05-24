//定数の宣言 ※列挙型
const STATUS = {
    WORKING: '作業中',
    COMPLETED: '完了',
};
//グローバル定数 ※数が少ないほど良い
const todos =[]; //各処理の起点はこの配列で行う
//DOMの取得
const targetTbody = document.getElementById('js_tbody');
const trigerEvent = document.getElementById('js_add_triger');
const inputValue = document.getElementById('js_add_value');
const radioBtns = document.querySelectorAll('.radio_box input') //NodeList
//関数の宣言
const displayTodo = selectedTodos => { //仮引数はこの関数処理内での渡され方を明示している
    //displayTodo関数の処理始めに、全削除
    targetTbody.textContent = '';
    //選択されているラジオボタンを確認
    const radioBtnState = [...radioBtns].filter(elm => { //NodeListを配列形式へ変換
        return elm.checked; //配列形式で値を返す
    })
    //選択されているラジオボタンに応じて、selectedTodos配列内要素を選別し、finalTodosに返す
    if (radioBtnState[0].value === 'all') { //???この処理がこのif文の最初の処理でないと実行されないのはなぜ
        finalTodos = selectedTodos; //???なぜここでfinalTodosの前にletを付けたらエラーでるのか
    } else if (radioBtnState[0].value === 'working') {
        finalTodos = selectedTodos.filter(elm => { return !elm.state; })
    } else {
        finalTodos = selectedTodos.filter(elm => { return elm.state; })
    }
    //finalTodosを表示する処理
    finalTodos.forEach(item => { //finalTodosは配列を渡す
        //tr要素を生成
        const tr = document.createElement('tr');
        //td要素を生成
        const idTD = document.createElement('td');
        const commTd = document.createElement('td');
        const staTd = document.createElement('td');
        const remoTd = document.createElement('td');
        //td要素にテキストを追加
        idTD.textContent = todos.indexOf(item); //todos配列のインデックスを取得
        commTd.textContent = item.comment; //forEachメソッドの引数+プロパティ
        staTd.appendChild(createStaBtn(item)); //itemはforEachメソッドで取得したtodos配列の要素todo
        remoTd.appendChild(createRemoBtn(todos.indexOf(item)));
        //tr要素の子要素に各々のtd要素を追加
        tr.appendChild(idTD);
        tr.appendChild(commTd);
        tr.appendChild(staTd);
        tr.appendChild(remoTd);
        //tbody要素の子要素にtr要素を追加
        targetTbody.appendChild(tr);
    });
}
const createStaBtn = todo => {
    const staBtn = document.createElement('button');
    const STATE = todo.state ? STATUS.COMPLETED : STATUS.WORKING;
    staBtn.textContent = STATE;
    //状態変更機能のクリックイベント
    staBtn.addEventListener('click', () => {
        if (!todo.state) { //要素内の値を書き換え
            todo.state = true; //真偽値を代入
        } else {
            todo.state = false;
        }
        const STATE = todo.state ? STATUS.COMPLETED : STATUS.WORKING;
        staBtn.textContent = STATE;
    });
    return staBtn; //このreturnの感覚を理解しておく
}
const createRemoBtn = indexFinal => { //仮引数にtodos配列のインデックスを渡す
    const remoBtn = document.createElement('button');
    remoBtn.textContent = '削除';
    //削除機能のクリックイベント
    remoBtn.addEventListener('click', () => {
        todos.splice(indexFinal, 1); //indexの位置から1つ取り除く
        displayTodo(todos); //表示処理
    });
    return remoBtn;
}
//追加機能のクリックイベント
trigerEvent.addEventListener('click', () => {
    const addValue = inputValue.value;
    inputValue.value = ''; //入力値をクリア
    if (!addValue) return; //空欄の排除
    const todo = { //forEachメソッド内では第一引数で同様の体裁で呼び出し
        comment: addValue,
        state: false,
    };
    todos.push(todo);
    displayTodo(todos); //表示処理
});
//ラジオボタンのchecked属性着脱のクリックイベント
radioBtns.forEach(clickedInput => {
    clickedInput.addEventListener('click', () => {
        radioBtns.forEach(item => { //付与前にforEachメソッドで全てのinputからchecked属性を削除
            item.removeAttribute('checked');
        });
    clickedInput.setAttribute('checked', 'checked');
    displayTodo(todos); //表示処理
    });
});
