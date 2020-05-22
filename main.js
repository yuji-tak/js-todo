//定数の宣言 ※列挙型
const STATUS = {
    WORKING: '作業中',
    COMPLETED: '完了',
};
//グローバル定数 ※数が少ないほど良い、連想配列todoを格納する配列なのでtodos
const todos =[]; //関数の起点はこの配列で行う
//DOMの取得
const targetTbody = document.getElementById('js_tbody');
const trigerEvent = document.getElementById('js_add_triger');
const inputValue = document.getElementById('js_add_value');

//関数の宣言
const displayTodo = selectedTodos => { //仮引数は処理の中身を明示している
    targetTbody.textContent = ''; //処理始めに、全削除
    selectedTodos.forEach((item, index) => { //selectedTodosは配列を渡す
    
        //tr要素を生成
        const tr = document.createElement('tr');
        //td要素を生成
        const idTD = document.createElement('td');
        const commTd = document.createElement('td');
        const staTd = document.createElement('td');
        const remoTd = document.createElement('td');
        //td要素にテキストを追加
        idTD.textContent = index; // forEachメソッドの引数
        commTd.textContent = item.comment; // forEachメソッドの引数+プロパティ
        staTd.appendChild(createStaBtn(item));
        remoTd.appendChild(createRemoBtn(index));
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
        if (todo.state === false) {
            todo.state = true; //真偽値を代入
            const STATE = todo.state ? STATUS.COMPLETED : STATUS.WORKING;
            staBtn.textContent = STATE;
        } else if (todo.state === true) {
            todo.state = false;
            const STATE = todo.state ? STATUS.COMPLETED : STATUS.WORKING;
            staBtn.textContent = STATE;
        }
    });
    
    return staBtn;
}
const createRemoBtn = index => {
    const remoBtn = document.createElement('button');
    remoBtn.textContent = '削除';
    // 削除機能のクリックイベント
    remoBtn.addEventListener('click', () => {
        todos.splice(index, 1); //indexの位置から1つ取り除く
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



// 以下、復習用
// //200521：バックアップ
// trigerEvent.addEventListener('click', () => {//クリックイベント
//     const addValue = inputValue.value;
//     if (addValue === '') return; //空欄の排除

//     const todo = { //連想配列を生成
//             comment: addValue,
//             state: false,
//             delete: false,
//         };
//     todoList.push(todo); //連想配列を配列形式へ格納

// //一度全てを削除するwhile文
// while (targetTbody.firstChild) { targetTbody.removeChild(targetTbody.firstChild) }

// //この処理を更にfunctionに格納し、削除等の他機能使用時にもコールバックさせるイメージ？
// todoList.forEach((item, index) => {
//         function displayTodo() {
//             const tr = document.createElement('tr');
//             const createId = document.createElement('td'); //ID用
//             const createComm = document.createElement('td'); //コメント用
//             const createSta = document.createElement('td'); //状態用
//             const createStaBtn = document.createElement('button'); //状態用btn
//             const createRemo = document.createElement('td'); //削除用
//             const createRemoBtn = document.createElement('button'); //状態用btn
//             createId.textContent = index; //第二引数
//             createComm.textContent = item.comment; //第一引数+プロパティ
//             const STATE = todo.state ? COMPLETED : WORKING; //三項演算子
//             createStaBtn.textContent = STATE;
//             createRemoBtn.textContent = DELETE;

//             targetTbody.appendChild(tr);
//             tr.appendChild(createId);    
//             tr.appendChild(createComm);
//             tr.appendChild(createSta);
//             createSta.appendChild(createStaBtn);
//             tr.appendChild(createRemo);
//             createSta.appendChild(createRemoBtn);
//         }
//         displayTodo();
//     });

// }); //clickイベント終

// // 仮：静的削除イベント
// targetTbody.addEventListener('click', e => {
//     e.target.parentNode.parentNode.remove(); //targetプロパティ
//         console.log(e.target);
//         console.log(e.currentTarget);
// });



// function displayTodo(toDo, id, done, trash) {
//     if (trash) return; // trashがtrueならここで処理を終了
//     const STATE = done ? COMPLETED : WORKING ; // 三項演算子による条件分岐でテキスト要素を制御
//     const text = `<tr>
//                     <td>${id}</td>
//                     <td>${toDo}</td>
//                     <td><button>${STATE}</button></td>
//                     <td><button>${DELETE}</button></td>
//                  </tr>`;
//     const position = 'beforeend';
//     targetTbody.insertAdjacentHTML(position, text);
// }

// これまでの軌跡
// // ** todo追加：クリックイベントを定義
// trigerEvent.addEventListener('click', function() {
//     const toDo = inputValue.value;
//     if (toDo) { // 入力値が入力されていれば関数を実行
//         displayTodo(toDo, id, false, false); // toDo・idのみ変数
//         toDoList.push(
//             {
//                 id: id,
//                 name: toDo,
//                 done: false,
//                 trash: false,
//             }
//         );
//     }
//     inputValue.value = ''; // イベント終了後、空欄にする
//     id++;    
// });
// console.log(toDoList);