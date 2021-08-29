import {useEffect,useState} from "react";
const useFetch =(url)=>{
     const[data,setdata]= useState(null)
     const[isPending,setisPending]=useState(true)
     const[error,setError]=useState(null)
    useEffect(()=>{
        console.log("useEffect ran");
        const abortcont=new AbortController();
        setTimeout(()=>{
          fetch(url,{signal:abortcont.signal})
        .then(res=>{
          if(!res.ok) throw Error ("Data could not be loaded!");
           return res.json();})
        .then(data=>{
          setdata(data);
          setisPending(false);
          setError(null);
         })
        .catch(err=>{
          if(err.name=== 'AbortError'){
            console.log('abort fetch')
          }
          else{
          setisPending(false);
          setError(err.message);
          }
        })
      });
      return() =>abortcont.abort();
        },[url])
     return {data,isPending,error};

}
export default useFetch;