const targetTbody = document.getElementById('js_tbody'); // 出力先の取得
const trigerEvent = document.getElementById('js_add_triger') // todo入力のトリガー
const inputValue = document.getElementById('js_add_value') // 入力元を取得
const toDoList = []; // 配列で、連想配列を格納
let id = 0;

const WORKING = '作業中'; // 作業状態のテキスト要素
const COMPLETED = '完了';
const DELETE = '削除';

// * todoを表示する関数を定義
function displayTodo(toDo, id, done, trash) {
    if (trash) { return; } // trashがtrueならここで処理を終了
    const DONE = done ? COMPLETED : WORKING ; // 三項演算子による条件分岐でテキスト要素を制御
    const text = `<tr>
                    <td>${id}</td>
                    <td>${toDo}</td>
                    <td><button>${DONE}</button></td>
                    <td><button>${DELETE}</button></td>
                 </tr>`;
    const position = 'beforeend';
    targetTbody.insertAdjacentHTML(position, text);
}
// ** todo追加：クリックイベントを定義
trigerEvent.addEventListener('click', function() {
    const toDo = inputValue.value;
    if (toDo) { // 入力値が入力されていれば関数を実行
        displayTodo(toDo, id, false, false); // toDo・idのみ変数
        toDoList.push(
            {
                id: id,
                name: toDo,
                done: false,
                trash: false,
            }
        );
    }
    inputValue.value = ''; // イベント終了後、空欄にする
    id++;    
});
console.log(toDoList);

// ** todo削除：クリックイベントを定義
targetTbody.addEventListener('click', e => {
    e.target.parentNode.parentNode.remove();
});



// // ### バックアップ：05141430：タスク追加機能
//     // ■ 必要な要素の取得
//         // イベントトリガー
//         const addTrigger = document.getElementById('js_add_triger');
//         // 入力値を取得
// const addValue = document.getElementById('js_add_value');
//         // 入力先を取得
// const addTarget = document.getElementById('js_tbody');
//         // 連想配列を格納する配列を初期化
// const todos = [];
//     console.log(todos);
//     // ■ 新規タスク追加：クリックイベント
// document.addEventListener('DOMContentLoaded', function() {
//         // 追加トリガー：クリック時に実行されるイベントリスナーを登録
//     addTrigger.addEventListener('click', function() {        
//         // tr要素を生成
//         const trTag = document.createElement('tr');
//             // ③td：ボタン
//         const tdTagState = document.createElement('td');
//             // 状態ボタン
//         const stateButton = document.createElement('button');
//         stateButton.innerText = '作業中';
//             // 削除ボタン
//         const removeButton  = document.createElement('button');
//         removeButton.innerText ='削除';
//         tdTagState.appendChild(stateButton);
//         tdTagState.appendChild(removeButton);

//         // *** 指摘事項を試行
//             // * 連想配列でtodoを管理
//         const todo = { // todoのプロパティを定義
//             task: addValue.value, // 入力値
//             status: stateButton.innerText, // 状態
//         };
//         todos.push(todo);// todo連想配列をtodos配列で管理

//             // * todo連想配列の内容を表示させる関数
//         function displayTodos() {
//                 // ①td：ID
//                 const tdTagId = document.createElement('td');                
//                 const num = addTarget.childElementCount;
//                 const numString = num.toString(10);
//                 tdTagId.innerText = numString;
//             // 書き換え
//                 console.log(keys(todos));

//                 // ②td：コメント
//                 const tdTagCom = document.createElement('td');
//                     // 入力値をテキストノードとして生成
//                 const addValueText = document.createTextNode(addValue.value);
//                     // tdタグにテキストノード（入力値）を挿入
//                 tdTagCom.appendChild(addValueText);
//                 // tr + td
//                 addTarget.appendChild(trTag);
//                 trTag.appendChild(tdTagId);
//                 trTag.appendChild(tdTagCom);
//                 trTag.appendChild(tdTagState);
//         }
//         displayTodos();

//     }, false);
// }, false);