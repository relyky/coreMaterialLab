# React + Hooks開發指引與觀念
* 非入門，給已有React開發經驗的人昇級之用
* React v16.8+ 以上才開始支援Hooks
* 語法賞析
* Hooks API Reference 白話文詮釋
* 語法要點
* 關於生命週期

# 一些資源
* [React-Hooks官網](https://zh-hant.reactjs.org/docs/hooks-intro.html)
* [Hooks API 參考](https://zh-hant.reactjs.org/docs/hooks-reference.html)
* [Callback Refs](https://zh-hant.reactjs.org/docs/refs-and-the-dom.html#callback-refs)

# JavaScript元件演進

> __Functional-Components__   
 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;__↓__&ensp;&ensp;&ensp;&ensp;(stateless)   
> __Class-Components__    
 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;__↓__&ensp;&ensp;&ensp;&ensp;(state)   
> __Functional-Components + Hooks__   
 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(state)      

# 語法賞析
* 少了什麼？多了什麼？

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

# 語法基本框架
```javascript
import React,{useState,useEffect} from 'react'

/// ※必需是functional component才可支援Hooks
function FooComponnet(props) {
  const [state, setState] = useStae(initialState)
    
  useEffect(()=>{    
     /* 初始化 */
  },[])
    
  function eventHandler(e) {
     /* 訊息處理 */
     setState(newState)
  }
    
  return (
     <Fragment>
        <p>{state}</p>
        <button onClick={eventHandler}>Go</button>
     </Fragment>
  )
}

```

# Hooks API Reference 白話文詮釋
用白話文詮釋  
#### Basic Hooks
* useState
  * 替代`this.state`。_※注意：為替代非取代。_
* useEffect
  * 可替代`componentDidMount`,&nbsp;`componentDidUpdate`,&nbsp;`componentWillMount`
  * 非同步觸發`render`。
  * 可以說是React-Hooks最重要的核心應用，很多的加值應用都是由此項目為基礎展開。
* useContext
  * 資源向下層共享
#### Additional Hooks
* useReducer
  * 可做為`Redux`的簡易替代品。Redux較新的版本也開始支援Hook，但個人認為缺點部份沒有改進優點部份也沒啥加分。
* useRef
  * 不只取代`React.createRef()`還可做更多，如：[Callback Refs](https://zh-hant.reactjs.org/docs/refs-and-the-dom.html#callback-refs)。
  * 最常做的應用就是`focus()`。
* useMemo
  * 回傳一個[memoized](https://en.wikipedia.org/wiki/Memoization)的值。
  * to avoid expensive calculations on every render.
  * 可改進畫面重繪時有“昴貴運算”的問題，但用的不好反而失分。
#### 以下尚未找到非用不可的理由
* useLayoutEffect
  * 為`useEffect`同步版，當`useEffect`無法滿足時才導入。
* useCallback
  * 回傳一個[memoized](https://en.wikipedia.org/wiki/Memoization)的callback。
  * to avoid expensive calculations on every render.
  * 一般需與React.memo()搭配使用，用起來有點麻煩還可能反效果。若非開發工具類的元件或效率太慢的應用大概不須要用到。
  * 目的與`useMemo`相同，差別在useMemo可避免重複元件本身內無效益的昴貴計算；而useCallback可避免重複render無效益的子層元件。
* useImperativeHandl
  * 須與`forwardRef`搭配使用
  * 把子層資源透過`ref`機制送到父層，若非設計進階的“FancyInput(夢幻元件)”其實也用不到。
* useDebugValue
  * for debug

# 語法要點 - useState

```javascript
function Demo(){
  const [state, setState]=useState({})
  const [counter,setCounter]=useState(0)
  const [name,setName]=useState('帥哥')
  const [formData,setFormData]=useState({})
  const [todoList,setTodoList]=useState([])
  
  function eventHandler(){
    setState(newState) ///※注意：setState()會完全取代原有的值
  
    setCounter(counter+1) //大部份可以滿足
    setCounter(counter => counter+1) //非同步情境時，需用函式版本來更新
    
    setName('甄美女')
    
    ///※注意：setState()會完全取代原有的值，所以…
    setFormData({...formData, [name]:value})
     
    let todoList = todoList.slice() //copy list
    /*...list handling...*/
    setTodoList(todoList)
  }
}
```
#### 等同建構式
```javascript
function SimpleView() {
  const [formData,setFormData]=useState()
  
  /// ※當useState參數以函式帶入時，等同建構式constructor。
  useState(()=>
    setFormData({
      value1:'foo',
      itemList: [...]
    }))    
  ...
}
```
# 語法要點 - useEffect
#### useEffect 語法
```javascript
export function FooComp(props) {
  useEffect(() => {
    // 等同 componentDidMount
    // 等同 componentDidUpdate
    // 在大部份的應用下，componentDidMount與componentDidUpdate都是執行相同的動作
    return () => {
      // 等同 componentWillUnmount
      // ※注意：此處回傳一個lamda函式
    }
  },[Object.values(props)] // 相依陣列，triggered when props changed
  ...
} /* <FooComp show={detail} value={bar} /> */
```
#### useEffect 範例
```javascript
export function FooComp({show,value,reacOnly,disabled,name,onChange}) {

  useEffect(() => {
    // 等同 componentDidMount
  },[] //※必需致少填入空陣列，否則會一直重繪到死當。

  useEffect(() => {
    // 等同 componentDidMount
    // 等同 componentDidUpdate
  },[show,value,reacOnly,disabled,name,onChange] // triggered when props changed

  // 應用之一：timer
  useEffect(() => {
    // 設定計時器 componentDidMount
    const timerId = setInterval(handleInterval, 1000)
    return ()=> {
      // 釋放資源 componentWillUnmount
      clearInterval(timerId) 
    }
  },[]
  
  ...
}
```

## useEffect應用-關於Timer的不同步現象
```javascript
export default function Counter() {
    const [count, setCount] = useState(87)
    
    useEffect(() => {
        const timerId = setInterval(handleInterval, 1000)
        return () => clearInterval(timerId) // 回傳一個lamda函式
    }, []); // componentDidMount

    function handleInterval() {
        console.log('interval', count) 
        /// 怪奇現象：這個 count
        setCount(count => count - 1)   
        /// 與這個 count 不是同一個 count
    }

    return (
        <Fragment>{count}</Fragment>
    )
}
```

- - - 
# 關於生命週期
1. initial
   *  render first time 
   *  an empty status component 
2. componentDidMount
   *  render second time
   *  __※注意：元件完成初始化的過程就已render了２次__
3. componentDidUpdate
   *  render again and again
   *  通常要判斷差異條件成立才執行，否則會render到死當。
4. componentWillUnmount
   *  release resource
   *  通常用來釋放資源。
- - -

# 語法要點 - useContext
#### Context簡介
直接看參考文件：[Context](https://zh-hant.reactjs.org/docs/context.html)   
總之，React Context至少有三個時期的版本。第一版不夠好已被拋棄。於React.v16.3 出了新版 Context 算是勉強可用。到了React.v16.8+加入Hooks版的`useContext`後就好用多了。    
簡單介紹Context，其作用是把資源共享到其下面的子孫層。   
在Context結構上拆分了`Provider`與`Consumer`兩部份，然而`Context.Consumer`的語法設計的不好，新的`useContext`很好的取代了Consumer的地位。  
* 典型的應用之一：多國語系應用的語言包`locale`共享到所有元件。   
* 典型的應用之二：畫面的`skin schema`切換，共享到所有元件。   
* 典型的應用之三：使用者登入資訊`loginUserInfo`與授權資訊`access token` 等，共享到所有元件。   
  
#### Context語法要素說明，真實應用將更複雜一些
```javascript
import React, {useState,useContext} from 'react'

/// 二、需建立context
const StoreContext = React.createContext()

function App() {
   const [store,setStore] = useState() // 一、備好共享標的，此例：上層的state。
   render (
      /// 二、需Provider給子孫層元件
      <StoreContext.Provider value={[store,setStore]}>
          <AppForm/>
      </StoreContext.Provider>
   )
}
// ------
function AppForm() {
   render (<Son/>)
}
// ------
function Son() {
   render (<GrandSon/>)
}
// ------
function GrandSon() {
　　/// 三、子孫層元件透過useContext來使用/消費(Consumer)它。
   const [store,setStore] = useContext(StoreContext)
   function eventHandler(){
      setStore(newState)
   }
   render (
      <div>
         <p>{state}</p>
         <button onClick=>{eventHandler}>Go</button>
      </div>
   )
}

```
[參考：一個比較接近真實的useContext應用。](https://gist.github.com/relyky/e8eb491a86c19491309f60a63f2c079e)

# useReducer
為[Redux](https://redux.js.org/)的簡易替代品，然應已足夠。在應用上常與`useContext`搭配使用，此文件不再細說。google大神可找到相當多相關文件。
[一個應用範例：useFormData.js](https://gist.github.com/relyky/34cb4b36cfa6e5af4d9e7a03d280fbc0) 
    
# 語法要點 - useMemo

#### useMemo語法要素
```javsscript
/// 昂貴的計算函式
function expensiveCalculate(args) {
  /* 昂貴的計算，複雜耗時的計算 */
  /* Closure */
}

/// 使用useMemo包裏即可 
const value = useMemo(()=>{ 
  expensiveCalculate(args)
}, [args]) // 注意其相依參數需指定，通常與expensiveCalculate的參數相同。
```

#### useMemo 說明範例
 ```javascript
 import React, { useState, useMemo } from 'react'

export default function WithMemo() {
    const [count, setCount] = useState(1)
    const [val, setValue] = useState('')

    function expensiveCalculate(count,tag) {
        console.log('compute', { count, tag })
        let sum = 0
        for (let i = 0; i < count * 1000000; i++) {
            sum += i
        }
        return sum;
    }

    const expensive = expensiveCalculate(count,'') // 直接叫用 
    const expensiveMemo = useMemo(() => expensiveCalculate(count, 'M'), [count]) //<--- with Memo

    console.log('render')
    return (
        <div style={{ borderStyle: 'solid', borderWidth:1, padding:'0.5em' }}>

            <h4>{count} - {expensive} - M{expensiveMemo}</h4>
            <span>{val}</span>

            <div>
                <button onClick={() => setCount(count + 1)}>Count</button>
                <input value={val} onChange={event => setValue(event.target.value)} placeholder='val' />
            </div>
        </div>
    )
}
 ```


