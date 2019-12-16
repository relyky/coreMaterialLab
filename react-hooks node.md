# React + Hooks開發指引與觀念
* 非入門，給已有React開發經驗的人昇級之用
* React v16.8+ 以上才開始支援Hooks
* 語法賞析
* Hooks API Reference 白話文詮釋

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


- - -
