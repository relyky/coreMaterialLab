# React + Hooks開發指引與觀念
* 非入門，給已有React開發經驗的人昇級之用
* React v16.8+ 以上才開始支援Hooks
* 語法賞析
* Hooks API Reference 白話文詮釋
* 語法要點

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





- - -
