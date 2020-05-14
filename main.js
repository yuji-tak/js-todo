const targetTbody = document.getElementById('js_tbody'); // 出力先の取得
const trigerEvent = document.getElementById('js_add_triger') // todo入力のトリガー
const inputValue = document.getElementById('js_add_value') // 入力元を取得
const toDoList = []; // 配列で、連想配列を格納
let id = 0;

// * todoを表示する関数を定義
function displayTodo(toDo) {
    const text = `<tr>
                    <td>${id}</td>
                    <td>${toDo}</td>
                    <td><button>作業中</button></td>
                    <td><button>削除</button></td>
                 </tr>`;
    
    const position = 'beforeend';
    targetTbody.insertAdjacentHTML(position, text);
}
// ** クリックイベントを定義
trigerEvent.addEventListener('click', function() {
    const toDo = inputValue.value;
    if (toDo) { // 入力値が入力されていれば関数を実行
        displayTodo(toDo, id, false, false);
        toDoList.push(
            {
                id: id,
                name: toDo,
                // done: false,
                // trash: false
            }
        );
    }
    inputValue.value = ''; // イベント終了後、空欄にする
    id++;
});

console.log(toDoList);

// アロー関数
// var getTriangle = function (base, height) {
//   return (base * height) / 2;
// };
// console.log(getTriangle(2, 4));
    // ↓書き換え
// var getTriangle = (base, height) => {
//   return (base * height) / 2;
// };
// console.log(getTriangle(10, 2));
    // 他パターン
// const count = n => {
//     return n * n;
// }
// console.log(count(5));
//     // ↓さらに処理内容のステートメントが1つだけであれば、{}を省略できる。さらに{}省略時はステートメントの結果が返り値になるので、returnが不要になる
// const count2 = s => s * s;
// console.log(count2(6));

// const arr = [1, 5, 7, 3, 4, 6, 13, 10];
//     // filter()メソッドは、引数として与えられた関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成する。
// const arr1 = arr.filter(function(m) {
//     return m % 2 == 0;
// });
// console.log(arr1);
//     // ↓書き換え
// const arr2 = arr.filter(s => s % 2 == 0);
// console.log(arr2);

// 対象要素.addEventLitener(種類, 関数, false)
// 第一引数にイベントの種類を指定することで、このイベントがどのようなケースに対応するのかを特定
// 第二引数に関数を指定することで、任意のイベントが発生した時に関数内に書かれた処理を実行できる
// 第三引数は、イベントの伝播の方式をtrue/falseで指定する(通常はfalse)
// const btn = document.getElementById('btn_add');
// btn.addEventListener('click', function() {
//     console.log('クリックされたよ');
// }, false);

// window.addEventListener('keydown', function(event) {
//     console.log(event.keycode);
// });
// window.addEventListener('DOMContentLoaded', function() {
//     console.log('読まれた');
// });

// フォーム部品のname属性は「document.forms」から取得できる

// イベントハンドラーの登録
    // この方法では同一の要素/同一イベントに対して、複数のイベントハンドラーを紐付けられない
// window.onload = function() {
//     document.getElementById('btn').onclick = function() {
//         window.alert('ほ');
//     }
// }
// ページロード時に実行されるイベントリスナーを登録
// document.addEventListener('DOMContentLoaded', function() {
//     // クリック時に実行されるイベントリスナーを登録
//     document.getElementById('btn').addEventListener('click', function() {
//         window.alert('ほ');
//     }, false);
// }, false);
// 新たに生成されたtrをHTMLへ挿入し、タグ内にtdを挿入
        // addTarget.insertAdjacentElement('beforeend', trTag);
        // trTag.insertAdjacentElement('beforeend', tdTagCom);
    // ①td：ID
        // const tdTagId = document.createElement('td');
        // const num = addTarget.childElementCount;
        //     // データ型を文字列へ変換
        // const numString = num.toString(10);
        // tdTagId.innerText = numString;
        //     // ②td：コメント
        //     // td要素を生成
        // const tdTagCom = document.createElement('td');
        //     // 入力値をテキストノードとして生成
        // const addValueText = document.createTextNode(addValue.value);
        //     // tdタグにテキストノード（入力値）を挿入
        // tdTagCom.appendChild(addValueText);

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